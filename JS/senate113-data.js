let senateMembers = senateData.results[0].members;
let senateTable = document
  .querySelector("#senate-data")
  .getElementsByTagName("tbody")[0];

generateTable(senateMembers, senateTable);
