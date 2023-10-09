function kirimPesan() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !email || !telepon || !subjek || !pesan) {
        // Menampilkan pesan notifikasi dengan komponen alert Bootstrap
        document.getElementById("notifikasi").innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Harap isi formulir dengan lengkap!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    } else {
        const whatsappText = `Halo,%20apakah%20bisa%20mengatur%20jadwal%20untuk%20kerja%20sama%3F%20Saya%20tertarik%20dengan%20FlyHigh%20Corp.%20%21%0A%0A**Data:**%0ANama%3A%20${nama}%0AEmail%3A%20${email}%0ANo.Telp%3A%20${telepon}%0ASubjek%3A%20${subjek}%0APesan%3A%20${pesan}`;
        const whatsappLink = `https://wa.me/+6285158911396?text=${whatsappText}`;

        // Mengirim pesan WhatsApp
        window.open(whatsappLink, "_blank");

        // Menampilkan notifikasi
        const notifikasi = document.getElementById("notifikasi");
        notifikasi.innerHTML = `
            <div class="alert alert-success">
                Pesan telah terkirim! Terimakasih sudah berpartisipasi.
            </div>
        `;

        // Mengosongkan formulir
        document.getElementById("pesanForm").reset();
    }
}
