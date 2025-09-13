// File: folder/theme.js
// Logika untuk Mode Gelap

document.addEventListener('DOMContentLoaded', () => {
    // Cari tombol toggle dan body
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // Fungsi untuk menerapkan tema berdasarkan pilihan yang tersimpan
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    // Cek apakah ada tema yang tersimpan di localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('theme');
    // Jika ada, terapkan tema tersebut. Jika tidak, default ke mode terang.
    applyTheme(savedTheme || 'light');

    // Tambahkan event listener saat tombol di-klik
    themeToggle.addEventListener('change', () => {
        let newTheme;
        if (themeToggle.checked) {
            // Jika dicentang, aktifkan mode gelap
            newTheme = 'dark';
        } else {
            // Jika tidak, aktifkan mode terang
            newTheme = 'light';
        }
        
        // Simpan pilihan baru ke localStorage
        localStorage.setItem('theme', newTheme);
        // Terapkan tema yang baru dipilih
        applyTheme(newTheme);
    });
});