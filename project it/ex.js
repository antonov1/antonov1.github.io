function problem1 (x, y, z) {
 return (Math.round(x+y*z-z%y+y*z));   
}
let a = problem1 (10.4, 5, 2.3);
console.log(a);
///Ex. 2
(() => {
    let Obj = new Object;
    Obj["type"] = "house";
    Obj["rooms"] = 5;
    Obj["garden"] = "flowers";
    Obj["cows"] = 2;
    Obj["pigs"] = 1;
    console.log(`We have a ${obj.type} with ${obj.rooms} rooms. We have a garden with ${obj.garden} and ${obj.cows} cows and ${obj.pigs} pigs `);



})()
///Ex. 3
(() => {
    let fruit = new Array;
    fruit = ["kiwi", "apple", "banana", "peach", "pear"];
    console.log(`${fruit[0]}, ${fruit[3]}, ${fruit[7]}`);
})()