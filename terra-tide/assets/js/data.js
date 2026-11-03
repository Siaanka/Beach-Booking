/**
 * data.js — Mock data untuk Terra & Tide MVP
 * Menggantikan API calls di tahap prototyping.
 * JANGAN gunakan data ini sebagai data produksi.
 */

const DESTINATIONS = [
  {
    id:       'dest-001',
    slug:     'pantai-kunjir',
    name:     'Pantai Kunjir',
    category: 'beach',
    location: 'Kec. Rajabasa, Tanggamus',
    description: 'Pantai tersembunyi dengan pasir putih bersih dan air jernih kehijauan. Dikelilingi perbukitan hijau yang menawarkan pemandangan matahari terbenam yang spektakuler.',
    rating:   4.8,
    reviewCount: 312,
    image:    'assets/images/pantai-kunjir.jpg',
    facilities: ['Toilet Umum', 'Area Parkir', 'Warung Makan', 'Spot Foto'],
    quotaTotal: 100,
    quotaAvailable: 38,
    priceEntry:   15000,   // per orang
    priceCamping: 50000,   // per malam / kavling
    status:   'active',
    tags:     ['beach', 'sunset', 'snorkeling'],
  },
  {
    id:       'dest-002',
    slug:     'bumi-perkemahan-way-lalaan',
    name:     'Buper Way Lalaan',
    category: 'camping',
    location: 'Kec. Kotaagung, Tanggamus',
    description: 'Kawasan perkemahan di kaki Gunung Tanggamus dengan udara sejuk, pohon pinus rindang, dan sungai jernih. Cocok untuk keluarga dan kelompok muda.',
    rating:   4.6,
    reviewCount: 187,
    image:    'assets/images/buper-way-lalaan.jpg',
    facilities: ['Toilet & MCK', 'Air Bersih', 'Mushola', 'Tempat Sampah'],
    quotaTotal: 60,
    quotaAvailable: 12,
    priceEntry:   10000,
    priceCamping: 35000,
    status:   'active',
    tags:     ['camping', 'forest', 'family'],
  },
  {
    id:       'dest-003',
    slug:     'wisata-pantai-batu-lapis',
    name:     'Pantai Batu Lapis',
    category: 'beach',
    location: 'Kec. Cukuh Balak, Tanggamus',
    description: 'Pantai eksotis dengan batu karang besar yang unik dan ombak yang tenang. Ideal untuk berkemah tepi pantai dan memancing.',
    rating:   4.4,
    reviewCount: 95,
    image:    'assets/images/pantai-batu-lapis.jpg',
    facilities: ['Area Parkir', 'Warung', 'Spot Foto'],
    quotaTotal: 50,
    quotaAvailable: 0,  // PENUH
    priceEntry:   12000,
    priceCamping: 40000,
    status:   'active',
    tags:     ['beach', 'fishing', 'camping'],
  },
  {
    id:       'dest-004',
    slug:     'hutan-pinus-way-harong',
    name:     'Hutan Pinus Way Harong',
    category: 'forest',
    location: 'Kec. Air Naningan, Tanggamus',
    description: 'Kawasan hutan pinus dengan jalan setapak yang terawat. Udara segar, nuansa alam yang tenang, dan cocok untuk meditasi atau foto prewedding.',
    rating:   4.5,
    reviewCount: 134,
    image:    'assets/images/hutan-pinus.jpg',
    facilities: ['Toilet Bersih', 'Gazebo', 'Area Foto', 'Parkir Luas'],
    quotaTotal: 80,
    quotaAvailable: 55,
    priceEntry:   8000,
    priceCamping: 30000,
    status:   'active',
    tags:     ['forest', 'family', 'photo'],
  },
];

// Status ketersediaan untuk 7 hari ke depan (simulasi)
function generateCalendarData() {
  const days = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    // Simulasi kuota
    const rand = Math.random();
    let status, quota;
    if (rand < 0.2) {
      status = 'full'; quota = 0;
    } else if (rand < 0.45) {
      status = 'low'; quota = Math.floor(Math.random() * 15) + 1;
    } else {
      status = 'available'; quota = Math.floor(Math.random() * 40) + 20;
    }
    return {
      dayLabel: days[date.getDay()],
      dateNum:  date.getDate(),
      month:    date.getMonth() + 1,
      year:     date.getFullYear(),
      status,   // 'available' | 'low' | 'full'
      quota,
      isToday:  i === 0,
    };
  });
}

// Format currency IDR
function formatIDR(amount) {
  if (amount >= 1000) {
    return 'Rp' + (amount / 1000).toLocaleString('id-ID') + 'rb';
  }
  return 'Rp' + amount.toLocaleString('id-ID');
}

// Get quota badge config
function getQuotaBadge(available, total) {
  if (available === 0) return { class: 'badge-red',  icon: 'block',       text: 'PENUH' };
  const ratio = available / total;
  if (ratio <= 0.3) return { class: 'badge-amber', icon: 'warning',     text: `Sisa ${available}` };
  return             { class: 'badge-green', icon: 'check_circle', text: `Sisa ${available}` };
}

// Get quota bar config
function getQuotaBarClass(available, total) {
  if (available === 0) return 'red';
  const ratio = available / total;
  if (ratio <= 0.3) return 'amber';
  return 'green';
}
