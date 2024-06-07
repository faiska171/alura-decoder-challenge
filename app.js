document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.querySelector(".textarea");
    let buttonEncrypt = document.querySelector(".button-encrypt");
    let buttonDecrypt = document.querySelector(".button-decrypt");
    let card = document.querySelector(".card");
    let encryptedParagraph = card.querySelector("p");
    let copyButton = card.querySelector(".button-decrypt");
    let imageCard = card.querySelector("img");
    let h3Element = card.querySelector("h3");
  
    buttonEncrypt.addEventListener("click", encryptMessage);
    buttonDecrypt.addEventListener("click", decryptMessage);
  
    function encryptMessage() {
      imageCard.classList.add("hidden");
      h3Element.classList.add("hidden");
      let text = textarea.value;
      if (validateInput(text)) {
        let encryptedText = encryptText(text);
        showResult(encryptedText);
      }
    }
  
    function decryptMessage() {
      imageCard.classList.add("hidden");
      h3Element.classList.add("hidden");
      let text = textarea.value;
      if (validateInput(text)) {
        let decryptedText = decryptText(text);
        showResult(decryptedText);
      }
    }
  
    function validateInput(text) {
      const regex = /^[a-z\s]*$/;
      if (!regex.test(text)) {
        alert(
          "O texto deve conter apenas letras minúsculas, sem acentos nem caracteres especiais, e pode incluir espaços."
        );
        clearInput();
        return false;
      }
      return true;
    }
  
    function encryptText(text) {
      let result = "";
      for (let char of text.toLowerCase()) {
        switch (char) {
          case "e":
            result += "enter";
            break;
          case "i":
            result += "imes";
            break;
          case "a":
            result += "ai";
            break;
          case "o":
            result += "ober";
            break;
          case "u":
            result += "ufat";
            break;
          default:
            result += char;
        }
      }
      return result;
    }
  
    function decryptText(text) {
      let result = "";
      let i = 0;
      while (i < text.length) {
        if (text.substring(i, i + 5) === "enter") {
          result += "e";
          i += 5;
        } else if (text.substring(i, i + 4) === "imes") {
          result += "i";
          i += 4;
        } else if (text.substring(i, i + 2) === "ai") {
          result += "a";
          i += 2;
        } else if (text.substring(i, i + 4) === "ober") {
          result += "o";
          i += 4;
        } else if (text.substring(i, i + 4) === "ufat") {
          result += "u";
          i += 4;
        } else {
          result += text[i];
          i++;
        }
      }
      return result;
    }
  
    function showResult(resultText) {
      card.classList.remove("hidden");
      encryptedParagraph.textContent = resultText;
      copyButton.classList.remove("hidden");
    }
  
    function clearInput() {
      textarea.value = "";
    }
  
    copyButton.addEventListener("click", function () {
      const textToCopy = encryptedParagraph.textContent;
  
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
          console.error("Erro ao copiar texto: ", err);
        });
    });
  });