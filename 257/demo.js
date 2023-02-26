const productNameInptElement=document.getElementById('product-name');
const remainingCharsElement=document.getElementById('remaining-chars');

//console.dir(productNameInptElement);

const maxAllowedChars=productNameInptElement.maxLength;

function updateReamainingCharacters(event){
    const enteredText=event.target.value;
    const enteredTextLength=enteredText.length;

    const remainingCharacters=maxAllowedChars-enteredTextLength;

    remainingCharsElement.textContent=remainingCharacters;

    if (remainingCharacters===0){
        remainingCharsElement.classList.add('error');
        productNameInptElement.classList.add('error');

    }else if (remainingCharacters<=10){
        remainingCharsElement.classList.add('warning');
        productNameInptElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInptElement.classList.remove('error');

    }else {
        remainingCharsElement.classList.remove('warning');
        productNameInptElement.classList.remove('warning');

    }

}
productNameInptElement.addEventListener('input',updateReamainingCharacters);