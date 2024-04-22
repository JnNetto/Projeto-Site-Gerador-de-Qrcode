document.getElementById('generateQR').addEventListener('click', function() {
    var emailAddress = document.getElementById('inputEmail').value;
    var mailtoLink = 'mailto:' + emailAddress;
    generateQRCode(mailtoLink);
});

function generateQRCode(content) {
    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";
    var qr = qrcode(0, 'H');
    qr.addData(content);
    qr.make();
    qrcodeElement.innerHTML = qr.createImgTag(7);
}