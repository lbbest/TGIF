// Set empty arrays holding house/senate party members

let senateDemocrats = [];
let senateRepublicans = [];
let senateIndependents = [];
let houseDemocrats = [];
let houseRepublicans = [];
let houseIndependents = [];

// Build array containing party/house member data

function buildPartyArr(dataSource, party, outputObj) {
  let j = 0;
  for (i = 0; i < dataSource.length; i++)
    if (dataSource[i].party == party) {
      outputObj[j] = dataSource[i];
      j++;
    }
}

buildPartyArr(senateData.results[0].members, "D", senateDemocrats);
buildPartyArr(senateData.results[0].members, "R", senateRepublicans);
buildPartyArr(senateData.results[0].members, "I", senateIndependents);
buildPartyArr(houseData.results[0].members, "D", houseDemocrats);
buildPartyArr(houseData.results[0].members, "R", houseRepublicans);
buildPartyArr(houseData.results[0].members, "I", houseIndependents);

// Build arrays containing all members of particular chamber

let allSenateMembers = Array.prototype.concat.apply(
  [],
  [senateDemocrats, senateRepublicans, senateIndependents]
);

let allHouseMembers = Array.prototype.concat.apply(
  [],
  [houseDemocrats, houseRepublicans, houseIndependents]
);

// Initialise statistics object

let statistics = {
  Number_of_Democrats_Senate: 0,
  Number_of_Democrats_House: 0,
  Number_of_Republicans_Senate: 0,
  Number_of_Republicans_House: 0,
  Number_of_Independents_Senate: 0,
  Number_of_Independents_House: 0,
  Pct_Voted_With_Party_Democrats_Senate: 0,
  Pct_Voted_With_Party_Democrats_House: 0,
  Pct_Voted_With_Party_Republicans_Senate: 0,
  Pct_Voted_With_Party_Republicans_House: 0,
  Pct_Voted_With_Party_Independents_Senate: 0,
  Pct_Voted_With_Party_Independents_House: 0
};

// Set object values for number of party/house members

statistics.Number_of_Democrats_Senate = senateDemocrats.length;
statistics.Number_of_Republicans_Senate = senateRepublicans.length;
statistics.Number_of_Independents_Senate = senateIndependents.length;
statistics.Number_of_Democrats_House = houseDemocrats.length;
statistics.Number_of_Republicans_House = houseRepublicans.length;
statistics.Number_of_Independents_House = houseIndependents.length;

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

// Set object values for senate % voted with

statistics.Pct_Voted_With_Party_Democrats_Senate = avgVoteWith(senateDemocrats);
statistics.Pct_Voted_With_Party_Republicans_Senate = avgVoteWith(
  senateRepublicans
);
statistics.Pct_Voted_With_Party_Independents_Senate = avgVoteWith(
  senateIndependents
);
statistics.Pct_Voted_With_Party_Democrats_House = avgVoteWith(houseDemocrats);
statistics.Pct_Voted_With_Party_Republicans_House = avgVoteWith(
  houseRepublicans
);
statistics.Pct_Voted_With_Party_Independents_House =
  avgVoteWith(houseIndependents) || 0;

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
