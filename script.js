document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('subscribeBtn');
  const overlay = document.getElementById('overlay');
  const closeModal = document.getElementById('closeModal');
  const hint = document.getElementById('subscribeHint');

  btn.addEventListener('click', () => {
    overlay.classList.add('active');
    hint.style.display = 'none';
  });

  closeModal.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

    overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
  
  setTimeout(() => {
    hint.style.opacity = '0';
    setTimeout(() => hint.remove(), 500);
  }, 5000);

   (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1740404');
});
