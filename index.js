// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);



function writeCards(name, eventName){
    //create a new, empty array to hold the messages
    const newArray = [];
    //iterate through the input array and, inside the loop
    //build out the 'thank you' message for each name using string interpolation
    //then add that message to the new array you created;
    for (let i = 0; i < 3; i++) {
    newArray.push(`Thank you, ` + name[i] + `, for the wonderful ` + eventName + ` gift!`);
}

    //after the loop finishes and all of the messages have been added to the new array, return the new array.
    return newArray;
}

function countDown(int){
    while (int >= 0) {
        console.log(int);
        int--;
    }
    return int;
    countDown(int);
}