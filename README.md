# 📚 Dashboard Akademik Mahasiswa

Sebuah halaman web statis yang berfungsi sebagai dashboard personal untuk melacak jadwal mata kuliah, detail SKS, dan informasi akademik lainnya dalam satu semester.

Project ini dibuat dengan struktur kode yang bersih dan modular, memisahkan antara struktur (HTML), gaya (CSS), dan fungsionalitas (JavaScript) untuk kemudahan pengelolaan.

**[➡️ Lihat Live Demo](https://haykal20.github.io/pemograman3/)**

---

![Pratinjau Dashboard](https://raw.githubusercontent.com/Haykal20/Haykal-Furqan-Shafiq/main/ss.jpg)

---

## ✨ Fitur Utama

-   **Profil Mahasiswa:** Menampilkan informasi dasar seperti nama, NIM, dan hobi.
-   **Jadwal Dinamis:** Daftar mata kuliah dimuat dari file eksternal (`kal.html`), sehingga sangat mudah untuk ditambah atau diubah.
-   **Waktu Real-time:** Header menampilkan tanggal dan jam terkini (WIB) yang diperbarui setiap detik.
-   **Penanda Jadwal Aktif:** Mata kuliah yang sedang berlangsung sesuai jadwal akan otomatis diberi sorotan visual (highlight).
-   **Desain Responsif:** Tampilan optimal di berbagai perangkat, mulai dari desktop hingga ponsel.

---

## 🛠️ Teknologi yang Digunakan

-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6)**
-   **Bootstrap 5** & **Bootstrap Icons**
-   **Google Fonts** (Poppins)

---

## 📁 Struktur Folder (Interaktif)

Klik pada nama file untuk melihat langsung kodenya.

```
.
├── 📄 [index.html](https://github.com/Haykal20/pemograman3/blob/main/index.html)        # Kerangka utama halaman dashboard
├── 📁 [folder/](https://github.com/Haykal20/pemograman3/tree/main/folder)
│   ├── 📄 [kal.html](https://github.com/Haykal20/pemograman3/blob/main/folder/kal.html)      # Berisi HANYA daftar mata kuliah
│   ├── 📄 [kal.css](https://github.com/Haykal20/pemograman3/blob/main/folder/kal.css)       # Semua aturan styling (CSS)
│   └── 📄 [kal.js](https://github.com/Haykal20/pemograman3/blob/main/folder/kal.js)        # Semua fungsionalitas (JavaScript)
├── 📁 [foto/](https://github.com/Haykal20/pemograman3/tree/main/foto)
│   ├── 🖼️ anjas.jpg     # Foto profil
│   └── 🖼️ honkai.png    # Favicon halaman
└── 📄 [README.md](https://github.com/Haykal20/pemograman3/blob/main/README.md)         # File dokumentasi ini
```

---

## 🚀 Cara Menjalankan Project

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/Haykal20/pemograman3.git](https://github.com/Haykal20/pemograman3.git)
    ```
2.  **Masuk ke direktori project:**
    ```bash
    cd pemograman3
    ```
3.  **Buka file `index.html`** langsung di browser Anda.

---

## ✏️ Cara Kustomisasi

### Mengubah Informasi Profil
Buka file `index.html` dan edit konten di dalam bagian yang ditandai dengan komentar ``.

### Menambah atau Mengubah Mata Kuliah
Semua data mata kuliah terpusat di file `folder/kal.html` untuk kemudahan edit.

1.  Buka file `folder/kal.html`.
2.  Untuk menambah mata kuliah baru, salin blok kode yang ada di bagian ``.
3.  Tempel di bawah mata kuliah terakhir.
4.  **Penting:** Ubah `id` dan `data-bs-target` ke nomor unik (misal: `#collapse9` dan `id="collapse9"`).
5.  Ubah detail lainnya seperti nama mata kuliah, SKS, jadwal, dan deskripsi.

---

## 👤 Author

-   **Imam Al Anjas**
-   GitHub: [@Haykal20](https://github.com/Haykal20)
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
├── 📄 index.html        # Kerangka utama halaman dashboard
├── 📁 folder/
│   ├── 📄 kal.html      # Berisi HANYA daftar mata kuliah
│   ├── 📄 kal.css       # Semua aturan styling (CSS)
│   └── 📄 kal.js        # Semua fungsionalitas (JavaScript)
├── 📁 foto/
│   ├── 🖼️ anjas.jpg     # Foto profil
│   └── 🖼️ honkai.png    # Favicon halaman
└── 📄 README.md         # File ini (dokumentasi project)
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
Buka file `index.html` dan edit bagian di dalam `` untuk mengubah nama, NIM, hobi, dan gambar profil.

### Menambah atau Mengubah Mata Kuliah
Semua data mata kuliah disimpan di file `kal.html`.

1.  Buka file `kal.html`.
2.  Untuk menambah mata kuliah baru, salin blok kode yang sudah ditandai di bagian ``.
3.  Tempel di bawah mata kuliah terakhir.
4.  **Penting:** Ubah `id` dan `data-bs-target` ke nomor unik (misal: `#collapse9` dan `id="collapse9"`).
5.  Ubah detail lainnya seperti nama mata kuliah, SKS, jadwal, dan deskripsi.

---

## 👤 Author

-   **Haykalf.s**
-   GitHub: [@Haykal20](https://github.com/Haykal20)
