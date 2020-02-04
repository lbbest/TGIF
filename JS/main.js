// Function for building Congress 113 members - Senate & House

function generateTable(dataSet, table) {
  for (let member in dataSet) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let firstName = dataSet[member].first_name;
    let middleName = dataSet[member].middle_name;
    let lastName = dataSet[member].last_name;
    if (middleName != null) {
      fullName = firstName + " " + middleName + " " + lastName;
    } else {
      fullName = firstName + " " + lastName;
    }
    newCell.innerHTML = `<a href="${dataSet[member].url}" target="_blank">${fullName}</a>`;
    newLink = newCell = newRow.insertCell();
    newCell.textContent = dataSet[member].party;
    newCell = newRow.insertCell();
    newCell.textContent = dataSet[member].state;
    newCell = newRow.insertCell();
    newCell.textContent = dataSet[member].seniority;
    newCell = newRow.insertCell();
    newCell.textContent = dataSet[member].votes_with_party_pct.toFixed(2) + "%";
  }
}
