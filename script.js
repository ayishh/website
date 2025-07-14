// Pixel Avatar Interactivity
const pixelAvatar = document.getElementById('pixelAvatar');
pixelAvatar.addEventListener('click', () => {
  pixelAvatar.classList.add('avatar-animate');
  setTimeout(() => {
    pixelAvatar.classList.remove('avatar-animate');
    showPixelAlert('psst..I used Cursor AI to make this');
  }, 600);
});

// Add animation class via CSS
const style = document.createElement('style');
style.innerHTML = `
.avatar-animate {
  animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes shake {
  10%, 90% { transform: translateX(-2px); }
  20%, 80% { transform: translateX(4px); }
  30%, 50%, 70% { transform: translateX(-8px); }
  40%, 60% { transform: translateX(8px); }
}
`;
document.head.appendChild(style);

// Fun project item bounce
const projects = document.querySelectorAll('.pixel-project');
projects.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.2s';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// Pixel-style alert
function showPixelAlert(message) {
  let alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.style.position = 'fixed';
  alertBox.style.top = '30%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.style.background = '#222';
  alertBox.style.color = '#ffcc00';
  alertBox.style.border = '6px solid #ff00cc';
  alertBox.style.fontFamily = 'Press Start 2P, cursive';
  alertBox.style.fontSize = '1.1rem';
  alertBox.style.padding = '32px 24px';
  alertBox.style.zIndex = '9999';
  alertBox.style.boxShadow = '4px 4px 0 #ffcc00';
  alertBox.style.textAlign = 'center';
  alertBox.style.borderRadius = '0';
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 1800);
}

// Prevent form submission and show pixel alert
const form = document.querySelector('.pixel-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  showPixelAlert('🚀 Message sent (not really, this is a demo)!');
}); 