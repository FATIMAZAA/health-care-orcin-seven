function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

document.getElementById('symptomForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const checked = document.querySelectorAll('#symptomForm input:checked');

  if (checked.length >= 2) {
    goTo('emergency');
  } else {
    alert("No major risk detected. Continue monitoring.");
    goTo('dashboard');
  }
});

function triggerEmergency() {
  goTo('emergency');
}
