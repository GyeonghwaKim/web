let paragraphElement=document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent='Clicked!';
    console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click',changeParagraphText);

let inputElement=document.querySelector('input');

function retrieveUserInput(event){
   // let enteredText=inputElement.value;
   let enteredText=event.target.value;
   //let enteredText=event.data; 문자한개씩 log됨
    console.log(enteredText);

}

inputElement.addEventListener('input',retrieveUserInput);