// Haykalf.s
// Isi javascript

// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Fungsi untuk memuat konten tabel dan mata kuliah
    function loadContent() {
        // Ambil elemen container untuk tabel dan accordion
        const tableContainer = document.getElementById('scheduleTableContainer');
        const courseContainer = document.getElementById('courseAccordion');

        // 1. Muat konten tabel jadwal
        fetch('folder/table.html')
            .then(response => response.text())
            .then(html => {
                tableContainer.innerHTML = html; // Masukkan tabel ke wadahnya
            })
            .catch(error => {
                console.error('Error memuat tabel jadwal:', error);
                tableContainer.innerHTML = '<p class="text-center text-danger">Gagal memuat tabel jadwal.</p>';
            });

        // 2. Muat konten mata kuliah
        fetch('folder/kal.html')
            .then(response => response.text())
            .then(html => {
                courseContainer.innerHTML = html; // Masukkan accordion ke wadahnya
                
                // 3. Setelah konten mata kuliah berhasil dimuat, jalankan fungsi utama dashboard
                initializeDashboard();
            })
            .catch(error => {
                console.error('Error memuat konten mata kuliah:', error);
                courseContainer.innerHTML = '<p class="text-center text-danger">Gagal memuat daftar mata kuliah.</p>';
            });
    }

    // Fungsi utama untuk menjalankan logika dashboard (waktu dan status mata kuliah)
    function initializeDashboard() {
        const dateTimeElement = document.getElementById('datetime-container');
        const courseCards = document.querySelectorAll('.course-card');

        // Nama hari dan bulan dalam bahasa Indonesia
        const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        function updateDateTime() {
            const now = new Date();
            const timeOptions = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const timeString = now.toLocaleTimeString('id-ID', timeOptions);
            const dayName = dayNames[now.getDay()];
            const date = now.getDate();
            const monthName = monthNames[now.getMonth()];
            const year = now.getFullYear();
            const dateString = `${dayName}, ${date} ${monthName} ${year}`;
            dateTimeElement.innerHTML = `<span>${dateString}</span> &bull; <i class="bi bi-clock-history"></i> <span>${timeString} WIB</span>`;
        }

        function updateCourseStatus() {
            const now = new Date();
            const currentDay = now.getDay();
            const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

            courseCards.forEach(card => {
                const courseDay = card.dataset.day;
                const startTime = card.dataset.startTime;
                const endTime = card.dataset.endTime;
                card.classList.remove('course-active');

                if (courseDay && startTime && endTime) {
                    if (parseInt(courseDay) === currentDay && currentTime >= startTime && currentTime < endTime) {
                        card.classList.add('course-active');
                    }
                }
            });
        }

        setInterval(() => {
            updateDateTime();
            updateCourseStatus();
        }, 1000);

        updateDateTime();
        updateCourseStatus();
    }

    // Pertama kali dijalankan, panggil fungsi untuk memuat semua konten
    loadContent();
});

// isi JavaScript
// Haykalf.s