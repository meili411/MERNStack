// 1. How to preserve the immutability on my heroes list? Solve below problems using the same

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. Get heroes who are not evils
console.log("a")
let notEvils = heroes.filter(person=>person.isEvil===false)
console.log(notEvils)

// b. Print Unique family names
console.log("b")
const uniqueName = [...new Set(heroes.map(person => person.family))];
console.log(uniqueName)

// c. Print Hero Names from given objects, and append sir in each of them before printing
console.log("c")

let addSir = heroes.map((person)=>{
    return {
        "New Name" : "Sir " + person.name
        //"Actual name" : person.name
    }
})
console.log(addSir)

// d. Do we have any hero in Marvel Family who is not evil
// let marvelNotEvil = heroes.some(person=>person.family==="Marvel" && person.isEvil===false)
// console.log(marvelNotEvil)
console.log("d")
let marvelNotEvil1 = heroes.map((person)=>{
    if(person.family==="Marvel" && person.isEvil===false){
        return {
            "Name" : person.name,
            "Family" : person.family,
            "is Evil?" : person.isEvil
        }
    }else{
        return ''
    }
}).filter((h)=>h!='')
console.log(marvelNotEvil1)


//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
        
    let daysMap = new Map();
    daysMap.set('1', 'Monday');
    daysMap.set('2', 'Tuesday');
    daysMap.set('3', 'Wednesday');
    console.log(daysMap.get('2'));
    console.log(daysMap.entries());
    console.log(daysMap.has('1'));
    console.log(daysMap.size);
    console.log(daysMap.clear())
    console.log(daysMap.size);

    let colorSet = new Set(["Blue", "Yellow", "Green", "Red"]);
    console.log(colorSet.delete("Green"))
    console.log(colorSet.values())
    console.log(colorSet.clear())
    console.log(colorSet.add("Purple"))
    console.log(colorSet.values())


//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let homeworkPromise = new Promise((resolve, reject)=>{

    setTimeout(()=> {
        resolve({
            "status" : "finished homework",
            "msg" : "done homework",
            "code" : 100
        }, 2000);
    })
    setTimeout(()=> {
        reject({
            "status" : "I'm working",
            "msg" : "still doing homework",
            "code" : 200
        }, 3000);
    })
})
// homeworkPromise
// .then((data)=>{console.log("promise after resolve", JSON.stringify(data))})
// .catch((error)=>{console.log("catching the error", err)})


//4. Using the promise object at #3 create an async and await feature
function homeworkAfter2sec(){
    return homeworkPromise;
}

console.log("Before async execution")

async function asyncPromise(){
    console.log("Before await")

    await homeworkAfter2sec()
        .then(data1=>console.log("Await data then ", data1))
        .catch(err1=>console.log("Await data catch", err1))
    
    console.log("After await")
}
asyncPromise();
console.log("After async execution")


//5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
let arr = [];
function array1(start, end){
    for(var i = start; i <= end; i++){
        arr.push(i);
    }
    return arr
}
var result = array1(1, 3);
console.log(result);

function largeMult(...numbers){
    let mult;
    mult = numbers.reduce(function(prevVal, currVal){
        //console.log(prevVal, currVal)
        return prevVal * currVal
    }, 1)
    return mult;
}
console.log(largeMult(...result))

let arrayStudent = ["Danny", "Jasmine", "Joon", "Malav", "Mike", "Mueen", "Xiaoyi", "Mei"];
console.log(largeMult(...arrayStudent))
// console.log(...arrayStudent)


//6. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

const {userDetails: {last, contactNumber = 9119119110}} = person;
console.log(last, contactNumber)


//7. Give me an example of const data manipulation
const ex = {x:30, y:60};
// const ex = (z:10);
ex.x=10;
ex.y=20;
console.log(ex)


//8. What is the difference between for-of and for-in show with examples
let colorArray = ["red", "green", "blue"];

// Iterate over the property value
for (const color of colorArray){
    console.log(" " + color)
}

// Iterate over the property name
for (const color in colorArray){
    console.log(" " + color)
}


//9. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded
let signin = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve({
    //         "status" : 100,
    //         "msg" : "Signed in"
    //     })
    // },1000);

    setTimeout(()=>{
        reject({
            "status" : 300,
            "msg" : "Can't sign in"
        })
    },1000);
})

let userregistration = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            "status" : 200,
            "msg" : "Registration"
        })
    },2000);
})

let nextpageToNavigate = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve({
    //         "status" : 400,
    //         "msg" : "Next page"
    //     })
    // },3000);

    setTimeout(()=>{
        reject({
            "status" : 500,
            "msg" : "Error: next page"
        })
    },3000);
})

Promise.all(
    [signin, userregistration, nextpageToNavigate]
).then((data2)=>{
    console.log("then", data2)
}).catch((err2)=>{
    console.log("catch", err2)
}).finally((err3)=>{
    console.log("finally", err3)
})


//10. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios

Promise.allSettled(
    [signin, userregistration, nextpageToNavigate]
).then((data3)=>{
    console.log("then", data3)
}).catch((err4)=>{
    console.log("catch", err4)
}).finally((err5)=>{
    console.log("finally", err5)
})