// Assign HTML table element to senateTable variable

let houseTable = document
  .querySelector("#house-data")
  .getElementsByTagName("tbody")[0];

// Fetch ProPublica data via Ajax call

fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
  headers: new Headers({
    "X-API-Key": "gIe854v6TfYXsKrWmyYXR8INQ1PtTRXwMx0c4Ccy"
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    generateTable(data.results[0].members, houseTable);
  })
  .catch(function(error) {
    console.log("Request failed", error);
  });

// Checkbox Filter

checkboxFilter(
  document.querySelector("#house-republican"),
  document.querySelector("#house-data").getElementsByTagName("tbody")[0]
);
checkboxFilter(
  document.querySelector("#house-democrat"),
  document.querySelector("#house-data").getElementsByTagName("tbody")[0]
);
checkboxFilter(
  document.querySelector("#house-independent"),
  document.querySelector("#house-data").getElementsByTagName("tbody")[0]
);

// Dropdown Filter

dropdownFilter(
  document.querySelector("#house-state"),
  document.querySelector("#house-data").getElementsByTagName("tbody")[0]
);
