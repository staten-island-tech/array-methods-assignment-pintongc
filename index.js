
 const students = [
     {
         firstName: "Jack",
         lastName: "Jack",
         graduated: true,
         grades: [98.2, 78, 50, 90],
         age: 18,
     },
     {
         firstName: "John",
         lastName: "John",
         graduated: false,
         grades: [92.9, 14, 95, 78],
         age: 15,
     },
     {
         firstName: "Mel",
         lastName: "Adam",
         graduated: false,
         grades: [88.5, 95, 83, 69],
         age: 14,
     },
     {
        firstName: "Sara",
        lastName: "Mike",
        graduated: true,
        grades: [78.9, 94, 87, 65],
        age: 18,
    },
    {
        firstName: "Michael",
        lastName: "Austin",
        graduated: true,
        grades: [100, 99, 98, 97],
        age: 18,
    },
    
 ];

students.forEach((students) => console.log(students.firstName));
students.forEach(student => {student.grades.forEach(grade => {console.log(grade)})});
const graduates = students.filter((student) => student.graduated === true);
console.log(graduates);
