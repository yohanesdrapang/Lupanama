// Ambil semua section dan persona image
const sections = document.querySelectorAll('.section');
const personas = document.querySelectorAll('.persona-img');

// Fungsi untuk cek posisi elemen di viewport
function revealElements() {
  const triggerBottom = window.innerHeight * 0.85;

  // Reveal sections
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });

  // Reveal persona images
  personas.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottom) {
      img.classList.add('show');
    }
  });
}

// Event listener scroll
window.addEventListener('scroll', revealElements);

// Jalankan saat pertama load
revealElements();
