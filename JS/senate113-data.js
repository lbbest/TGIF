// Assign HTML table element to senateTable variable

let senateTable = document
  .querySelector("#senate-data")
  .getElementsByTagName("tbody")[0];

// Fetch ProPublica data via Ajax call

fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
  headers: new Headers({
    "X-API-Key": "gIe854v6TfYXsKrWmyYXR8INQ1PtTRXwMx0c4Ccy"
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    generateTable(data.results[0].members, senateTable);
  })
  .catch(function(error) {
    console.log("Request failed", error);
  });

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

checkboxFilter(
  document.querySelector("#senate-republican"),
  document.querySelector("#senate-data").getElementsByTagName("tbody")[0]
);
checkboxFilter(
  document.querySelector("#senate-democrat"),
  document.querySelector("#senate-data").getElementsByTagName("tbody")[0]
);
checkboxFilter(
  document.querySelector("#senate-independent"),
  document.querySelector("#senate-data").getElementsByTagName("tbody")[0]
);

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

dropdownFilter(
  document.querySelector("#senate-state"),
  document.querySelector("#senate-data").getElementsByTagName("tbody")[0]
);
