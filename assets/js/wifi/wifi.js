document.getElementById('generateQR').addEventListener('click', function() {
    var ssid = document.getElementById('ssid').value;
    var password = document.getElementById('password').value;
    var encryption = document.getElementById('encryption').value;

    var wifiConfig = `WIFI:S:${ssid};T:${encryption};P:${password};;`;

    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";

    var qr = qrcode(0, 'H');
    qr.addData(wifiConfig);
    qr.make();

    qrcodeElement.innerHTML = qr.createImgTag(5);
});
