const input = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');
const output = document.getElementById('qr-output');
let qrCode;

function generateQRCode(text) {
  // Clear any existing
  output.innerHTML = '';
  qrCode = new QRCode(output, {
    text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

generateBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) {
    alert('Please enter valid text or URL.');
    return;
  }
  generateQRCode(value);
});
