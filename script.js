const registrationForm = document.getElementById('registration-form');
const otpForm = document.getElementById('otp-form');
const filterScreen = document.getElementById('filter-screen');
const congratsScreen = document.getElementById('congrats-screen');
const filterImages = document.querySelectorAll('.filter-image');

registrationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  otpScreen();
});

otpForm.addEventListener('submit', function(e) {
  e.preventDefault();
  moodSelectionScreen();
});

filterImages.forEach(function(image) {
image.addEventListener('click', function() {
    const selectedMood = this.getAttribute('data-filter');
    thankYouScreen(selectedMood);
  });
});

function otpScreen() {
  document.getElementById('registration-screen').style.display = 'none';
  document.getElementById('otp-screen').style.display = 'block';
}

function moodSelectionScreen() {
  document.getElementById('otp-screen').style.display = 'none';
  document.getElementById('filter-screen').style.display = 'block';
}

function thankYouScreen(mood) {
  document.getElementById('filter-screen').style.display = 'none';
  document.getElementById('congrats-screen').style.display = 'block';
  const congratsScreen = document.getElementById('congrats-screen');
  const image = document.createElement('img');
  image.src = 'images/thankscard.png';
  image.alt = 'Congratulations Image';
  congratsScreen.innerHTML = '';
  congratsScreen.appendChild(image);
}

// otpScreen();
// moodSelectionScreen();
// thankYouScreen();