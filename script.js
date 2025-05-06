
  // Toggle Mobile Menu
  document.getElementById("burger").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.remove("-translate-y-full");
    menu.classList.add("translate-y-0");
  });

  document.getElementById("close-mobile-menu").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.remove("translate-y-0");
    menu.classList.add("-translate-y-full");
  });

  // Dropdown Pesanan toggle
  const dropdownBtn = document.getElementById("dropdown-pesanan-btn");
  const dropdownMenu = document.getElementById("dropdown-pesanan-menu");
  const dropdownWrapper = document.getElementById("dropdown-pesanan-wrapper");

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  // Klik di luar dropdown -> close
  document.addEventListener("click", function (e) {
    if (!dropdownWrapper.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });

  // Scroll Color Logic
  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const headerItems = header.querySelectorAll("a, button, p, i, #dropdown-pesanan-btn");
    const btnMasuk = header.querySelector("a[href='logincoba.html']");
    const btnDaftar = header.querySelector("a[href='singup.html']");
    const mobileMenu = document.getElementById("mobile-menu");
    const burger = document.getElementById("burger");
    const closeBtn = document.getElementById("close-mobile-menu");

    if (window.scrollY > 20) {
      header.classList.add("bg-white");
      header.classList.remove("bg-white/30", "backdrop-blur-md");

      headerItems.forEach(el => {
        el.classList.add("text-black");
        el.classList.remove("text-white");
      });

      if (btnMasuk) {
        btnMasuk.classList.remove("border-white", "text-white");
        btnMasuk.classList.add("border-blue-500", "text-blue-500");
      }

      if (btnDaftar) {
        btnDaftar.classList.add("text-white");
      }

      burger.classList.add("text-black");
      burger.classList.remove("text-white");

      closeBtn.classList.add("text-black");
      closeBtn.classList.remove("text-white");

      mobileMenu.classList.add("bg-white", "text-black");
      mobileMenu.classList.remove("bg-black", "text-white");

    } else {
      header.classList.remove("bg-white");
      header.classList.add("bg-white/30", "backdrop-blur-md");

      headerItems.forEach(el => {
        el.classList.add("text-white");
        el.classList.remove("text-black");
      });

      if (btnMasuk) {
        btnMasuk.classList.remove("border-blue-500", "text-blue-500");
        btnMasuk.classList.add("border-white", "text-white");
      }

      if (btnDaftar) {
        btnDaftar.classList.add("text-white");
      }

      burger.classList.add("text-white");
      burger.classList.remove("text-black");

      closeBtn.classList.add("text-white");
      closeBtn.classList.remove("text-black");

      mobileMenu.classList.add("bg-black", "text-white");
      mobileMenu.classList.remove("bg-white", "text-black");
    }
  });

  // Tutup mobile menu saat klik link di dalamnya
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      menu.classList.remove("translate-y-0");
      menu.classList.add("-translate-y-full");
    });
  });

  // Selalu pastikan dropdown item teks hitam
  document.querySelectorAll("#dropdown-pesanan-menu a").forEach(link => {
    link.classList.add("text-black");
  });


  





  




// ==== Fungsi Tab (sudah sesuai dengan kode kamu) ====
const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');

function resetTabs() {
  tabs.forEach(tab => tab.classList.remove('active'));
  tabPanes.forEach(pane => pane.classList.remove('active'));
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    resetTabs();
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    const activePane = document.getElementById(tabId);
    activePane.classList.add('active');
  });
});

// Set tab default aktif
document.querySelector('[data-tab="pesawat"]').classList.add('active');
document.getElementById('pesawat').classList.add('active');

// ==== Dropdown Penumpang ====
document.getElementById('dropdown-pax').addEventListener('click', function () {
  const paxDropdown = document.getElementById('pax-dropdown');
  paxDropdown.classList.toggle('hidden');
});


// ==== Fungsi + / - Penumpang ====
function handlePassengerControls(type) {
  const plusBtn = document.getElementById(`plus-${type}`);
  const minusBtn = document.getElementById(`minus-${type}`);
  const input = document.getElementById(type);

  plusBtn.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
  });
}

// Inisialisasi semua jenis penumpang
['dewasa', 'anak-anak', 'bayi'].forEach(handlePassengerControls);

// ==== Tombol Selesai ====
document.getElementById('selesai').addEventListener('click', function () {
  const dewasa = document.getElementById('dewasa').value;
  const anakAnak = document.getElementById('anak-anak').value;
  const bayi = document.getElementById('bayi').value;
  const kelas = document.getElementById('kelas')?.value || 'Tidak dipilih';

  alert(`Jumlah Dewasa: ${dewasa}, Anak-anak: ${anakAnak}, Bayi: ${bayi}, Kelas: ${kelas}`);
});



  // Fungsi untuk update tulisan di tombol
  function updateTombolPenumpang() {
    const dewasa = parseInt(document.getElementById('dewasa').value) || 0;
    const anak = parseInt(document.getElementById('anak-anak').value) || 0;
    const bayi = parseInt(document.getElementById('bayi').value) || 0;

    let label = [];
    if (dewasa > 0) label.push(`${dewasa} Dewasa`);
    if (anak > 0) label.push(`${anak} Anak`);
    if (bayi > 0) label.push(`${bayi} Bayi`);

    // Kalau semuanya 0, tetap tampilkan "Penumpang"
    document.getElementById('dropdown-pax').innerText = label.length > 0 ? label.join(', ') : 'Penumpang';
  }

  // Tambahkan event ke tombol plus/minus dan input
  ['dewasa', 'anak-anak', 'bayi'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateTombolPenumpang);
  });

  // Tombol plus & minus — update otomatis juga
  document.getElementById('plus-dewasa').addEventListener('click', () => {
    let input = document.getElementById('dewasa');
    input.value = parseInt(input.value) + 1;
    updateTombolPenumpang();
  });
  document.getElementById('minus-dewasa').addEventListener('click', () => {
    let input = document.getElementById('dewasa');
    if (input.value > 0) input.value = parseInt(input.value) - 1;
    updateTombolPenumpang();
  });

  document.getElementById('plus-anak-anak').addEventListener('click', () => {
    let input = document.getElementById('anak-anak');
    input.value = parseInt(input.value) + 1;
    updateTombolPenumpang();
  });
  document.getElementById('minus-anak-anak').addEventListener('click', () => {
    let input = document.getElementById('anak-anak');
    if (input.value > 0) input.value = parseInt(input.value) - 1;
    updateTombolPenumpang();
  });

  document.getElementById('plus-bayi').addEventListener('click', () => {
    let input = document.getElementById('bayi');
    input.value = parseInt(input.value) + 1;
    updateTombolPenumpang();
  });
  document.getElementById('minus-bayi').addEventListener('click', () => {
    let input = document.getElementById('bayi');
    if (input.value > 0) input.value = parseInt(input.value) - 1;
    updateTombolPenumpang();
  });

  // Tombol selesai juga update dan sembunyikan dropdown
  document.getElementById('selesai').addEventListener('click', function () {
    updateTombolPenumpang();
    document.getElementById('pax-dropdown').classList.add('hidden');
  });




  // Toggle dropdown kelas saat tombol diklik
  document.getElementById('dropdown-class').addEventListener('click', () => {
    document.getElementById('class-dropdown').classList.toggle('hidden');
  });

  // Ambil semua tombol pilihan kelas
  const classOptions = document.querySelectorAll('#class-dropdown button');

  // Event listener untuk setiap opsi kelas
  classOptions.forEach(button => {
    button.addEventListener('click', () => {
      const kelas = button.textContent;
      document.getElementById('dropdown-class').innerHTML = `
        ${kelas}
        <svg class="w-4 h-4 fill-current text-white ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      `;
      // Sembunyikan dropdown setelah pilih
      document.getElementById('class-dropdown').classList.add('hidden');
    });
  });



  

  // Simulate loading promo data
  setTimeout(function() {
    // Hide all loading elements
    document.getElementById('promo-loading').classList.add('hidden');
    document.getElementById('promo-loading-mobile').classList.add('hidden');
    
    // Show all containers
    document.getElementById('promo-container').classList.remove('hidden');
    document.getElementById('promo-container-mobile').classList.remove('hidden');
    
    // Sample promo data
    const promos = [
      {
        id: 1,
        title: "Promo Bulan ini",
        image: "https://images.unsplash.com/photo-1583022846753-83a4eba54ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        discount: "Hingga 50%"
      },
      {
        id: 2,
        title: "Liburan ke Bali",
        image: "https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        discount: "Paket mulai 1.5jt"
      },
      {
        id: 3,
        title: "Singapore Sale",
        image: "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        discount: "Tiket dari 800rb"
      },
      {
        id: 4,
        title: "Staycation",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        discount: "Hotel diskon 40%"
      }
    ];
    
    // Render desktop grid promo cards
    const promoContainer = document.getElementById('promo-container');
    promos.forEach(promo => {
      const promoCard = document.createElement('div');
      promoCard.className = 'promo-card bg-white rounded-lg shadow overflow-hidden cursor-pointer smooth-transition';
      promoCard.innerHTML = `
        <div class="relative">
          <img src="${promo.image}" alt="${promo.title}" class="w-full h-40 object-cover">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <span class="text-white font-semibold">${promo.title}</span>
            <span class="block text-orange-300 text-sm">${promo.discount}</span>
          </div>
        </div>
      `;
      promoContainer.appendChild(promoCard);
    });
    
    // Render mobile slider
    const sliderTrack = document.getElementById('slider-track');
    const sliderNav = document.getElementById('slider-nav');
    
    promos.forEach((promo, index) => {
      // Add slide
      const slide = document.createElement('div');
      slide.className = 'promo-slide w-72 flex-shrink-0 rounded-lg overflow-hidden shadow';
  
      slide.innerHTML = `
        <div class="relative h-full">
          <img src="${promo.image}" alt="${promo.title}" class="w-full h-full object-cover">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span class="text-white font-semibold text-lg">${promo.title}</span>
            <span class="block text-orange-300">${promo.discount}</span>
          </div>
        </div>
      `;
      sliderTrack.appendChild(slide);
      
      // Add navigation dot
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
      dot.dataset.index = index;
      dot.addEventListener('click', () => goToSlide(index));
      sliderNav.appendChild(dot);
    });
    
    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.promo-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const track = document.getElementById('slider-track');
    
    function updateSlider() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
      
      // Auto slide
      clearInterval(sliderInterval);
      sliderInterval = setInterval(nextSlide, 5000);
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }
    
    function goToSlide(index) {
      currentSlide = index;
      updateSlider();
    }
    
    // Auto slide every 5 seconds
    let sliderInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    sliderTrack.addEventListener('mouseenter', () => clearInterval(sliderInterval));
    sliderTrack.addEventListener('mouseleave', () => {
      sliderInterval = setInterval(nextSlide, 5000);
    });
  }, 1500);
       // JavaScript untuk toggle dropdown
    document.getElementById('tiketDropdown').addEventListener('click', function() {
      const dropdownMenu = document.getElementById('dropdownMenu');
      dropdownMenu.classList.toggle('hidden');
      
      // Tutup dropdown ketika klik di luar
      document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.closest('.dropdown')) {
          dropdownMenu.classList.add('hidden');
          document.removeEventListener('click', closeDropdown);
        }
      });
    });
      // Fungsi untuk menutup semua dropdown
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.add('hidden');
      });
    }

    // Perbarui bagian ini setelah slide dibuat di JS
data.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot';
    if (index === 0) dot.classList.add('active');
  
    dot.addEventListener('click', () => {
      const offset = index * (sliderTrack.firstChild.offsetWidth + 16); // 16 = gap-x
      sliderTrack.scrollTo({ left: offset, behavior: 'smooth' });
  
      document.querySelectorAll('.slider-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  
    sliderNav.appendChild(dot);
  });
  

function setupDropdown(buttonId, menuId) {
    const btn = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('button').forEach(item => {
      item.addEventListener('click', () => {
        btn.innerHTML = `${item.textContent}
          <svg class="w-4 h-4 fill-current text-white ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
          </svg>`;
        menu.classList.add('hidden');
      });
    });
  }

  setupDropdown('dropdown-dari', 'dropdown-menu-dari-pesawat');
setupDropdown('dropdown-ke', 'dropdown-menu-ke-pesawat');

  // Fungsi untuk memeriksa apakah semua input sudah terisi
  function isFormValid() {
    const dari = document.querySelector("#dropdown-dari").textContent.trim();
    const ke = document.querySelector("#dropdown-ke").textContent.trim();
    const berangkat = document.querySelector("input[type='date'][placeholder='Tanggal Berangkat']").value;
    const kembali = document.querySelector("input[type='date'][placeholder='Tanggal Kembali']").value;
    const dewasa = document.querySelector("#dewasa").value;
    const anak = document.querySelector("#anak-anak").value;
    const bayi = document.querySelector("#bayi").value;

    // Pastikan semua input telah diisi
    return dari !== "Pilih Kota Asal" &&
           ke !== "Pilih Kota Tujuan" &&
           berangkat !== "" &&
           kembali !== "" &&
           dewasa > 0 && anak >= 0 && bayi >= 0;
  }

  // Fungsi untuk mengaktifkan tombol jika form valid
  function toggleSearchButton() {
    const button = document.getElementById("cari-tiket");
    if (isFormValid()) {
      button.disabled = false;
      button.addEventListener('click', function() {
        window.location.href = 'pesawat.html';  // Arahkan ke pesawat.html jika tombol valid
      });
    } else {
      button.disabled = true;
    }
  }

  // Event listener untuk dropdown dan input lainnya
  document.querySelector("#dropdown-dari").addEventListener("click", toggleSearchButton);
  document.querySelector("#dropdown-ke").addEventListener("click", toggleSearchButton);
  document.querySelector("input[type='date'][placeholder='Tanggal Berangkat']").addEventListener("input", toggleSearchButton);
  document.querySelector("input[type='date'][placeholder='Tanggal Kembali']").addEventListener("input", toggleSearchButton);
  document.querySelector("#dewasa").addEventListener("input", toggleSearchButton);
  document.querySelector("#anak-anak").addEventListener("input", toggleSearchButton);
  document.querySelector("#bayi").addEventListener("input", toggleSearchButton);









  // Dropdown toggle
const dropdownButton = document.getElementById("dropdown-room");
const roomDropdown = document.getElementById("room-dropdown");

dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  roomDropdown.classList.toggle("hidden");
});

// Input references
const dewasaInput = document.getElementById("dewasa");
const anakInput = document.getElementById("anak");
const kamarInput = document.getElementById("kamar");

// Tombol plus & minus
document.getElementById("plus-dewasa").addEventListener("click", () => {
  dewasaInput.value = parseInt(dewasaInput.value) + 1;
});
document.getElementById("minus-dewasa").addEventListener("click", () => {
  if (parseInt(dewasaInput.value) > 1) dewasaInput.value = parseInt(dewasaInput.value) - 1;
});

document.getElementById("plus-anak").addEventListener("click", () => {
  anakInput.value = parseInt(anakInput.value) + 1;
});
document.getElementById("minus-anak").addEventListener("click", () => {
  if (parseInt(anakInput.value) > 0) anakInput.value = parseInt(anakInput.value) - 1;
});

document.getElementById("plus-kamar").addEventListener("click", () => {
  kamarInput.value = parseInt(kamarInput.value) + 1;
});
document.getElementById("minus-kamar").addEventListener("click", () => {
  if (parseInt(kamarInput.value) > 1) kamarInput.value = parseInt(kamarInput.value) - 1;
});

// Selesai button
document.getElementById("selesai-room").addEventListener("click", () => {
  const totalTamu = parseInt(dewasaInput.value) + parseInt(anakInput.value);
  const totalKamar = parseInt(kamarInput.value);
  dropdownButton.innerHTML = `${totalTamu} Tamu, ${totalKamar} Kamar <svg class="w-4 h-4 fill-current text-white ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"/></svg>`;
  roomDropdown.classList.add("hidden");
});

// Menutup dropdown jika klik di luar
document.addEventListener("click", (e) => {
  if (!roomDropdown.contains(e.target) && !dropdownButton.contains(e.target)) {
    roomDropdown.classList.add("hidden");
  }
});




document.getElementById("cari-hotel").addEventListener("click", () => {
    const dewasa = parseInt(document.getElementById("dewasa").value);
    const anak = parseInt(document.getElementById("anak").value);
    const kamar = parseInt(document.getElementById("kamar").value);
  
    const totalTamu = dewasa + anak;
    alert(`Mencari hotel untuk ${totalTamu} tamu (${dewasa} dewasa, ${anak} anak), ${kamar} kamar`);
    
    // Bisa diarahkan ke halaman hasil pencarian hotel jika ada:
    // window.location.href = `/cari-hotel?dewasa=${dewasa}&anak=${anak}&kamar=${kamar}`;
  });


  

 
  




  document.getElementById('tanpa-pengemudi').addEventListener('click', function() {
    document.getElementById('tanpa-pengemudi-form').classList.remove('hidden');
    document.getElementById('dengan-pengemudi-form').classList.add('hidden');
  });
  
  document.getElementById('dengan-pengemudi').addEventListener('click', function() {
    document.getElementById('dengan-pengemudi-form').classList.remove('hidden');
    document.getElementById('tanpa-pengemudi-form').classList.add('hidden');
  });
  





  // script.js

function setupDropdown(toggleId, menuId) {
    const toggleButton = document.getElementById(toggleId);
    const dropdownMenu = document.getElementById(menuId);
  
    if (!toggleButton || !dropdownMenu) {
      console.warn(`Elemen dengan ID "${toggleId}" atau "${menuId}" tidak ditemukan.`);
      return;
    }
  
    // Toggle dropdown tampil/sembunyi
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });
  
    // Saat pilih salah satu item di menu dropdown
    dropdownMenu.querySelectorAll('button').forEach(item => {
      item.addEventListener('click', () => {
        toggleButton.innerHTML = `${item.textContent}
          <svg class="w-4 h-4 fill-current text-white ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
          </svg>`;
        dropdownMenu.classList.add('hidden');
      });
    });
  
    // Klik luar menu untuk nutup dropdown
    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !toggleButton.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }
  
  // Jalankan fungsi setelah seluruh DOM dimuat
  document.addEventListener('DOMContentLoaded', function () {
    setupDropdown('dropdown-dari-bus', 'dropdown-menu-dari-bus');
    setupDropdown('dropdown-ke-bus', 'dropdown-menu-ke-bus');
    setupDropdown('dropdown-penumpang', 'dropdown-menu-penumpang');
  });
  




  
  document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown
    const dropdownBtn = document.getElementById('dropdown-pax-kereta');
    const dropdownMenu = document.getElementById('pax-dropdown-kereta');

    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown jika klik di luar
    document.addEventListener('click', function (e) {
      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });

    // Inisialisasi elemen
    const dewasaInput = document.getElementById('dewasa-kereta');
    const bayiInput = document.getElementById('bayi-kereta');
    const selesaiBtn = document.getElementById('selesai-kereta');

    // Tombol + dan -
    document.getElementById('plus-dewasa-kereta').addEventListener('click', () => {
      dewasaInput.value = parseInt(dewasaInput.value) + 1;
    });
    document.getElementById('minus-dewasa-kereta').addEventListener('click', () => {
      if (parseInt(dewasaInput.value) > 1) dewasaInput.value = parseInt(dewasaInput.value) - 1;
    });

    document.getElementById('plus-bayi-kereta').addEventListener('click', () => {
      bayiInput.value = parseInt(bayiInput.value) + 1;
    });
    document.getElementById('minus-bayi-kereta').addEventListener('click', () => {
      if (parseInt(bayiInput.value) > 0) bayiInput.value = parseInt(bayiInput.value) - 1;
    });

    // Tombol Selesai
    selesaiBtn.addEventListener('click', () => {
      const dewasa = parseInt(dewasaInput.value);
      const bayi = parseInt(bayiInput.value);
      const total = dewasa + bayi;

      dropdownBtn.innerHTML = `
        ${total} Penumpang
        <svg class="w-4 h-4 fill-current text-white ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
        </svg>
      `;

      dropdownMenu.classList.add('hidden');
    });
  });

  setupDropdown('dropdown-dari-kereta', 'dropdown-menu-dari-kereta');
  setupDropdown('dropdown-ke-kereta', 'dropdown-menu-ke-kereta');
  setupDropdown('dropdown-penumpang-kereta', 'dropdown-menu-penumpang-kereta');



  