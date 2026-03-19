<script>
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
</script>
