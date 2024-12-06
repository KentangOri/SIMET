// Mengubah tema antara terang dan gelap
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeButton = document.getElementById('theme-button');
    themeButton.textContent = body.classList.contains('dark-theme') ? 'Tema Terang' : 'Tema Gelap';
};

// Menampilkan alert saat menu navigasi diklik
const setupNavigation = () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`Anda memilih bagian: ${link.textContent}`);
        });
    });
};

// Menampilkan waktu saat ini di footer
const updateTime = () => {
    const footer = document.querySelector('footer');
    const timeDisplay = document.createElement('p');
    timeDisplay.id = 'current-time';
    footer.appendChild(timeDisplay);

    setInterval(() => {
        const now = new Date();
        timeDisplay.textContent = `Waktu saat ini: ${now.toLocaleTimeString()}`;
    }, 1000);
};

// Menambahkan efek animasi pada header saat halaman dimuat
const animateHeader = () => {
    const header = document.querySelector('header');
    header.style.transition = 'transform 1s ease-in-out';
    header.style.transform = 'translateY(0)';
};

// Menjalankan fungsi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    updateTime();
    animateHeader();

    // Menambahkan tombol untuk mengubah tema
    const themeButton = document.createElement('button');
    themeButton.id = 'theme-button';
    themeButton.textContent = 'Tema Gelap';
    themeButton.style.position = 'fixed';
    themeButton.style.bottom = '20px';
    themeButton.style.right = '20px';
    themeButton.style.padding = '10px 15px';
    themeButton.style.background = '#007BFF';
    themeButton.style.color = '#fff';
    themeButton.style.border = 'none';
    themeButton.style.borderRadius = '5px';
    themeButton.style.cursor = 'pointer';
    themeButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    themeButton.addEventListener('click', toggleTheme);

    document.body.appendChild(themeButton);
});

// Menambahkan gaya untuk tema gelap
const style = document.createElement('style');
style.textContent = `
    body.dark-theme {
        background: linear-gradient(to right, #1e3c72, #2a5298);
        color: #fff;
    }
    body.dark-theme nav {
        background: #444;
    }
    body.dark-theme nav ul li a {
        color: #fff;
    }
    body.dark-theme nav ul li a:hover {
        color: #FFD700;
    }
    body.dark-theme footer {
        background: #222;
    }
`;
document.head.appendChild(style);
