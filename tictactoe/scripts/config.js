function openPlayerConfig(){
    playerConfigOverlayElement.style.display='block'; //block 보이기 none 안보이기
    backdropElement.style.display='block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display='none'; //block 보이기 none 안보이기
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
}
function savePlayerConfig(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredPlayername=formData.get('playername').trim();

    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent='Please enter a valid name!';
        return;
    }
    
}