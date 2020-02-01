let houseMembers = houseData.results[0].members;
let houseTable = document
  .querySelector("#house-data")
  .getElementsByTagName("tbody")[0];

generateTable(houseMembers, houseTable);
