document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
      alert("Navigating to " + this.getAttribute('href').substring(1) + " section!");
      alert("Enjoy the smooth scroll!");
      alert("Have a great day!");
  });
});

