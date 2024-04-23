document.getElementById('generateQR').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;

    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";

    var qr = qrcode(0, 'H');
    qr.addData(text);
    qr.make();

    qrcodeElement.innerHTML = qr.createImgTag(3);
});