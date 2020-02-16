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

// Checkbox Filter

function checkboxFilter(checkbox, table) {
  let rows = table.getElementsByTagName("tr");
  checkbox.addEventListener("change", function(e) {
    let filter = checkbox.value;
    for (i = 0; i < rows.length; i++) {
      let cells = rows[i].cells;
      let party = cells[1] || null;
      if (checkbox.checked && filter == party.textContent) {
        party.parentElement.style.display = "table-row";
      } else if (checkbox.checked == false && filter == party.textContent) {
        party.parentElement.style.display = "none";
      }
    }
  });
}

// Dropdown Filter

function dropdownFilter(dropdown, table) {
  let rows = table.getElementsByTagName("tr");
  dropdown.addEventListener("change", function(e) {
    let filter = dropdown.value;
    for (i = 0; i < rows.length; i++) {
      let cells = rows[i].cells;
      let state = cells[2] || null;
      if (filter == "All" || filter == state.textContent) {
        state.parentElement.style.display = "";
      } else {
        state.parentElement.style.display = "none";
      }
    }
  });
}

// Build statistic arrays

function buildPartyArr(dataSource, party, outputObj) {
  let j = 0;
  for (i = 0; i < dataSource.length; i++)
    if (dataSource[i].party == party) {
      outputObj[j] = dataSource[i];
      j++;
    }
}

// Calculate average vote with percentage

function avgVoteWith(dataSource) {
  let total = 0;
  let average = 0;
  for (i = 0; i < dataSource.length; i++) {
    total += dataSource[i].votes_with_party_pct;
  }
  average = total / i;
  return average;
}

// Calculate least engaged (Bottom 10% Attendance) and build table

function descTableTenPctAtt(arr, table) {
  arr.sort(function(obj1, obj2) {
    return obj2.missed_votes_pct - obj1.missed_votes_pct;
  });
  for (i = 0; i < arr.length * 0.1; i++) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let firstName = arr[i].first_name;
    let middleName = arr[i].middle_name;
    let lastName = arr[i].last_name;
    if (middleName != null) {
      fullName = firstName + " " + middleName + " " + lastName;
    } else {
      fullName = firstName + " " + lastName;
    }
    newCell.innerHTML = `<a href="${arr[i].url}" target="_blank">${fullName}</a>`;
    newLink = newCell = newRow.insertCell();
    newCell.textContent = arr[i].missed_votes;
    newCell = newRow.insertCell();
    newCell.textContent = arr[i].missed_votes_pct.toFixed(2);
  }
}

// Calculate most engaged (Top 10% Attendance) and build table

function ascTableTenPctAtt(arr, table) {
  arr.sort(function(obj1, obj2) {
    return obj1.missed_votes_pct - obj2.missed_votes_pct;
  });
  for (i = 0; i < arr.length * 0.1; i++) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let firstName = arr[i].first_name;
    let middleName = arr[i].middle_name;
    let lastName = arr[i].last_name;
    if (middleName != null) {
      fullName = firstName + " " + middleName + " " + lastName;
    } else {
      fullName = firstName + " " + lastName;
    }
    newCell.innerHTML = `<a href="${arr[i].url}" target="_blank">${fullName}</a>`;
    newLink = newCell = newRow.insertCell();
    newCell.textContent = arr[i].missed_votes;
    newCell = newRow.insertCell();
    newCell.textContent = arr[i].missed_votes_pct.toFixed(2);
  }
}

// Calculate least loyal (Bottom 10% Loyalty) and build table

function descTableTenPctLoy(arr, table) {
  arr.sort(function(obj1, obj2) {
    return obj1.votes_with_party_pct - obj2.votes_with_party_pct;
  });
  for (i = 0; i < arr.length * 0.1; i++) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let firstName = arr[i].first_name;
    let middleName = arr[i].middle_name;
    let lastName = arr[i].last_name;
    if (middleName != null) {
      fullName = firstName + " " + middleName + " " + lastName;
    } else {
      fullName = firstName + " " + lastName;
    }
    newCell.innerHTML = `<a href="${arr[i].url}" target="_blank">${fullName}</a>`;
    newLink = newCell = newRow.insertCell();
    newCell.textContent = (
      arr[i].total_votes *
      (arr[i].votes_with_party_pct / 100)
    ).toFixed(0);
    newCell = newRow.insertCell();
    newCell.textContent = arr[i].votes_with_party_pct.toFixed(2);
  }
}

// Calculate most loyal (Top 10% Loyalty) and build table

function ascTableTenPctLoy(arr, table) {
  arr.sort(function(obj1, obj2) {
    return obj2.votes_with_party_pct - obj1.votes_with_party_pct;
  });
  for (i = 0; i < arr.length * 0.1; i++) {
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let firstName = arr[i].first_name;
    let middleName = arr[i].middle_name;
    let lastName = arr[i].last_name;
    if (middleName != null) {
      fullName = firstName + " " + middleName + " " + lastName;
    } else {
      fullName = firstName + " " + lastName;
    }
    newCell.innerHTML = `<a href="${arr[i].url}" target="_blank">${fullName}</a>`;
    newLink = newCell = newRow.insertCell();
    newCell.textContent = (
      arr[i].total_votes *
      (arr[i].votes_with_party_pct / 100)
    ).toFixed(0);
    newCell = newRow.insertCell();
    newCell.textContent = arr[i].votes_with_party_pct.toFixed(2);
  }
}
