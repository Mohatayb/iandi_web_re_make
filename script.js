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
    const customMsg = document.getElementById('customEmailMsg');
    if (customMsg) customMsg.remove();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      const customMsg = document.getElementById('customEmailMsg');
      if (customMsg) customMsg.remove();
    }
  });
  
  setTimeout(() => {
    hint.style.opacity = '0';
    setTimeout(() => hint.remove(), 500);
  }, 5000);

  (function(w,d,e,u,f,l,n){
    w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
    l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
  })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
  ml('account', '1740404');

  document.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.primary[type="submit"]')) {
      const emailInput = document.querySelector('input[name="fields[email]"]');
      if (emailInput) {
        const email = emailInput.value;

        setTimeout(() => {
          if (!document.getElementById('customEmailMsg')) {
            const msg = document.createElement('div');
            msg.id = 'customEmailMsg';
            msg.style.marginTop = '10px';
            msg.style.fontSize = '20px';
            msg.style.color = '#333';
            msg.style.textAlign = 'center';
            msg.innerHTML = `A confirmation email has been sent to <span style="font-weight: bold; color: #04abd8;">${email}</span>. Please check your inbox, including your spam or junk folder, to ensure you received it.`;
            const mlDiv = document.querySelector('.ml-embedded');
            if (mlDiv) mlDiv.appendChild(msg);
          }
        }, 500);
      }

      setTimeout(() => {
        overlay.classList.remove('active');
        const customMsg = document.getElementById('customEmailMsg');
        if (customMsg) customMsg.remove();
      }, 15000);
    }
  });
});
