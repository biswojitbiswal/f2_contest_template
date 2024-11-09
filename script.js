/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
    }
  });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee => {
    if(employee.profession === "developer"){
      console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
    }
  }))
  
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id: 4, name: "Neel", age: "27", profession: "Engineer" };
  arr.push(newEmployee);
  
  arr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
  
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => {
    return employee.profession !== "admin";
  })

  arr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "alice", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "23", profession: "designer" },
    { id: 7, name: "charlie", age: "24", profession: "manager" },
  ]

  const concatenateArr = arr.concat(newArr);

  concatenateArr.forEach((employee) => {
    console.log(`id : ${employee.id}, Name : ${employee.name}, Age : ${employee.age}, Profession : ${employee.profession}`);
  })

}
