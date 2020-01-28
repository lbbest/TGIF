let senateTable = document
  .querySelector("#senate-data")
  .getElementsByTagName("tbody")[0];
let members = data.results[0].members;

for (i = 0; i < members.length; i++) {
  let newRow = senateTable.insertRow();
  let newCell = newRow.insertCell();
  let firstName = members[i].first_name;
  let middleName = members[i].middle_name;
  let lastName = members[i].last_name;
  let fullName;
  if (middleName != null) {
    fullName = firstName + " " + middleName + " " + lastName;
  } else {
    fullName = firstName + " " + lastName;
  }
  newCell.textContent = fullName;
  let party = members[i].party;
  newCell = newRow.insertCell();
  newCell.textContent = party;
  let state = members[i].state;
  newCell = newRow.insertCell();
  newCell.textContent = state;
  let seniority = members[i].seniority;
  newCell = newRow.insertCell();
  newCell.textContent = seniority;
  let votesWith = members[i].votes_with_party_pct.toFixed(2) + "%";
  newCell = newRow.insertCell();
  newCell.textContent = votesWith;
}
