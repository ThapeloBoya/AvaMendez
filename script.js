//toggle dark mode
document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
document.querySelectorAll('.section').forEach(el => observer.observe(el));





//hambugger
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });




//smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



//scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


//loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  // Optionally, remove it from DOM after fade out
  setTimeout(() => {
    loader.remove();
  }, 600); // slightly more than CSS fade duration
});
