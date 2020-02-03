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

// Insert senate member count data into at a glance table

document.querySelector("#senate-republican-member-count").textContent =
  statistics.Number_of_Republicans_Senate;
document.querySelector("#senate-democrat-member-count").textContent =
  statistics.Number_of_Democrats_Senate;
document.querySelector("#senate-independent-member-count").textContent =
  statistics.Number_of_Independents_Senate;

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

// Insert senate % voted with data into at a glance table

console.log(statistics);

document.querySelector(
  "#senate-republican-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Republicans_Senate.toFixed(2);
document.querySelector(
  "#senate-democrat-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Democrats_Senate.toFixed(2);
document.querySelector(
  "#senate-independent-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Independents_Senate.toFixed(2);
