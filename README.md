# QA Automation (WDIO + Cucumber) – Final Project (Sanbercode QA Batch 59)

##  Overview
Projeks ini merupakan tugas akhir dari kelas **Sanbercode QA Automation Batch 59**, menggunakan **WebDriverIO (WDIO)** dengan framework **Cucumber** untuk mengotomasi skenario login pada aplikasi web **saucedemo**. Aplikasi kasirAja mengalami kendala error `undefined step` pada tahap implementasi, sehingga diganti ke `saucedemo`.

---

##  Demo Hasil Running
[Screenshot atau video hasil otomatisasi](https://drive.google.com/file/d/1Mdr8rZ_Ksbd2c2rY7UEf6Cllyj7DCGmQ/view?usp=sharing)

---

##  Test Scenarios
Dokumen Google Sheets berisi skenario pengujian manual dan rencana automasi:  
[Test Scenario Sheet](https://docs.google.com/spreadsheets/d/1yzMcmWOWHCXvOTe2bUd6EDGQS9JSV5w3kfj_g9VkLQ8/edit?usp=sharing)

---

##  Why Saucedemo?
Repositori ini sebenarnya ditujukan untuk aplikasi kasirAja, namun terjadi error `undefined step` meski tahap sebelumnya berjalan sukses. Oleh karena itu, untuk keperluan tugas akhir otomatisasi, digunakan **saucedemo** sebagai alternatif yang stabil dan mendukung pengujian end-to-end.  
[Lihat alasan teknisnya di sini](https://drive.google.com/file/d/1LWSC3-uH28v6B6ecRwiTldYjMPl_tOgh/view?usp=sharing)

---

##  Tech Stack & Tools
- **Language / Framework:** JavaScript, Gherkin (Cucumber)  
- **Test Runner:** WebDriverIO  
- **Config File:** `wdio.conf.js`  
- **NPM Scripts:**
  - `npm install` – instalasi dependencies
  - `npm run wdio:login` – menjalankan automasi skenario login

---

##  How to Run This Project

```bash
# 1. Clone repository
git clone https://github.com/Vinna28/tugas_akhir_QA_automation_sanbercode_batch59.git

# 2. Masuk ke direktori project
cd tugas_akhir_batch59

# 3. Install dependencies
npm install

# 4. Jalankan automasi untuk skenario login
npm run wdio:login
Repository Structure
bash
Salin
Edit
.
├── features/
│   ├── login.feature            # Skenario Gherkin
│   └── step-definitions/        # Implementasi step untuk fitur
├── wdio.conf.js                 # Konfigurasi WebDriverIO
├── package.json                 # Dependencies & scripts
└── README.md                    # Dokumentasi repositori

What I Learned
Setup end-to-end automation dengan WDIO + Cucumber
Struktur skenario Gherkin untuk login flow
Troubleshooting otomatisasi saat encountering undefined step error
Manajemen skrip dan konfigurasi NPM untuk menjalankan tests dengan mudah

Next Steps
Ekspansi automasi ke skenario lain (search, cart, checkout)
Tambahkan reporting (Allure atau HTML report)
Integrasi dengan CI/CD (GitHub Actions / GitLab CI)
Gunakan Page Object Model (POM) agar lebih scalable

License
MIT License – feel free to explore, reuse, and learn from this project.
