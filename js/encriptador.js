let textToEncrypt;

function encrypt(){
  textToEncrypt = document.getElementById("textToEncrypt");
  let btnToencrypt = document.getElementById("btn-encrypt");
  btnToencrypt.addEventListener("click", encryptText)
  let btnDecrypt = document.getElementById("btn-decrypt")
  btnDecrypt.addEventListener("click", decryptText)
  let btnCopy = document.getElementById("btn-copy")
  btnCopy.addEventListener("click", copy)
}

function encryptText(){
  let text = textToEncrypt.value;
  let textTransform = text.split("")
  let textEncrypt = []

  console.log(textTransform, "the first part")
  for(const element of textTransform){
    if(element=="a"){
      textEncrypt.push("ai")
    }
    else if(element=="e"){
      textEncrypt.push("enter")
    }
    else if(element=="i"){
      textEncrypt.push("imes")
    }
    else if (element=="o"){
      textEncrypt.push("ober")
    }
    else if(element=="u"){
      textEncrypt.push("ufat")
    }
    else{
      textEncrypt.push(element)
    }
  }
  showTextEncrypt(textEncrypt.join(""));
}

function decryptText(){
  let textDecrypt = textToEncrypt.value;
  let decryptedText = textDecrypt.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat","u");
  showTextEncrypt(decryptedText);
  }

function showTextEncrypt(text){
  let img = document.getElementById("container-img");
  img.style.display = "none"
  let textEncrypted = document.getElementById("text-encrypt")
  textEncrypted.style.display ="block"
  textEncrypted.innerText=text;
  let btnCopy = document.getElementById("btn-copy");
  btnCopy.style.display = "block"
}

function copy(){
  let textToCopy = document.getElementById("text-encrypt");
  textToCopy.removeAttribute("disabled");
  navigator.clipboard.writeText(textToCopy.value)
}

window.addEventListener("load",encrypt)