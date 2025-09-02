document.addEventListener('DOMContentLoaded', () => {

    const menuItems = document.querySelectorAll('.planet-menu li');
    const planets = document.querySelectorAll('.planet');
    const planetsContainer = document.querySelector('.planets-container');

    // Menampilkan planet pertama (Bumi) saat halaman dimuat
    document.getElementById('earth').classList.add('active');

    // Fungsi untuk mengubah planet yang aktif
    const setActivePlanet = (planetId) => {
        // Hapus kelas 'active' dari semua planet dan menu
        planets.forEach(p => p.classList.remove('active'));
        menuItems.forEach(m => m.classList.remove('active'));

        // Tambahkan kelas 'active' ke planet dan menu yang dipilih
        const planetToShow = document.getElementById(planetId);
        const menuItemToActivate = document.querySelector(`[data-planet="${planetId}"]`);

        if (planetToShow) {
            planetToShow.classList.add('active');
        }
        if (menuItemToActivate) {
            menuItemToActivate.classList.add('active');
        }
    };

    // Tambahkan event listener untuk setiap item menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetPlanet = item.getAttribute('data-planet');
            setActivePlanet(targetPlanet);
        });
    });

    // INOVASI: Efek Parallax Mouse
    window.addEventListener('mousemove', (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const moveX = (e.clientX - width / 2) / width;
        const moveY = (e.clientY - height / 2) / height;

        const parallaxFactor = 15; // Sesuaikan untuk kekuatan efek

        planetsContainer.style.transform = `
            rotateX(${moveY * -parallaxFactor}deg) 
            rotateY(${moveX * parallaxFactor}deg)
        `;
    });

});