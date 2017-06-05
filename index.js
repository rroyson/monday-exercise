

const R = require('ramda')

const teams = [
  { id: 1, name: "Braves", league: "NL" },
  { id: 2, name: "Yankees", league: "AL" },
  { id: 3, name: "Red Sox", league: "AL" },
  { id: 4, name: "Mariners", league: "AL" },
  { id: 5, name: "Mets", league: "NL" },
  { id: 6, name: "Cubs", league: "NL" }
];

function firstThree(teams) {
  return teams.filter(idSelector);
}

function idSelector(team) {
  return team.id <= 3;
}

function leagueName (teams) {
  return teams.filter(leagueSelector)
}
 function leagueSelector(team) {
   return team.league === "NL" || "AL"
 }

const flipKeys = function(team) {
  return R.invertObj(team)
}




console.log(firstThree(teams));
console.log(leagueName(teams))
console.log(teams.map(flipKeys))
