//1
let onlineCorseName='web programming'
let onlineCorsePrice=50
let onlineCorseGoals=['취업', '포트폴리오','백엔드'] 
//2
// alert(onlineCorseName)
// alert(onlineCorsePrice)
// alert(onlineCorseGoals)
//3
let onlineCorse={
    name:onlineCorseName,
    price:onlineCorsePrice,
    goals:onlineCorseGoals}
// alert(onlineCorse.name)
// alert(onlineCorse.price)
// alert(onlineCorse.goals)

//4
//alert(onlineCorse.goals[1])
//5
function getListItem(arr,arrIndex){
    let arrayElement=arr[arrIndex]
    return arrayElement;
}
//6
let firstGoal=getListItem(onlineCorse.goals,0)
alert(firstGoal)