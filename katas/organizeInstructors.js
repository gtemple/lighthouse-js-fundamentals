const organizeInstructors = function(instructors) {
  let faculty = {};

  for (let i = 0; i < instructors.length; i++) {
    if (faculty[instructors[i].course]) {
      faculty[instructors[i].course].push(instructors[i].name);
    } else {
      faculty[instructors[i].course] = [];
      faculty[instructors[i].course].push(instructors[i].name);
    }
  }

  return faculty;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
