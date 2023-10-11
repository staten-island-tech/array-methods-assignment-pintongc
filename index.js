
 const students = [
     {
         firstName: "Jack",
         lastName: "Jack",
         graduated: true,
         grade: 98.2,
         age: 18,
     },
     {
         firstName: "John",
         lastName: "John",
         graduated: false,
         grade: 92.9,
         age: 15,
     },
     {
         firstName: "Mel",
         lastName: "Adam",
         graduated: false,
         grade: 88.5,
         age: 14,
     },
     {
        firstName: "Sara",
        lastName: "Mike",
        graduated: true,
        grade: 78.9,
        age: 18,
    },
    {
        firstName: "Michael",
        lastName: "Austin",
        graduated: true,
        grade: 100,
        age: 18,
    },
    
 ];

students.forEach((students) => console.log(students.firstName));
students.forEach((students) => console.log(students.grade));
const graduates = students.filter((student) => student.graduated === true);
console.log(graduates);
