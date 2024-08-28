function encryptText() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let encrypted = inputText.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decrypted = inputText.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decrypted;
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
