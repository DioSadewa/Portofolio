document.addEventListener('DOMContentLoaded', () => {
    // --- Animasi Typing yang Dipercepat ---
    const typingText = document.getElementById('typing-text');
    const words = ["Mechanical Engineering Drawing Assistant", "Project Based Learning Team Leader", "Ex Maintenance Technician in PT Astra Graphia Tbk", "Fasillitator Kemendikdasmen"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50; // Kecepatan awal lebih cepat

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30; // Kecepatan menghapus sangat cepat
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80; // Kecepatan mengetik dipercepat (sebelumnya 150)
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1000; // Jeda saat kata selesai (dikurangi dari 2000ms ke 1000ms)
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 300; // Jeda sebelum mulai kata baru (dikurangi dari 500ms)
        }

        setTimeout(type, typeSpeed);
    }

    if (typingText) type();

    // --- Animasi Reveal (tetap sama) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach((el) => observer.observe(el));
});

// Fungsi Copy to Clipboard untuk Email
const copyEmailBox = document.getElementById('copy-email');

if (copyEmailBox) {
    copyEmailBox.addEventListener('click', function() {
        // Ambil teks email dari elemen p di dalamnya
        const emailText = this.querySelector('p').innerText;
        
        // Proses Copy
        navigator.clipboard.writeText(emailText).then(() => {
            // Visual feedback: Teks berubah sementara
            const originalText = this.querySelector('h4').innerText;
            const h4Element = this.querySelector('h4');
            const iconElement = this.querySelector('.copy-icon');

            h4Element.innerText = 'COPIED!';
            h4Element.style.color = 'var(--secondary)';
            iconElement.classList.replace('fa-copy', 'fa-check');

            // Balikin ke semula setelah 2 detik
            setTimeout(() => {
                h4Element.innerText = originalText;
                h4Element.style.color = 'var(--text-muted)';
                iconElement.classList.replace('fa-check', 'fa-copy');
            }, 2000);
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
        });
    });
}

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        // Kasih jeda dikit biar form-nya ke-submit dulu baru muncul alert
        setTimeout(() => {
            alert('Pesan lu udah terkirim, bos! Tunggu balesan di Gmail ya.');
            this.reset(); // Kosongin form lagi
        }, 500);
    });
}

/* ============================= */
/* STAR GENERATOR (BACKGROUND) */
/* ============================= */

const starContainer = document.querySelector(".stars");

if(starContainer){
    for(let i=0;i<80;i++){
        const star=document.createElement("div");
        star.classList.add("star");

        star.style.left=Math.random()*100+"%";
        star.style.top=Math.random()*100+"%";
        star.style.animationDelay=Math.random()*3+"s";

        starContainer.appendChild(star);
    }
}

