// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
//Exercise 29
console.log("\nExercise 29");
var favoriteFruits = ["Mango", "Orange", "Strawberry"];
if (favoriteFruits.indexOf("Mango") !== -1) {
    console.log("You really like Mango!");
}
if (favoriteFruits.indexOf("Banana") !== -1) {
    console.log("You really like Banana!");
}
if (favoriteFruits.indexOf("Orange") !== -1) {
    console.log("You really like Orange!");
}
if (favoriteFruits.indexOf("Grapes") !== -1) {
    console.log("You really like Grapes!");
}
if (favoriteFruits.indexOf("Strawberry") !== -1) {
    console.log("You really like Strawberry!");
}
