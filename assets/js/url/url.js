var qrcode = qrcode(0, 'H'); // Cria uma instância do QRCode

function generateQR() {
    var input = document.getElementById('input').value;
    qrcode.addData(input); // Adiciona os dados ao QRCode
    qrcode.make(); // Gera o QRCode

    // Exibe o QRCode na página
    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = qrcode.createImgTag(4); // 4 é o tamanho da margem (em pixels)
}

