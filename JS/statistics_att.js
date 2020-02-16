// Set empty arrays holding house/senate party members

let senateDemocrats = [];
let senateRepublicans = [];
let senateIndependents = [];
let houseDemocrats = [];
let houseRepublicans = [];
let houseIndependents = [];

// HOUSE ATTENDANCE

fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
  headers: new Headers({
    "X-API-Key": "gIe854v6TfYXsKrWmyYXR8INQ1PtTRXwMx0c4Ccy"
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Build arrays from data
    buildPartyArr(data.results[0].members, "D", houseDemocrats);
    buildPartyArr(data.results[0].members, "R", houseRepublicans);
    buildPartyArr(data.results[0].members, "I", houseIndependents);

    // House at a glance: Insert member counts
    document.querySelector("#house-republican-member-count").textContent =
      houseRepublicans.length;
    document.querySelector("#house-democrat-member-count").textContent =
      houseDemocrats.length;
    document.querySelector("#house-independent-member-count").textContent =
      houseIndependents.length;
    document.querySelector("#house-member-count").textContent =
      houseIndependents.length +
      houseDemocrats.length +
      houseRepublicans.length;

    // House at a glance: Insert avg voted with
    document.querySelector(
      "#house-republican-voted-with"
    ).textContent = avgVoteWith(houseRepublicans).toFixed(2);
    document.querySelector(
      "#house-democrat-voted-with"
    ).textContent = avgVoteWith(houseDemocrats).toFixed(2);
    document.querySelector("#house-independent-voted-with").textContent = "N/A";
    document.querySelector(
      "#house-voted-with"
    ).textContent /*avgVoteWith(houseIndependents) +*/ = (
      (avgVoteWith(houseDemocrats) + avgVoteWith(houseRepublicans)) /
      2
    ).toFixed(2);

    // Initialise allHouseMembers
    let allHouseMembers = Array.prototype.concat.apply(
      [],
      [houseDemocrats, houseRepublicans, houseIndependents]
    );

    // Build 10% tables
    descTableTenPctAtt(
      allHouseMembers,
      document
        .querySelector("#house-least-attendance")
        .getElementsByTagName("tbody")[0]
    );

    ascTableTenPctAtt(
      allHouseMembers,
      document
        .querySelector("#house-most-attendance")
        .getElementsByTagName("tbody")[0]
    );
  })
  .catch(function(error) {
    console.log("Request failed", error);
  });

// SENATE ATTENDANCE

fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
  headers: new Headers({
    "X-API-Key": "gIe854v6TfYXsKrWmyYXR8INQ1PtTRXwMx0c4Ccy"
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Build arrays from data
    buildPartyArr(data.results[0].members, "D", senateDemocrats);
    buildPartyArr(data.results[0].members, "R", senateRepublicans);
    buildPartyArr(data.results[0].members, "I", senateIndependents);

    // Senate at a glance: Insert member counts
    document.querySelector("#senate-republican-member-count").textContent =
      senateRepublicans.length;
    document.querySelector("#senate-democrat-member-count").textContent =
      senateDemocrats.length;
    document.querySelector("#senate-independent-member-count").textContent =
      senateIndependents.length;
    document.querySelector("#senate-member-count").textContent =
      senateIndependents.length +
      senateDemocrats.length +
      senateRepublicans.length;

    // Senate at a glance: Insert avg voted with
    document.querySelector(
      "#senate-republican-voted-with"
    ).textContent = avgVoteWith(senateRepublicans).toFixed(2);
    document.querySelector(
      "#senate-democrat-voted-with"
    ).textContent = avgVoteWith(senateDemocrats).toFixed(2);
    document.querySelector(
      "#senate-independent-voted-with"
    ).textContent = avgVoteWith(senateIndependents).toFixed(2);
    document.querySelector("#senate-voted-with").textContent = (
      (avgVoteWith(senateRepublicans) +
        avgVoteWith(senateDemocrats) +
        avgVoteWith(senateIndependents)) /
      3
    ).toFixed(2);

    // Initialise allSenateMembers
    let allSenateMembers = Array.prototype.concat.apply(
      [],
      [senateDemocrats, senateRepublicans, senateIndependents]
    );

    // Build 10% tables
    descTableTenPctAtt(
      allSenateMembers,
      document
        .querySelector("#senate-least-attendance")
        .getElementsByTagName("tbody")[0]
    );

    ascTableTenPctAtt(
      allSenateMembers,
      document
        .querySelector("#senate-most-attendance")
        .getElementsByTagName("tbody")[0]
    );
  })
  .catch(function(error) {
    console.log("Request failed", error);
  });
