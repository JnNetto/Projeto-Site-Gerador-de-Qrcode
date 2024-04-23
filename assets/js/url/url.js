var qrcode = qrcode(0, 'H');

function generateQR() {
    var input = document.getElementById('input').value;
    qrcode.addData(input); 
    qrcode.make(); 

    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = qrcode.createImgTag(7);
}

