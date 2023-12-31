
// const inventors = [
// {first: "name", last: "lastname", year: 1475, passed: 1545},
// {first: "nameagain", last: "lastagain", year: 1571, passed: 1630},
// {first: "bob", last: "barker", year: 1200, passed: 1500},
// {first: "janet", last: "king", year: 1500, passed: 1600},
// {first: "greg", last: "olsen", year: 1600, passed: 1700},
// {first: "kevin", last: "bacon", year: 1800, passed: 1947},


// ];


// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
// console.table(fifteen);




// const map1 = inventors.map((inventor) => inventor.first + " " + inventor.last);
// console.table(map1);




// const sortedNames = inventors.sort((a,b) => a.year < b.year ? 1 : -1);

// console.table(sortedNames);

const allAnimals = {
    hasEyes: true,
    alert: function () {
        console.log("We all have eyes");
    }
}


const mammal = {
    hasHair : true,
    isWarmBlooded : true,
    talk: function () {
        console.log("I am warm blooded");
    }
}

const amphibian = {
    hasHair: false,
    isColdBlooded : true,
    livesLandAndWater: true,
    talk: function() {
        console.log("I am cold blooded");
    }
}

const vertebrate = {
    hasBackbone : true,
    talk : function() {
        console.log("I have a backbone");
    }
}






const animals = [

    {name : "bear", type : "mammal", id: 0,},
    {name: "frog", type: "amphibian", id: 1,},
    {name : "dog", type : "mammal",id: 2,},
    {name: "salamander", type: "amphibian",id: 3,},
    {name : "cat", type : "mammal",id: 4,},
    {name : "koala", type : "mammal",id: 5,},
    {name: "seahorse", type : "vertebrates",id: 6,},
    {name: "eagle", type : "bird",id: 7,},

];





// const mammals = animals.filter((animals) => animals.type == "mammal");
// console.table(Object.setPrototypeOf(mammals, mammal));
// mammal.talk();

// const amphibians = animals.filter((animals) => animals.type == "amphibian");
// console.table(Object.setPrototypeOf(amphibians, amphibian));
// amphibian.talk();

// const vertebrates = animals.filter((animals) => animals.type == "vertebrates");
// console.table(Object.setPrototypeOf(vertebrates, vertebrate));
// vertebrate.talk();


// console.table(Object.setPrototypeOf(animals, allAnimals));





//create h2 heading for the main title and assign it the text Animals Table
const heading = document.querySelector("h2");
heading.innerHTML = "Animals Table";



//for loop that loops through animals array to create table rows and data and display it in the browswer via the dom
for(let i = 0; i < 8; i++) {
    
    let table = document.querySelector("table");

    let newRow = document.createElement("tr");
    table.appendChild(newRow);
    let itemName = document.createElement("td");
    newRow.appendChild(itemName);
    itemName.classList.add("itemName");


    table.appendChild(newRow);
    let itemType = document.createElement("td");
    newRow.appendChild(itemType);
    itemType.classList.add("itemType");


    let idRow = document.createElement("td");
    newRow.appendChild(idRow);
   
    
    itemName.innerHTML = animals[i].name;
    itemType.innerHTML = animals[i].type;
    idRow.innerHTML = animals[i].id;
    

 
};


//assigning variables to the input fields and the submit and cancel button when adding an animal
let nameField = document.querySelector("#nameField");
let typeField = document.querySelector("#typeField");
let subBtn = document.getElementById("subBtn");
let cancelBtn = document.getElementById("cancelBtn");
let button = document.getElementById("addBtn");


//click event listener to listen to click of the add animal button, then displays and hides the appropriate buttons
button.addEventListener("click", () => {


nameField.style.display = "inline-block";
typeField.style.display = "inline-block";
button.style.display = "none";
subBtn.style.display = "inline-block";
cancelBtn.style.display = "inline-block";




});


//click event listener to listen to click of the submit button(after clicking add animal button), assigning name and type variables to the value in
//the input fields displayed for animal name and animal type
subBtn.addEventListener("click", () => {


    
name = nameField.value;
type = typeField.value;


//for loop assigns the variable i a number and increments everytime a new animal is added,
for(let i = 0; i < animals.length; i++) {
    id = i;
};

id++;


//add new name, and type data from users input and pushes it to end of animals array as an object with 3 paramaters
animals.push({name: name, type: type, id: id});
console.log(animals);



let table = document.querySelector("table");
let row = document.createElement("tr");
table.appendChild(row);


let dataName = document.createElement("td");
let dataType = document.createElement("td");
let idNum = document.createElement("td");


dataName.classList.add("itemName");
dataType.classList.add("itemType");


dataName.innerHTML = name;
dataType.innerHTML = type;
idNum.innerHTML = id;


row.appendChild(dataName);
row.appendChild(dataType);
row.appendChild(idNum);


nameField.value = ' ';
typeField.value = ' ';



subBtn.style.display = "none";
button.style.display = "inline-block";
nameField.style.display = "none";
typeField.style.display = "none";
cancelBtn.style.display = "none";



});

cancelBtn.addEventListener("click", () => {

subBtn.style.display = "none";
button.style.display = "inline-block";
nameField.style.display = "none";
typeField.style.display = "none";
cancelBtn.style.display = "none";

})


