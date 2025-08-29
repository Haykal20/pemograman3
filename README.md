# Dashboard Akademik Imam Al Anjas📚

Selamat datang di project Dashboard Akademik! Ini adalah halaman web statis yang dirancang untuk membantu mahasiswa melacak jadwal mata kuliah, detail SKS, dan informasi penting lainnya untuk satu semester.

Project ini dibuat dengan struktur kode yang bersih dan modular, memisahkan antara struktur (HTML), gaya (CSS), dan fungsionalitas (JavaScript).

**[➡️ Lihat Live Demo](https://haykal20.github.io/pemograman3/)**

---

![Screenshot Dashboard](https://raw.githubusercontent.com/Haykal20/Haykal-Furqan-Shafiq/main/ss.jpg)

---

## ✨ Fitur Utama

-   **Tampilan Profil:** Menampilkan informasi dasar mahasiswa seperti nama, NIM, dan hobi.
-   **Daftar Mata Kuliah Dinamis:** Konten mata kuliah dimuat dari file terpisah (`kal.html`), membuatnya sangat mudah untuk diperbarui.
-   **Jam dan Tanggal Real-time:** Header menampilkan tanggal dan waktu saat ini (WIB) yang diperbarui setiap detik.
-   **Penanda Mata Kuliah Aktif:** Kartu mata kuliah akan otomatis ditandai (highlight) jika sedang berlangsung sesuai dengan jadwal hari dan jam.
-   **Desain Responsif:** Tampilan dashboard dapat menyesuaikan diri dengan baik di perangkat desktop maupun mobile.
-   **Struktur Kode Modular:** Kode dipisahkan ke dalam file HTML, CSS, dan JavaScript untuk kemudahan pengelolaan.

---

## 🛠️ Teknologi yang Digunakan

-   **HTML5:** Untuk struktur dasar halaman web.
-   **CSS3:** Untuk styling, layout, dan desain visual.
-   **JavaScript (ES6):** Untuk fungsionalitas dinamis seperti jam, pemuatan konten, dan penanda jadwal.
-   **Bootstrap 5:** Framework CSS untuk komponen UI yang responsif dan modern.
-   **Bootstrap Icons:** Untuk ikon-ikon yang digunakan di seluruh halaman.
-   **Google Fonts:** Untuk tipografi yang lebih menarik (font Poppins).

---

## 📁 Struktur Folder

Project ini diatur dengan struktur yang rapi agar mudah dipahami dan dikelola.

```
.
├── 📄 index.html  #Kerangka utama halaman dashboard
├── 📁 folder/
│   ├── 📄 kal.html  #Berisi HANYA daftar mata kuliah
│   ├── 📄 kal.css  #Semua aturan styling (CSS)
│   └── 📄 kal.js  #Semua fungsionalitas (JavaScript)
├── 📁 foto/
│   ├── 🖼️ anjas.jpg  #Foto profil
│   └── 🖼️ honkai.png  #Favicon halaman
└── 📄 README.md  #File ini (dokumentasi project)
```

---

## 🚀 Cara Menjalankan Project

Karena ini adalah project web statis, Anda tidak memerlukan server khusus untuk menjalankannya.

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/Haykal20/pemograman3.git](https://github.com/Haykal20/pemograman3.git)
    ```
2.  **Masuk ke direktori project:**
    ```bash
    cd pemograman3
    ```
3.  **Buka file `index.html`** langsung di browser favorit Anda (Google Chrome, Firefox, dll).

---

## ✏️ Cara Kustomisasi

### Mengubah Informasi Profil
Buka file `index.html` dan edit bagian di dalam `Navbar header` untuk mengubah nama, NIM, hobi, dan gambar profil.

### Menambah atau Mengubah Mata Kuliah
Semua data mata kuliah disimpan di file `kal.html`.

1.  Buka file `kal.html`.
2.  Untuk menambah mata kuliah baru, salin blok kode yang sudah ditandai di bagian `bawah`.
3.  Tempel di bawah mata kuliah terakhir.
4.  **Penting:** Ubah `id` dan `data-bs-target` ke nomor unik (misal: `#collapse9` dan `id="collapse9"`).
5.  Ubah detail lainnya seperti nama mata kuliah, SKS, jadwal, dan deskripsi.

---

## 👤 Author

-   **Haykalf.s**
-   GitHub: [@Haykal20](https://github.com/Haykal20)
