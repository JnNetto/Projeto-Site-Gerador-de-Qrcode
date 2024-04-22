function previewFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
  
    reader.readAsDataURL(file);
    reader.onloadend = () => (previewEl.src = reader.result);
  }

const makeVCardVersion = () => `VERSION:3.0`;
const makeVCardInfo = (info) => `N:${info}`;
const makeVCardName = (name) => `FN:${name}`;
const makeVCardOrg = (org) => `ORG:${org}`;
const makeVCardTitle = (title) => `TITLE:${title}`;
const makeVCardTel = (phone) => `TEL;TYPE=WORK,VOICE:${phone}`;
const makeVCardAdr = (address) => `ADR;TYPE=WORK,PREF:;;${address}`;
const makeVCardEmail = (email) => `EMAIL:${email}`;
const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

function makeVCardQRCode() {
    let vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardInfo(cardInfoEl.value)}
${makeVCardName(nameEl.value)}
${makeVCardOrg(orgEl.value)}
${makeVCardTitle(titleEl.value)}
${makeVCardTel(telEl.value)}
${makeVCardAdr(addressEl.value)}
${makeVCardEmail(emailEl.value)}
${makeVCardTimeStamp()}
END:VCARD`;

    // Cria o QR code
    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";
    
    var qr = qrcode(0, 'H');
    qr.addData(vcard);
    qr.make();

    qrcodeElement.innerHTML = qr.createImgTag(3);
}

downloadEl.addEventListener('click', makeVCardQRCode);
fileEl.addEventListener('change', previewFile);
