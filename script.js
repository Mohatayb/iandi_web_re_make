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

    setTimeout(() => {
      hint.style.opacity = '0';
      setTimeout(() => hint.remove(), 500);
    }, 5000);