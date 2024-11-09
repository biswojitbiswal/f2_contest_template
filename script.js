/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
<<<<<<< HEAD
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
    }
  });
=======
  arr.map((employee, index) => {
		if(employee.profession === "developer") {
		  console.log(employee);
		}
	})
>>>>>>> 39e9a885b745d7b06985843567a4b1d52efcff80
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
<<<<<<< HEAD
  arr.forEach((employee => {
    if(employee.profession === "developer"){
      console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
    }
  }))
=======
  arr.forEach((employee, index) => {
	  if(employee.profession === "developer"){
		console.log(employee);
	  }
	})
>>>>>>> 39e9a885b745d7b06985843567a4b1d52efcff80
}

function addData() {
  //Write your code here, just console.log
<<<<<<< HEAD
  const newEmployee = {id: 4, name: "Neel", age: "27", profession: "Engineer" };
  arr.push(newEmployee);
  
  arr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
=======
  arr.push({id: 4, name: "Biswo", age: 23, profession: "developer"});
	console.log(arr);
>>>>>>> 39e9a885b745d7b06985843567a4b1d52efcff80
}

function removeAdmin() {
  //Write your code here, just console.log
<<<<<<< HEAD
  arr = arr.filter((employee) => {
    return employee.profession !== "admin";
  })

  arr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
=======
  let filteredArr = arr.filter((employee) => (employee.profession !== "admin"));
	console.log(filteredArr);
>>>>>>> 39e9a885b745d7b06985843567a4b1d52efcff80
}

function concatenateArray() {
  //Write your code here, just console.log
<<<<<<< HEAD
  const newArr = [
    { id: 5, name: "alice", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "23", profession: "designer" },
    { id: 7, name: "charlie", age: "24", profession: "manager" },
  ]

  const concatenateArr = arr.concat(newArr);

  concatenateArr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
=======
  let newArr = [
	  { id: 4, name: "Arun", age: "28", profession: "hr" },
	  { id: 5, name: "Amar", age: "23", profession: "data analyst" },
	  { id: 6, name: "Shaban", age: "29", profession: "developer" },
	];
  
	let concatenatedArr = arr.concat(newArr);
	console.log(concatenatedArr);
>>>>>>> 39e9a885b745d7b06985843567a4b1d52efcff80
}
