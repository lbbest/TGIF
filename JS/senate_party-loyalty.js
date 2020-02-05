descTableTenPctLoy(
  allSenateMembers,
  document.querySelector("#senate-least-loyal").getElementsByTagName("tbody")[0]
);

ascTableTenPctLoy(
  allSenateMembers,
  document.querySelector("#senate-most-loyal").getElementsByTagName("tbody")[0]
);

// Insert senate member count data into at a glance table

document.querySelector("#senate-republican-member-count").textContent =
  statistics.Number_of_Republicans_Senate;
document.querySelector("#senate-democrat-member-count").textContent =
  statistics.Number_of_Democrats_Senate;
document.querySelector("#senate-independent-member-count").textContent =
  statistics.Number_of_Independents_Senate;
document.querySelector("#senate-member-count").textContent =
  statistics.Number_of_Independents_Senate +
  statistics.Number_of_Democrats_Senate +
  statistics.Number_of_Republicans_Senate;

// Insert senate % voted with data into at a glance table

document.querySelector(
  "#senate-republican-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Republicans_Senate.toFixed(2);
document.querySelector(
  "#senate-democrat-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Democrats_Senate.toFixed(2);
document.querySelector(
  "#senate-independent-voted-with"
).textContent = statistics.Pct_Voted_With_Party_Independents_Senate.toFixed(2);
document.querySelector("#senate-voted-with").textContent = (
  (statistics.Pct_Voted_With_Party_Independents_Senate +
    statistics.Pct_Voted_With_Party_Democrats_Senate +
    statistics.Pct_Voted_With_Party_Republicans_Senate) /
  3
).toFixed(2);
