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

// Insert house member count data into at a glance table

document.querySelector("#house-republican-member-count").textContent =
  statistics.Number_of_Republicans_House;
document.querySelector("#house-democrat-member-count").textContent =
  statistics.Number_of_Democrats_House;
document.querySelector("#house-independent-member-count").textContent =
  statistics.Number_of_Independents_House;
document.querySelector("#house-member-count").textContent =
  statistics.Number_of_Independents_House +
  statistics.Number_of_Democrats_House +
  statistics.Number_of_Republicans_House;

// Insert house % voted with data into at a glance table

document.querySelector(
  "#house-republican-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Republicans_House.toFixed(2);
document.querySelector(
  "#house-democrat-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Democrats_House.toFixed(2);
document.querySelector(
  "#house-independent-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Independents_House.toFixed(2);
document.querySelector(
  "#house-voted-with"
).textContent /*statistics.Pct_Voted_With_Party_Independents_House +*/ = (
  (statistics.Pct_Voted_With_Party_Democrats_House +
    statistics.Pct_Voted_With_Party_Republicans_House) /
  2
).toFixed(2);
