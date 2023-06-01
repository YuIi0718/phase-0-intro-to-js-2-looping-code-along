// Code your solutions in this file
const nameList = ["Guadalupe", "Ollie", "Aki"];
const describe = 'surprise';

function writeCards(nameList, describe) {
    const sentenceArray = [];
    for (let i = 0; i < nameList.length; i++) {
        sentenceArray.push(`Thank you, ${nameList[i]}, for the wonderful ${describe} gift!`);
    }
    return sentenceArray;
}

const countN = 5;
function countDown(countN) {
    for (let i = countN; i >=0 ; i--) {
        console.log(i);
    }
}

