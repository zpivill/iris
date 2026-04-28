const buttons  = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('.menu-section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show / hide sections
    sections.forEach(sec => {
      if (filter === 'all' || sec.dataset.category === filter) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });
  });
});

window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

document.getElementById("closeBtn").onclick = function() {
  document.getElementById("popup").style.display = "none";
};