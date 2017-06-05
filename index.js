

const R = require('ramda')

//remove last item "rollno"

var student = {
 name : "David Rayy",
 sclass : "VI",
 rollno : 12 }

delete student["rollno"]
console.log(student)

//way 2

// function removeRollNo(obj) {
//   var newStudent = {}
//   newStudent.name = obj.name
//   newStudent.sclass = obj.sclass
//   return newStudent
// }
//
// function removeRollNo2(obj) {
//   var newObj = obj
//   delete newObj.rollno
//   return newObj
// }
//
// //way 3
//
// function removeRollNo3(obj) {
//   R.omit(['rollno'], obj)
// }

const teams = [
  { id: 1, name: "Braves", league: "NL" },
  { id: 2, name: "Yankees", league: "AL" },
  { id: 3, name: "Red Sox", league: "AL" },
  { id: 4, name: "Mariners", league: "AL" },
  { id: 5, name: "Mets", league: "NL" },
  { id: 6, name: "Cubs", league: "NL" }
];

//select first three

function firstThree(teams) {
  return teams.filter(idSelector);
}

function idSelector(team) {
  return team.id <= 3;
}

console.log(firstThree(teams));

//select league

function leagueName (teams) {
  return teams.filter(leagueSelector)
}
 function leagueSelector(team) {
   return team.league === "NL" || "AL"
 }
console.log(leagueName(teams))

//flip keys

const flipKeys = function(team) {
  return R.invertObj(team)
}

console.log(teams.map(flipKeys))
