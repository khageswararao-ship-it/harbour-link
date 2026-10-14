/**
 * HARBOUR LINK - INTERACTIVE TICKET BOOKING WIZARD (ES6+)
 * 4-Step wizard, dynamic price calculator, input validation, and E-Ticket generator
 */

const FARES = {
  adult: 9.11,
  senior: 5.86,
  youth: 5.86,
  child: 4.29,
  infant: 0.0
};

const ADDONS = {
  centreville: 35.00,
  bikerental: 15.00
};

const state = {
  step: 1,
  route: 'Centre Island',
  date: '',
  time: '10:00 AM',
  tripType: 'roundtrip', // 'roundtrip' or 'oneway'
  passengers: {
    adult: 1,
    senior: 0,
    youth: 0,
    child: 0,
    infant: 0
  },
  addons: {
    centreville: 0,
    bikerental: 0
  },
  contact: {
    name: '',
    email: '',
    phone: ''
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initURLParams();
  initStepNavigation();
  initPassengerCounters();
  initAddonToggles();
  initTripTypeSelector();
  updateCalculationSummary();
  initBookingFormSubmit();
});

// Parse query params (e.g., ?destination=centre&time=10:00%20AM)
function initURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const dest = urlParams.get('destination');
  const time = urlParams.get('time');

  if (dest) {
    const routeSelect = document.getElementById('booking-route');
    if (routeSelect) {
      if (dest === 'centre') routeSelect.value = 'Centre Island';
      if (dest === 'wards') routeSelect.value = "Ward's Island";
      if (dest === 'hanlans') routeSelect.value = "Hanlan's Point";
      state.route = routeSelect.value;
    }
  }

  if (time) {
    const timeSelect = document.getElementById('booking-time');
    if (timeSelect) {
      timeSelect.value = time;
      state.time = time;
    }
  }

  // Set default date to today
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
    state.date = today;
    dateInput.addEventListener('change', (e) => {
      state.date = e.target.value;
    });
  }
}

function initStepNavigation() {
  const nextBtn = document.getElementById('btn-next-step');
  const prevBtn = document.getElementById('btn-prev-step');

  nextBtn?.addEventListener('click', () => {
    if (validateCurrentStep()) {
      goToStep(state.step + 1);
    }
  });

  prevBtn?.addEventListener('click', () => {
    goToStep(state.step - 1);
  });
}

function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > 4) return;
  state.step = stepNumber;

  // Update step indicators
  const stepIndicators = document.querySelectorAll('.booking-step');
  stepIndicators.forEach((el, idx) => {
    const stepIdx = idx + 1;
    el.classList.remove('active', 'completed');
    if (stepIdx === state.step) {
      el.classList.add('active');
    } else if (stepIdx < state.step) {
      el.classList.add('completed');
    }
  });

  // Switch step panels
  document.querySelectorAll('.wizard-panel').forEach((panel) => {
    panel.style.display = 'none';
  });
  const currentPanel = document.getElementById(`step-panel-${state.step}`);
  if (currentPanel) currentPanel.style.display = 'block';

  // Toggle prev button visibility
  const prevBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  if (prevBtn) prevBtn.style.display = state.step === 1 ? 'none' : 'inline-flex';
  if (nextBtn) {
    nextBtn.textContent = state.step === 4 ? 'Confirm & View E-Ticket 🎟️' : 'Continue to Next Step →';
  }

  updateCalculationSummary();
}

function validateCurrentStep() {
  if (state.step === 1) {
    const routeSelect = document.getElementById('booking-route');
    const timeSelect = document.getElementById('booking-time');
    const dateInput = document.getElementById('booking-date');

    if (!dateInput.value) {
      alert('Please select a departure date.');
      return false;
    }
    state.route = routeSelect.value;
    state.time = timeSelect.value;
    state.date = dateInput.value;
    return true;
  }

  if (state.step === 2) {
    const totalPassengers =
      state.passengers.adult +
      state.passengers.senior +
      state.passengers.youth +
      state.passengers.child +
      state.passengers.infant;

    if (totalPassengers < 1) {
      alert('Please select at least 1 passenger.');
      return false;
    }
    return true;
  }

  if (state.step === 4) {
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.trim();

    if (!name || !email || !phone) {
      alert('Please fill in all contact details.');
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return false;
    }
    state.contact = { name, email, phone };
    generateETicket();
    return false; // Prevent advancing past step 4
  }

  return true;
}

function initPassengerCounters() {
  const buttons = document.querySelectorAll('.btn-counter');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const isIncrement = btn.dataset.action === 'plus';

      if (isIncrement) {
        if (state.passengers[type] < 10) state.passengers[type]++;
      } else {
        if (state.passengers[type] > 0) state.passengers[type]--;
      }

      const counterEl = document.getElementById(`count-${type}`);
      if (counterEl) counterEl.textContent = state.passengers[type];

      updateCalculationSummary();
    });
  });
}

function initTripTypeSelector() {
  const radios = document.querySelectorAll('input[name="tripType"]');
  radios.forEach((r) => {
    r.addEventListener('change', (e) => {
      state.tripType = e.target.value;
      updateCalculationSummary();
    });
  });
}

function initAddonToggles() {
  const checkboxes = document.querySelectorAll('.addon-checkbox');
  checkboxes.forEach((cb) => {
    cb.addEventListener('change', (e) => {
      const addon = e.target.dataset.addon;
      state.addons[addon] = e.target.checked ? 1 : 0;
      updateCalculationSummary();
    });
  });
}

function updateCalculationSummary() {
  const multiplier = state.tripType === 'roundtrip' ? 1.0 : 0.55; // Note: Toronto island ferry ticket traditionally includes return, standard ticket is round trip
  let subtotal = 0;

  for (const [type, count] of Object.entries(state.passengers)) {
    subtotal += FARES[type] * count * (state.tripType === 'roundtrip' ? 1 : 0.6);
  }

  for (const [addon, count] of Object.entries(state.addons)) {
    if (count > 0) {
      const totalPassengers = Math.max(1, state.passengers.adult + state.passengers.senior + state.passengers.youth);
      subtotal += ADDONS[addon] * totalPassengers;
    }
  }

  const tax = subtotal * 0.13; // 13% HST Ontario
  const total = subtotal + tax;

  // Update Summary DOM
  const subtotalEl = document.getElementById('summary-subtotal');
  const taxEl = document.getElementById('summary-tax');
  const totalEl = document.getElementById('summary-total');
  const countEl = document.getElementById('summary-passengers-count');

  const totalPassengers =
    state.passengers.adult +
    state.passengers.senior +
    state.passengers.youth +
    state.passengers.child +
    state.passengers.infant;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  if (countEl) countEl.textContent = `${totalPassengers} Passenger${totalPassengers !== 1 ? 's' : ''}`;
}

function generateETicket() {
  const refCode = 'HL-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('ticket-ref').textContent = refCode;
  document.getElementById('ticket-name').textContent = state.contact.name;
  document.getElementById('ticket-route').textContent = `Jack Layton Terminal ➔ ${state.route}`;
  document.getElementById('ticket-date').textContent = `${state.date} at ${state.time}`;
  document.getElementById('ticket-fare-type').textContent = `${state.tripType === 'roundtrip' ? 'Round-Trip' : 'One-Way'} Pass`;

  const totalPassengers =
    state.passengers.adult +
    state.passengers.senior +
    state.passengers.youth +
    state.passengers.child +
    state.passengers.infant;

  document.getElementById('ticket-passengers').textContent = `${totalPassengers} Total (${state.passengers.adult} Adult, ${state.passengers.child} Child/Youth)`;

  // Open modal
  window.openModal('ticket-modal');
}

function initBookingFormSubmit() {
  const printBtn = document.getElementById('btn-print-ticket');
  printBtn?.addEventListener('click', () => {
    window.print();
  });
}
