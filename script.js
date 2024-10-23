/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee, index) => {
		if(employee.profession === "developer") {
		  console.log(employee);
		}
	})
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee, index) => {
	  if(employee.profession === "developer"){
		console.log(employee);
	  }
	})
}

function addData() {
  //Write your code here, just console.log
  arr.push({id: 4, name: "Biswo", age: 23, profession: "developer"});
	console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter((employee) => (employee.profession !== "admin"));
	console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
	  { id: 4, name: "Arun", age: "28", profession: "hr" },
	  { id: 5, name: "Amar", age: "23", profession: "data analyst" },
	  { id: 6, name: "Shaban", age: "29", profession: "developer" },
	];
  
	let concatenatedArr = arr.concat(newArr);
	console.log(concatenatedArr);
}
