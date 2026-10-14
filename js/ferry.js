/**
 * HARBOUR LINK - FERRY SCHEDULE & TIMETABLE (ES6+)
 * Live countdown, route tab switching, schedule filtering, and fare calculator
 */

const FERRY_SCHEDULES = {
  centre: {
    weekday: [
      { depart: '06:30 AM', return: '07:00 AM', vessel: 'Trillium', status: 'Scheduled' },
      { depart: '07:15 AM', return: '07:45 AM', vessel: 'Thomas Rennie', status: 'Scheduled' },
      { depart: '08:00 AM', return: '08:30 AM', vessel: 'Sam McBride', status: 'Scheduled' },
      { depart: '09:00 AM', return: '09:30 AM', vessel: 'William Inglis', status: 'Boarding' },
      { depart: '10:00 AM', return: '10:30 AM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '11:15 AM', return: '11:45 AM', vessel: 'Trillium', status: 'On Time' },
      { depart: '12:30 PM', return: '01:00 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '01:45 PM', return: '02:15 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '03:00 PM', return: '03:30 PM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '04:15 PM', return: '04:45 PM', vessel: 'Trillium', status: 'On Time' },
      { depart: '05:30 PM', return: '06:00 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '06:45 PM', return: '07:15 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '08:00 PM', return: '08:30 PM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '09:30 PM', return: '10:00 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '11:15 PM', return: '11:45 PM', vessel: 'William Inglis', status: 'On Time' }
    ],
    weekend: [
      { depart: '06:30 AM', return: '07:00 AM', vessel: 'Trillium', status: 'Scheduled' },
      { depart: '07:30 AM', return: '08:00 AM', vessel: 'Thomas Rennie', status: 'Scheduled' },
      { depart: '08:30 AM', return: '09:00 AM', vessel: 'William Inglis', status: 'Scheduled' },
      { depart: '09:15 AM', return: '09:45 AM', vessel: 'Sam McBride', status: 'Boarding' },
      { depart: '10:00 AM', return: '10:30 AM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '10:45 AM', return: '11:15 AM', vessel: 'Trillium', status: 'On Time' },
      { depart: '11:30 AM', return: '12:00 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '12:15 PM', return: '12:45 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '01:00 PM', return: '01:30 PM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '01:45 PM', return: '02:15 PM', vessel: 'Trillium', status: 'On Time' },
      { depart: '02:30 PM', return: '03:00 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '03:15 PM', return: '03:45 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '04:00 PM', return: '04:30 PM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '05:00 PM', return: '05:30 PM', vessel: 'Trillium', status: 'On Time' },
      { depart: '06:00 PM', return: '06:30 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '07:15 PM', return: '07:45 PM', vessel: 'Sam McBride', status: 'On Time' },
      { depart: '08:30 PM', return: '09:00 PM', vessel: 'Thomas Rennie', status: 'On Time' },
      { depart: '10:00 PM', return: '10:30 PM', vessel: 'Trillium', status: 'On Time' },
      { depart: '11:30 PM', return: '11:55 PM', vessel: 'Sam McBride', status: 'On Time' }
    ]
  },
  wards: {
    weekday: [
      { depart: '06:15 AM', return: '06:35 AM', vessel: 'Ongiara', status: 'Scheduled' },
      { depart: '07:00 AM', return: '07:20 AM', vessel: 'Ongiara', status: 'Scheduled' },
      { depart: '08:15 AM', return: '08:40 AM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '09:45 AM', return: '10:10 AM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '11:30 AM', return: '12:00 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '01:15 PM', return: '01:40 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '03:00 PM', return: '03:25 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '04:30 PM', return: '04:55 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '06:00 PM', return: '06:25 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '07:45 PM', return: '08:10 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '09:30 PM', return: '09:55 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '11:00 PM', return: '11:20 PM', vessel: 'Ongiara', status: 'On Time' }
    ],
    weekend: [
      { depart: '06:30 AM', return: '06:55 AM', vessel: 'Ongiara', status: 'Scheduled' },
      { depart: '07:45 AM', return: '08:10 AM', vessel: 'Ongiara', status: 'Scheduled' },
      { depart: '09:00 AM', return: '09:25 AM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '10:30 AM', return: '11:00 AM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '12:00 PM', return: '12:30 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '01:30 PM', return: '02:00 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '03:00 PM', return: '03:30 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '04:30 PM', return: '05:00 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '06:00 PM', return: '06:30 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '07:30 PM', return: '08:00 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '09:00 PM', return: '09:30 PM', vessel: 'Ongiara', status: 'On Time' },
      { depart: '10:30 PM', return: '11:00 PM', vessel: 'Ongiara', status: 'On Time' }
    ]
  },
  hanlans: {
    weekday: [
      { depart: '06:45 AM', return: '07:05 AM', vessel: 'William Inglis', status: 'Scheduled' },
      { depart: '08:00 AM', return: '08:25 AM', vessel: 'William Inglis', status: 'Scheduled' },
      { depart: '09:30 AM', return: '09:55 AM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '11:00 AM', return: '11:25 AM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '12:30 PM', return: '12:55 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '02:00 PM', return: '02:25 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '03:30 PM', return: '03:55 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '05:00 PM', return: '05:25 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '06:30 PM', return: '06:55 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '08:00 PM', return: '08:25 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '09:45 PM', return: '10:10 PM', vessel: 'William Inglis', status: 'On Time' }
    ],
    weekend: [
      { depart: '07:00 AM', return: '07:25 AM', vessel: 'William Inglis', status: 'Scheduled' },
      { depart: '08:15 AM', return: '08:40 AM', vessel: 'William Inglis', status: 'Scheduled' },
      { depart: '09:30 AM', return: '10:00 AM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '10:45 AM', return: '11:15 AM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '12:00 PM', return: '12:30 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '01:15 PM', return: '01:45 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '02:30 PM', return: '03:00 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '03:45 PM', return: '04:15 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '05:00 PM', return: '05:30 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '06:15 PM', return: '06:45 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '07:30 PM', return: '08:00 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '09:00 PM', return: '09:30 PM', vessel: 'William Inglis', status: 'On Time' },
      { depart: '10:30 PM', return: '11:00 PM', vessel: 'William Inglis', status: 'On Time' }
    ]
  }
};

let currentRoute = 'centre';
let currentDayType = 'weekday';

document.addEventListener('DOMContentLoaded', () => {
  renderFerryTimetable();
  initFerryRouteTabs();
  initDayTypeToggle();
  startNextDepartureClock();
});

function initFerryRouteTabs() {
  const tabs = document.querySelectorAll('.route-tab-btn');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentRoute = tab.dataset.route || 'centre';
      renderFerryTimetable();
    });
  });
}

function initDayTypeToggle() {
  const dayButtons = document.querySelectorAll('.day-toggle-btn');
  dayButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      dayButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentDayType = btn.dataset.day || 'weekday';
      renderFerryTimetable();
    });
  });
}

function renderFerryTimetable() {
  const tbody = document.getElementById('timetable-body');
  if (!tbody) return;

  const entries = FERRY_SCHEDULES[currentRoute]?.[currentDayType] || [];
  tbody.innerHTML = '';

  entries.forEach((item) => {
    const tr = document.createElement('tr');

    let statusClass = 'status-ontime';
    if (item.status === 'Boarding') statusClass = 'status-boarding';
    if (item.status === 'Scheduled') statusClass = 'status-scheduled';

    tr.innerHTML = `
      <td><strong>${item.depart}</strong></td>
      <td>${item.return}</td>
      <td>${item.vessel}</td>
      <td>13 - 15 mins</td>
      <td><span class="status-tag ${statusClass}">● ${item.status}</span></td>
      <td><a href="booking.html?destination=${currentRoute}&time=${encodeURIComponent(item.depart)}" class="btn btn-secondary" style="padding: 0.35rem 0.85rem; font-size: 0.82rem;">Book</a></td>
    `;
    tbody.appendChild(tr);
  });
}

function startNextDepartureClock() {
  const clockEl = document.getElementById('next-departure-timer');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Simulate next ferry departing at next 15-minute mark
    const mins = now.getMinutes();
    const nextMark = (Math.floor(mins / 15) + 1) * 15;
    const diffMins = nextMark - mins - 1;
    const diffSecs = 60 - now.getSeconds();

    const displayMins = String(diffMins).padStart(2, '0');
    const displaySecs = String(diffSecs).padStart(2, '0');

    clockEl.textContent = `${displayMins}m ${displaySecs}s`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}
