/**
 * main.js — Terra & Tide: Landing Page Logic
 * Handles: catalog rendering, category filter, 7-day calendar,
 *          search, quick-check modal, date picker.
 */

/* ── State ── */
let state = {
  activeCategory: 'all',
  searchQuery:    '',
  selectedDate:   null,
  paxCount:       2,
};

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();
  renderDestinations();
  initCategoryChips();
  initSearch();
  initDatePicker();
  initQuickCheck();
  initHeader();
});

/* ═══════════════════════════════════════════════════════════
   HEADER — scroll shrink effect
═══════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   7-DAY CALENDAR
═══════════════════════════════════════════════════════════ */
function initCalendar() {
  const container = document.getElementById('calendar-7day');
  const data = generateCalendarData();

  data.forEach((day, idx) => {
    const cell = document.createElement('button');
    cell.className = 'cal-cell' + (day.isToday ? ' selected' : '');
    cell.setAttribute('aria-label', `${day.dayLabel} ${day.dateNum} — ${day.status === 'full' ? 'Penuh' : 'Sisa ' + day.quota + ' kuota'}`);

    const dotColor = day.status === 'full' ? '#BA1A1A' : day.status === 'low' ? '#FE932C' : '#003629';
    const countText = day.status === 'full' ? 'PENUH' : day.quota;
    const countColor = day.status === 'full' ? '#BA1A1A' : day.status === 'low' ? '#904D00' : '#003629';

    cell.innerHTML = `
      <span class="cal-cell-day">${day.dayLabel}</span>
      <span class="cal-cell-date">${day.dateNum}</span>
      <span class="cal-dot" style="background:${dotColor}"></span>
      <span class="cal-cell-count" style="color:${countColor}">${countText}</span>
    `;

    // Click → select date
    cell.addEventListener('click', () => {
      document.querySelectorAll('.cal-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      state.selectedDate = new Date(day.year, day.month - 1, day.dateNum);
      updateDateLabel();
    });

    // Disabled if full (still visible, just not bookable)
    if (day.status === 'full') {
      cell.title = 'Kuota penuh untuk tanggal ini';
    }

    container.appendChild(cell);
  });
}

/* ═══════════════════════════════════════════════════════════
   DESTINATIONS RENDER
═══════════════════════════════════════════════════════════ */
function renderDestinations() {
  const list    = document.getElementById('destinations-list');
  const loading = document.getElementById('destinations-loading');
  const empty   = document.getElementById('destinations-empty');

  // Simulate API loading
  setTimeout(() => {
    loading.classList.add('hidden');

    const filtered = filterDestinations();
    if (filtered.length === 0) {
      empty.classList.remove('hidden');
      list.classList.add('hidden');
      return;
    }

    empty.classList.add('hidden');
    list.classList.remove('hidden');
    list.innerHTML = filtered.map(dest => buildDestCard(dest)).join('');

    // Attach click events
    list.querySelectorAll('.dest-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        window.location.href = `pages/destination.html?slug=${slug}`;
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }, 600);
}

function buildDestCard(dest) {
  const badge     = getQuotaBadge(dest.quotaAvailable, dest.quotaTotal);
  const barClass  = getQuotaBarClass(dest.quotaAvailable, dest.quotaTotal);
  const barWidth  = dest.quotaTotal > 0 ? Math.round((dest.quotaAvailable / dest.quotaTotal) * 100) : 0;
  const isFull    = dest.quotaAvailable === 0;
  const facChips  = dest.facilities.slice(0, 3).map(f =>
    `<span class="fac-chip"><span class="material-symbols-outlined text-[10px]">check</span>${f}</span>`
  ).join('');
  const moreCount = dest.facilities.length > 3 ? dest.facilities.length - 3 : 0;

  return `
  <article class="dest-card" data-slug="${dest.slug}" role="button" tabindex="0"
           aria-label="Destinasi: ${dest.name}, ${dest.location}">
    <!-- Image with quota badge overlay -->
    <div class="relative overflow-hidden">
      <img class="dest-card-image" src="${dest.image}" alt="Foto ${dest.name}"
           onerror="this.src='assets/images/placeholder.svg'; this.onerror=null;"
           loading="lazy" />
      <!-- Quota badge -->
      <div class="absolute top-3 left-3">
        <span class="badge ${badge.class}">
          <span class="material-symbols-outlined text-[11px]">${badge.icon}</span>
          ${badge.text} kuota
        </span>
      </div>
      <!-- Category badge -->
      <div class="absolute top-3 right-3">
        <span class="badge badge-blue">${getCategoryLabel(dest.category)}</span>
      </div>
    </div>

    <div class="dest-card-body">
      <!-- Rating & Location -->
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-1 text-xs text-on-surface-v">
          <span class="material-symbols-outlined filled text-secondary-c text-[14px]">star</span>
          <span class="font-700 text-on-surface">${dest.rating}</span>
          <span class="text-outline">(${dest.reviewCount.toLocaleString('id-ID')} ulasan)</span>
        </div>
        <div class="flex items-center gap-1 text-xs text-on-surface-v">
          <span class="material-symbols-outlined text-[14px] text-outline">location_on</span>
          <span>${dest.location}</span>
        </div>
      </div>

      <!-- Name -->
      <h3 class="text-base font-700 text-on-surface mb-2 leading-snug">${dest.name}</h3>

      <!-- Quota bar -->
      <div class="mb-2">
        <div class="flex items-center justify-between mb-1">
          <span class="text-[11px] text-on-surface-v font-500">Kapasitas tersisa</span>
          <span class="text-[11px] font-700 ${isFull ? 'text-error' : 'text-on-surface'}">${dest.quotaAvailable}/${dest.quotaTotal} slot</span>
        </div>
        <div class="quota-bar">
          <div class="quota-bar-fill ${barClass}" style="width:${barWidth}%"></div>
        </div>
      </div>

      <!-- Facilities -->
      <div class="flex flex-wrap gap-1.5 mb-3">
        ${facChips}
        ${moreCount > 0 ? `<span class="fac-chip text-primary font-700">+${moreCount}</span>` : ''}
      </div>

      <!-- Pricing -->
      <div class="flex items-end justify-between">
        <div class="flex gap-4">
          <div>
            <p class="price-label">Tiket Masuk</p>
            <p class="price-value">${formatIDR(dest.priceEntry)} <span class="price-unit">/ orang</span></p>
          </div>
          <div>
            <p class="price-label">Sewa Kavling</p>
            <p class="price-value">${formatIDR(dest.priceCamping)} <span class="price-unit">/ malam</span></p>
          </div>
        </div>
      </div>

      <!-- Payment note -->
      <p class="text-[10px] text-on-surface-v mt-2 flex items-center gap-1">
        <span class="material-symbols-outlined text-[12px]">payments</span>
        Bayar di lokasi · Tunai atau QRIS
      </p>

      <!-- CTA -->
      <button class="mt-3 w-full h-11 rounded-xl font-600 text-sm flex items-center justify-center gap-2 transition-all
        ${isFull
          ? 'bg-surface-highest text-outline cursor-not-allowed'
          : 'bg-primary text-white hover:bg-primary-container active:scale-[0.98]'}"
        onclick="event.stopPropagation(); handleBookNow('${dest.slug}', ${isFull})"
        ${isFull ? 'disabled aria-disabled="true"' : ''}>
        <span class="material-symbols-outlined text-[18px]">${isFull ? 'block' : 'tent'}</span>
        ${isFull ? 'Kuota Penuh' : 'Booking Kavling Sekarang'}
      </button>
    </div>
  </article>
  `;
}

function getCategoryLabel(cat) {
  const map = { beach:'Pantai', camping:'Camping', hiking:'Pendakian', forest:'Hutan', lake:'Danau' };
  return map[cat] || cat;
}

/* ═══════════════════════════════════════════════════════════
   CATEGORY FILTER
═══════════════════════════════════════════════════════════ */
function initCategoryChips() {
  document.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('chip-active'));
      btn.classList.add('chip-active');
      state.activeCategory = btn.dataset.cat;
      rerenderDestinations();
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════════════ */
function initSearch() {
  ['search-mobile', 'search-desktop'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    let timer;
    el.addEventListener('input', (e) => {
      clearTimeout(timer);
      // Sync the other search input
      ['search-mobile', 'search-desktop'].forEach(otherId => {
        const other = document.getElementById(otherId);
        if (other && other !== e.target) other.value = e.target.value;
      });
      timer = setTimeout(() => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        rerenderDestinations();
      }, 300);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   FILTER LOGIC
═══════════════════════════════════════════════════════════ */
function filterDestinations() {
  return DESTINATIONS.filter(dest => {
    const matchCat = state.activeCategory === 'all' || dest.category === state.activeCategory
                     || dest.tags.includes(state.activeCategory);
    const matchQ   = !state.searchQuery
                     || dest.name.toLowerCase().includes(state.searchQuery)
                     || dest.location.toLowerCase().includes(state.searchQuery)
                     || dest.description.toLowerCase().includes(state.searchQuery);
    return matchCat && matchQ && dest.status === 'active';
  });
}

function rerenderDestinations() {
  const list   = document.getElementById('destinations-list');
  const empty  = document.getElementById('destinations-empty');

  const filtered = filterDestinations();
  if (filtered.length === 0) {
    list.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  list.classList.remove('hidden');
  // Fade transition
  list.style.opacity = '0.4';
  list.innerHTML = filtered.map(dest => buildDestCard(dest)).join('');
  list.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `pages/destination.html?slug=${card.dataset.slug}`;
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
  requestAnimationFrame(() => { list.style.transition = 'opacity 0.2s'; list.style.opacity = '1'; });
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery    = '';
  document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('chip-active'));
  document.querySelector('[data-cat="all"]')?.classList.add('chip-active');
  document.getElementById('search-mobile').value   = '';
  document.getElementById('search-desktop').value  = '';
  rerenderDestinations();
}

/* ═══════════════════════════════════════════════════════════
   BOOKING CTA
═══════════════════════════════════════════════════════════ */
function handleBookNow(slug, isFull) {
  if (isFull) {
    showToast('Maaf, kuota untuk destinasi ini penuh.', 'block');
    return;
  }
  window.location.href = `pages/booking.html?slug=${slug}`;
}

/* ═══════════════════════════════════════════════════════════
   DATE PICKER
═══════════════════════════════════════════════════════════ */
function initDatePicker() {
  const btn   = document.getElementById('btn-date-pick');
  const input = document.getElementById('date-input');

  // Set min date = today
  const today = new Date();
  input.min = today.toISOString().split('T')[0];

  btn.addEventListener('click', () => input.click());
  input.addEventListener('change', (e) => {
    if (!e.target.value) return;
    const d = new Date(e.target.value + 'T00:00:00');
    state.selectedDate = d;
    updateDateLabel();
  });
}

function updateDateLabel() {
  const label = document.getElementById('selected-date-label');
  if (!label || !state.selectedDate) return;
  const opts = { weekday:'short', day:'numeric', month:'short' };
  label.textContent = state.selectedDate.toLocaleDateString('id-ID', opts);
}

/* ═══════════════════════════════════════════════════════════
   QUICK CHECK MODAL
═══════════════════════════════════════════════════════════ */
function initQuickCheck() {
  document.getElementById('btn-quick-check')?.addEventListener('click', () => {
    openModal('modal-quick-check');
  });

  // Set min date for QC date input
  const qcDate = document.getElementById('qc-date');
  if (qcDate) qcDate.min = new Date().toISOString().split('T')[0];

  // Close on overlay click
  document.getElementById('modal-quick-check')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal('modal-quick-check');
  });
}

function adjustPax(delta) {
  state.paxCount = Math.max(1, Math.min(50, state.paxCount + delta));
  const el = document.getElementById('qc-pax');
  if (el) el.textContent = state.paxCount;
}

function runQuickCheck() {
  const date = document.getElementById('qc-date')?.value;
  const type = document.getElementById('qc-type')?.value;

  if (!date) {
    showToast('Pilih tanggal kunjungan terlebih dahulu', 'calendar_today');
    return;
  }

  closeModal('modal-quick-check');

  // Apply filters based on quick check
  if (type) {
    state.activeCategory = type;
    document.querySelectorAll('.chip-btn').forEach(b => {
      b.classList.toggle('chip-active', b.dataset.cat === type);
    });
  }
  state.selectedDate = new Date(date + 'T00:00:00');
  updateDateLabel();
  rerenderDestinations();
  showToast(`Menampilkan ${type ? getCategoryLabel(type) : 'semua destinasi'} untuk tanggal ${new Date(date+'T00:00:00').toLocaleDateString('id-ID',{day:'numeric',month:'short'})}`, 'check_circle');
}

/* ═══════════════════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════════════════ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Focus first focusable element
    setTimeout(() => modal.querySelector('input, select, button')?.focus(), 50);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* Escape key closes modals */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
    document.body.style.overflow = '';
  }
});

/* ═══════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════ */
function showToast(message, icon = 'info') {
  // Remove existing toasts
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="material-symbols-outlined text-[16px]">${icon}</span>${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
