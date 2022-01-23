# CLI-MyTools

Langkah-langkah menjalankan program :

1. Jalankan perintah `npm install` (Saya menggunakan package yargs untuk mengelola argument" CLI)
2. Jalankan perintah `npm link` (Perintah ini bertujuan untuk mendaftarkan command `mytools` pada sistem yang digunakan) [Catatan : Jika gagal melakukan npm link maka jalankan perintah `sudo npm rm --global mytools` untuk menghapus command mytools lama jika ada]
3. Command `mytools` sudah bisa digunakan

[CATATAN]
Source file yang digunakan harus memiliki extension `.log`. karena saya telah membuat pengecekan terkait extension file dan jika tidak sesuai maka akan muncul sebuah peringatan.

Jika file dikonversi kedalam bentuk json maka yang dilakukan oleh program adalah menyimpan file ulang dengan extension baru yaitu `.json` tanpa mengubah format isi didalamnya. Hal ini karena beberapa file log didalam direktori `/var/log/nginx` memiliki format yang berbeda-beda (contohnya access.log dan error.log) dan saya tidak tau apakah tujuan dari test ini digunakan hanya untuk file error.log atau juga untuk file" `.log` lainnya didalam direktori `/var/log/nginx`. Jadi saya memutuskan untuk tidak mengubah format didalamnya.
