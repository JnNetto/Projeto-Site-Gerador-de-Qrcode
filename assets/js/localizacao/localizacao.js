var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

function onMapClick(e) {
    var latitude = e.latlng.lat;
    var longitude = e.latlng.lng;
    var url = "https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude;

    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";

    var qr = qrcode(0, 'H');
    qr.addData(url);
    qr.make();

    qrcodeElement.innerHTML = qr.createImgTag(5);
}

map.on('click', onMapClick);
