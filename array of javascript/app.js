// let numBer = [45, 55, 65, 75, 85, 95]
// console.log(numBer);
// console.log(typeof numBer);     //typeof array is object.


// let heroes = ["spiderman" , "antman", "ironman" , "pacman"]
// console.log(heroes);  // yr tww saari value arahiu h naaa ab agar mujhe aik value chahaiye tww me kiya krooga next line me bataya h
// console.log(heroes[3]);     //index3 pe mere pass pacman rakha h tww wooo show hooga.  aur agar me likho index [100] ya index [10] tww woo mujhe undefined return kr deega kyuu ke hamare array me itni values hen hi nh hn agar 100 index tak value tww hoogi tww wooo hume zaroor define kare ga 
// console.log(typeof heroes);   //humne array me string and numbers dono likh ke dekhe but usne hume type kiyaa bataiii object.

// // ab mujhe arrays ki value ko change karna h tww usse kese kare gay

// heroes [2] = "non-ironman"
// console.log(heroes);   // ironman ko non-ironman me change kr diya h 


// Looping over an array.


// let heroes = ["spiderman" , "antman", "ironman" , "pacman"]    //ab me chah raha ho ke aik aik kar ke ye chaaro element mere pass console me show ho jai

//   //i am using loop so loop halopful for me loop show elements one by one in a console
 
//   // it is for loop
//   for (let index = 0; index < heroes.length; index++) {
//   console.log(heroes[index]); 
//   }

// //   arrays me ziadaa tar for of loop prefere kiya jata h  
// // Define for of loop many easy, for loop and others loop. for of loop me apko length index kuch bh nh baatana hoota h woo khudi kr leeta h 

// //it is for of loop 
// for (const hero of heroes) {
//     console.log(hero);
// }


let cities = ["Karachi" , "Islamabad" , "Multan" , "Peshawar" , "Lahore" , "Quetta" , "K.P.K"] 

for (const city of cities) {
    console.log(city.toUpperCase());
}


// let marksStudent = [85, 97, 44, 37, 76, 60]

// let sum = 0

// for (const val of marksStudent) {
//     // console.log(val);
//     sum = sum + val
//     // console.log(sum);    // agar me for of loop ke andar hi console kr dooga tw wo meri saari values ko add krta jai ga means 85 ko plus kare ga 97 se phr in dono ka ju ans hooga usko teesre se plus kare ga end tak asee hi kare ga 
// }
// console.log(sum);   // aur agar me for of loop k bahir console krta ho tw wo aik hi answer deega mjhe sab ko add krne ke baad.
 
// let aveRage = sum / marksStudent.length    // average bh nikl gai 
// console.log(aveRage);


// let priCes  = [250, 645, 300, 900, 50];

// for (let i = 0; i < priCes.length; i++) {
// //    console.log(priCes);
//     let offer = priCes[i] / 10
// //   console.log(offer);
//   priCes[i] -= offer
 
// }
// console.log(priCes);        //for solving for loop



// let i = 0 

// for (const items of priCes) {
    
//     let offeR = priCes[i] /10
//     // console.log(offeR);
//     priCes[i] -= offeR
//     i++
   
// }
// console.log(priCes);                 //for solving for of loop



// Methods Of an Array :


// Push Method

let foodItems = ["tomato" , "potato" , "orange" , "apple"]
console.log(foodItems);
foodItems.push("frenchfries" , "burger" , "roll")
console.log(foodItems);


foodItems.pop()       // pop appke array ke last me se aik value ko delete kr deeta h aur ye appke original array ke andar hi changes krta h
console.log(foodItems);   

    
//    toString appki form ko change kr deeta h means agar array h tww tostring usse string me convert kr deega toStirng apke original array me change nh krta h balke aik new stirng appko return krta h


let arraY = [123, 456, 789]
console.log(typeof arraY);
console.log(arraY);
console.log(arraY.toString());
// let arraYs = ["hassan", "ahmed"]
// console.log(arraYs.toString());
// console.log(arraYs);



//  Concat its not chnge an original array its return the new result.  & concat work is join 2 or 2 more arrays 

// let marvelHeroes = ["spiderman", "pacman" , "ironman"] 
// let dcHeroes = ["petman" , "tigernal"]
//  let totalHeores = marvelHeroes.concat(dcHeroes)
//  console.log(totalHeores);


// unshift method unshift appke array ke start me add krta h 

// let marvelHeroes = ["spiderman", "pacman" , "ironman"] 
// console.log(marvelHeroes);
// marvelHeroes.unshift("pokeman")
// console.log(marvelHeroes);

//  unshift ki jaagah me shift kr foo twww shift appke array ke start se aik cheez delete kr deega

let marvelHeroes = ["spiderman", "pacman" , "ironman"] 
console.log(marvelHeroes);
marvelHeroes.shift()    // shift se array ka phela name hath jai ga means spiderman delete ho jai ga
console.log(marvelHeroes);