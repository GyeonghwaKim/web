const calculatesSumButonElement=document.querySelector('#calculator button');
function calculateSum(){
    const userNumberInputElement=document.getElementById('user-number');
    const eneteredNumber=userNumberInputElement.value;
    let sumUpToNumber=0;

    for(let i=0;i<=eneteredNumber;i++){
        sumUpToNumber=sumUpToNumber+i;

    }
    const outputResultElement=document.getElementById('calculated-sum')

    outputResultElement.textContent=sumUpToNumber;
    outputResultElement.style.display='block';
}

calculatesSumButonElement.addEventListener('click',calculateSum);

//highlight for - of

const highlightLinkesButtonElement=document.querySelector('#highlight-links button');
function highlightLinks(){
    const anchorElements=document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}
highlightLinkesButtonElement.addEventListener('click',highlightLinks);

//Display user data  for in
const dummyUserData={
    firstName:'Max',
    lastName:'Schwarzmuller',
    age:32
};

const displayUserDataButtonElement=document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement=document.getElementById('output-user-data');
    outputDataElement.innerHTML='';
    for(const key in dummyUserData){
        const newUserDataListItemElement=document.createElement('li');
        const outputText=key.toUpperCase()+':'+dummyUserData[key];
        newUserDataListItemElement.textContent=outputText;
        outputDataElement.append(newUserDataListItemElement);
}
}
displayUserDataButtonElement.addEventListener('click',displayUserData);
//while

const rollDiceButtonElement=document.querySelector('#statistics button');
function rollDice(){
    return Math.floor(Math.random()*6)+1; //Math.floor 반내림
}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement=document.getElementById('user-target-number');;
    const diceRollsListElement=document.getElementById('dice-rolls');

    const enteredNumber=targetNumberInputElement.value;
    diceRollsListElement.innerHTML='';

    let hasRolledTargetNumber=false;
    let numberOfRolls=0;

    while(!hasRolledTargetNumber){
        const rolledNumber=rollDice();
        numberOfRolls++;
        const newRollListItemElement=document.createElement('li');
        const outputText='Roll'+numberOfRolls+':'+rolledNumber;
        newRollListItemElement.textContent=outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber=rolledNumber==enteredNumber;
    }
    const outputTotalRollsElement=document.getElementById('output-total-rolls');
    const outputTargetNumberElement=document.getElementById('output-target-number');
    outputTargetNumberElement.textContent=enteredNumber;
    outputTotalRollsElement.textContent=numberOfRolls;

}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);
