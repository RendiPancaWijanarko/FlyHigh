$(document).ready(function(){
    var uiDesigns = [
        { title: 'ASTRA', text: 'ASTRA merupakan aplikasi berbasis mobile dengan AR (Augmented Reality) untuk melihat seluruh tarian yang ada di Indonesia. UI/UX Design yang kami berikan memiliki niche untuk anak dengan usia yang masih berada di taman kanak-kanak sesuai dengan permintaan client. Kendati demikian, kami berikan opsi light dan dark mode untuk preferensi user dengan harapan tidak hanya anak tk saja,  melainkan seluruh rakyat Indonesia menyukai aplikasi edukatif ini. Project ASTRA berhasil kami kerjakan dan menghasilkan review positif dari client terkait.', image: 'Assets/images/astra.png' },

        { title: 'K.E.T.I.K.A', text: 'K.E.T.I.K.A merupakan hasil eksplorasi design dari founder FlyHigh, Rendi Panca. Aplikasi ini merupakan perwujudan dari keresahan masyarakat untuk menyampaikan sebuah pesan kepada pemerintah daerah hingga pusat terkait persoalan infrastruktur, pelayanan masyarakat, hingga kasus pelanggaran kode etik suatu instansi. Dengan adanya K.E.T.I.K.A, masyarakat tidak perlu menunggu sebuah kasus untuk viral agar dapat ditanggapi oleh pemerintah terkait. Nama KETIKA diambil sebagai simbolis sebuah kalimat "KETIKA masyarakat bersuara, pemerintah mendengar. KETIKA pemerintah bertugas, masyarakat mengapresiasi".', image: 'Assets/images/ketika.png' },

        { title: 'PayTrash', text: 'PayTrash merupakan hasil eksplorasi design dari founder FlyHigh, Rendi Panca. Aplikasi ini ada sebagai solusi dari permasalahan sampah yang menggunung di berbagai titik Indonesia. PayTrash memungkinkan masyarakat Indonesia untuk menukarkan sampah yang mereka miliki menjadi pundi uang yang berguna. Nantinya, masyarakat dapat memilih role sebagai Picker(Petugas Pengangkut Sampah) atau sebagai Thrower(Masyarakat Penyuplai Sampah).', image: 'Assets/images/paytrash.png' }
    ];

    var articles = [
        { title: 'Application of Augmented Reality in Food Ordering System', text: 'Tren digital saat ini meningkatkan prioritas pemrosesan informasi dalam otoritas dan organisasi. Dalam konteks bisnis makanan, beberapa telah mengadopsi sistem informasi komputerisasi, sementara yang lain masih mengandalkan metode tradisional. Dapoer Widya Restaurant mengalami tantangan serupa. Penelitian ini bertujuan membangun sistem pemesanan menggunakan PHP dan model UML, serta mengintegrasikan menu berbasis AR dengan Vuporia dan Unity3D. Metode pengembangan sistem adalah SDLC. Hasilnya adalah sistem pemesanan yang mencakup penentuan meja, laporan transaksi terintegrasi, dan menu berbasis AR dengan tampilan 3D.', image: 'Assets/images/ar-artikel.png' },

        { title: "Implementation of Delone & Mclean's Succes Model as an Evaluation of the Resource Management Information System at Dapoer Widya", text: 'Penelitian ini menganalisis model terbaru yang mencakup enam dimensi kesuksesan sistem informasi (SI). Metode penelitian adalah survei dengan pengumpulan data melalui kuesioner. Data dikumpulkan antara Januari dan Maret 2023 dari 23 responden. Hasilnya menunjukkan bahwa kualitas informasi berpengaruh positif pada kepuasan pelanggan (hipotesis 1 diterima), sedangkan kualitas sistem tidak berpengaruh (hipotesis 2 ditolak). Kualitas layanan berpengaruh positif pada kepuasan pelanggan (hipotesis 3 diterima), dan kepuasan pelanggan berpengaruh positif pada manfaat bersih (hipotesis 4 diterima).', image: 'Assets/images/dapoer-artikel.png' },

        { title: 'Implementation of The COBIT 2019 Framework to Improve Information Technology Performance in Tokopedia', text: 'Tata kelola TI yang efektif berdampak besar pada kinerja dan hasil keseluruhan. COBIT 2019 digunakan oleh auditor TI untuk menilai tata kelola TI. Namun, perlu penilaian budaya organisasi dalam audit. Penelitian ini mengevaluasi implementasi COBIT 2019 di Tokopedia. Data dikumpulkan melalui observasi dan tinjauan artikel jurnal. Evaluasi fokus pada domain DSS dan mengidentifikasi area perbaikan. Hasilnya memiliki implikasi praktis bagi organisasi yang ingin meningkatkan kinerja TI mereka.', image: 'Assets/images/cobit-artikel.png' }
    ];

    var descriptions = uiDesigns; // default to uiDesigns

    function updateCarousel() {
        $('#carouselInner').empty();
        for (var i = 0; i < descriptions.length; i++) {
            var activeClass = i === 0 ? ' active' : '';
            $('#carouselInner').append('<div class="carousel-item' + activeClass + '" data-bs-interval="8000"><img src="' + descriptions[i].image + '" class="d-block mx-auto" width="50%" alt="' + descriptions[i].title + '"></div>');
        }

        // Update the text immediately
        var currentIndex = $('#imagePSCslider .carousel-item.active').index();
        $('#title').text(descriptions[currentIndex].title);
        $('#text').text(descriptions[currentIndex].text);
    }

    $('#uiDesignBtn').click(function() {
        descriptions = uiDesigns;
        updateCarousel();
    });

    $('#articleBtn').click(function() {
        descriptions = articles;
        updateCarousel();
    });

    $('#imagePSCslider').on('slid.bs.carousel', function () {
        var currentIndex = $('#imagePSCslider .carousel-item.active').index();
        $('#title').text(descriptions[currentIndex].title);
        $('#text').text(descriptions[currentIndex].text);
    });

    updateCarousel(); // Update the carousel immediately
});