// File: folder/theme.js
// Logika untuk Mode Gelap dengan Ikon di Samping Judul

document.addEventListener('DOMContentLoaded', () => {
    // Cari elemen-elemen yang dibutuhkan
    const themeIconContainer = document.getElementById('theme-icon-container');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const body = document.body;

    // Fungsi untuk mengatur ikon mana yang aktif (terlihat)
    const updateIcons = (theme) => {
        if (theme === 'dark') {
            // Jika tema gelap, ikon matahari yang aktif (untuk beralih ke terang)
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
        } else {
            // Jika tema terang, ikon bulan yang aktif (untuk beralih ke gelap)
            moonIcon.classList.add('active');
            sunIcon.classList.remove('active');
        }
    };

    // Fungsi untuk menerapkan tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        updateIcons(theme);
    };

    // Saat halaman dimuat, cek tema yang tersimpan
    let currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    // Tambahkan event listener saat kontainer ikon di-klik
    themeIconContainer.addEventListener('click', () => {
        // Balikkan tema yang sedang aktif
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        
        // Simpan pilihan baru ke localStorage
        localStorage.setItem('theme', newTheme);
        // Terapkan tema yang baru dipilih
        applyTheme(newTheme);
    });
});