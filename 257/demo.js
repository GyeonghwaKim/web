const productNameInptElement=document.getElementById('product-name');
const remainingCharsElement=document.getElementById('remaining-chars');

//console.dir(productNameInptElement);

const maxAllowedChars=productNameInptElement.maxLength;

function updateReamainingCharacters(event){
    const enteredText=event.target.value;
    const enteredTextLength=enteredText.length;

    const remainingCharacters=maxAllowedChars-enteredTextLength;

    remainingCharsElement.textContent=remainingCharacters;

}
productNameInptElement.addEventListener('input',updateReamainingCharacters);