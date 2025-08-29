// Haykalf.s
// Isi javascript

// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Fungsi untuk memuat konten mata kuliah dari file kal.html
    function loadCourses() {
        fetch('folder/kal.html') // Ambil isi file kal.html
            .then(response => response.text())
            .then(html => {
                // Masukkan konten yang sudah diambil ke dalam elemen dengan id #courseAccordion
                document.getElementById('courseAccordion').innerHTML = html;
                
                // Setelah konten berhasil dimuat, jalankan fungsi utama dashboard
                initializeDashboard();
            })
            .catch(error => {
                // Jika ada error saat memuat, tampilkan pesan error di halaman
                console.error('Error memuat konten mata kuliah:', error);
                document.getElementById('courseAccordion').innerHTML = '<p class="text-center text-danger">Gagal memuat daftar mata kuliah.</p>';
            });
    }

    // Fungsi utama untuk menjalankan logika dashboard (waktu dan status mata kuliah)
    function initializeDashboard() {
        const dateTimeElement = document.getElementById('datetime-container');
        const courseCards = document.querySelectorAll('.course-card'); // Ambil semua card mata kuliah

        // Nama hari dan bulan dalam bahasa Indonesia
        const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        // Fungsi untuk update waktu dan tanggal sekarang
        function updateDateTime() {
            const now = new Date();
            
            const timeOptions = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const timeString = now.toLocaleTimeString('id-ID', timeOptions);

            const dayName = dayNames[now.getDay()];
            const date = now.getDate();
            const monthName = monthNames[now.getMonth()];
            const year = now.getFullYear();
            const dateString = `${dayName}, ${date} ${monthName} ${year}`;

            // Tampilkan tanggal dan jam di elemen #datetime-container
            dateTimeElement.innerHTML = `<span>${dateString}</span> &bull; <i class="bi bi-clock-history"></i> <span>${timeString} WIB</span>`;
        }

        // Fungsi untuk update status mata kuliah aktif sesuai jadwal
        function updateCourseStatus() {
            const now = new Date();
            const currentDay = now.getDay(); // Hari sekarang (0=minggu, 1=senin, dst.)
            const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

            courseCards.forEach(card => {
                const courseDay = card.dataset.day;      // Hari kuliah
                const startTime = card.dataset.startTime; // Jam mulai
                const endTime = card.dataset.endTime;     // Jam selesai

                // Reset status aktif
                card.classList.remove('course-active');

                // Cek apakah sekarang sama dengan hari & waktu kuliah
                if (courseDay && startTime && endTime) {
                    if (parseInt(courseDay) === currentDay && currentTime >= startTime && currentTime < endTime) {
                        card.classList.add('course-active'); // Tandai sebagai aktif
                    }
                }
            });
        }

        // Jalankan fungsi update setiap 1 detik
        setInterval(() => {
            updateDateTime();
            updateCourseStatus();
        }, 1000);

        // Jalankan sekali saat pertama kali halaman dibuka
        updateDateTime();
        updateCourseStatus();
    }

    // Pertama kali dijalankan, load daftar mata kuliah dari kal.html
    loadCourses();
});

// isi JavaScript
// Haykalf.s