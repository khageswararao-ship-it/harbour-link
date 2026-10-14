/**
 * HARBOUR LINK - OPERATIONS DASHBOARD SCRIPT (ES6+)
 * Simulated real-time AIS vessel telemetry, live clock, and interactive radar
 */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardClock();
  initVesselTrackingAnimation();
  initSyncButton();
});

// Live Digital Clock
function initDashboardClock() {
  const timeEl = document.getElementById('dash-live-time');
  if (!timeEl) return;

  function update() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }) + ' EST';
  }

  update();
  setInterval(update, 1000);
}

// Interactive Vessel Details Selector
window.showVesselDetails = function (name, status, speed, passengers, captain) {
  const nameEl = document.getElementById('tel-vessel-name');
  const statusEl = document.getElementById('tel-vessel-status');
  const passEl = document.getElementById('tel-vessel-passengers');

  if (nameEl) nameEl.textContent = name;
  if (statusEl) statusEl.textContent = `Status: ${status} • Speed: ${speed} • ${captain}`;
  if (passEl) passEl.textContent = passengers;

  // Flash highlight effect
  const box = document.getElementById('vessel-telemetry-box');
  if (box) {
    box.style.borderColor = '#ff5e62';
    setTimeout(() => {
      box.style.borderColor = '#00d2ff';
    }, 400);
  }
};

// Simulated Real-Time Radar Movement
function initVesselTrackingAnimation() {
  const trillium = document.getElementById('vessel-trillium');
  const rennie = document.getElementById('vessel-rennie');
  const mcbride = document.getElementById('vessel-mcbride');
  const inglis = document.getElementById('vessel-inglis');

  let step = 0;

  setInterval(() => {
    step += 0.05;

    // Trillium crossing between Jack Layton and Centre Island
    if (trillium) {
      const top = 30 + Math.sin(step) * 25;
      const left = 48 + Math.cos(step) * 4;
      trillium.style.top = `${top}%`;
      trillium.style.left = `${left}%`;
    }

    // Sam McBride returning from Ward's Island
    if (mcbride) {
      const top = 50 + Math.cos(step * 0.8) * 18;
      const left = 68 + Math.sin(step * 0.8) * 10;
      mcbride.style.top = `${top}%`;
      mcbride.style.left = `${left}%`;
    }

    // William Inglis on Hanlan's Route
    if (inglis) {
      const top = 40 + Math.sin(step * 1.2) * 20;
      const left = 32 + Math.cos(step * 1.2) * 6;
      inglis.style.top = `${top}%`;
      inglis.style.left = `${left}%`;
    }
  }, 200);
}

// Telemetry Sync Button
function initSyncButton() {
  const syncBtn = document.getElementById('btn-refresh-dash');
  if (!syncBtn) return;

  syncBtn.addEventListener('click', () => {
    syncBtn.innerHTML = '⏳ Syncing...';
    syncBtn.style.opacity = '0.7';

    setTimeout(() => {
      // Slightly fluctuate passengers count
      const passengerEl = document.getElementById('kpi-passengers');
      if (passengerEl) {
        const current = parseInt(passengerEl.textContent.replace(/,/g, ''), 10) || 16420;
        const newCount = current + Math.floor(Math.random() * 20) + 5;
        passengerEl.textContent = newCount.toLocaleString();
      }

      syncBtn.innerHTML = '✓ Synced!';
      syncBtn.style.opacity = '1';
      syncBtn.style.color = '#00ffaa';

      setTimeout(() => {
        syncBtn.innerHTML = '🔄 Sync Telemetry';
        syncBtn.style.color = '#00d2ff';
      }, 1500);
    }, 600);
  });
}
