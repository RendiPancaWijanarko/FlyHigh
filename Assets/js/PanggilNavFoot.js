// Memuat konten navbar
fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});

// Memuat konten footer
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});