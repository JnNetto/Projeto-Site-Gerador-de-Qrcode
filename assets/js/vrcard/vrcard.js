
const makeVCardVersion = () => `VERSION:3.0`;
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
${makeVCardName(nameEl.value)}
${makeVCardOrg(orgEl.value)}
${makeVCardTitle(titleEl.value)}
${makeVCardTel(telEl.value)}
${makeVCardAdr(addressEl.value)}
${makeVCardEmail(emailEl.value)}
${makeVCardTimeStamp()}
END:VCARD`;

  var qrcodeElement = document.getElementById("qrcode");
  qrcodeElement.innerHTML = "";

  var qr = qrcode(0, "L");
  qr.addData(vcard);
  qr.make();

  qrcodeElement.innerHTML = qr.createImgTag(4, 10);
}

downloadEl.addEventListener("click", makeVCardQRCode);

