let houseMembers = houseData.results[0].members;
let houseTable = document
  .querySelector("#house-data")
  .getElementsByTagName("tbody")[0];

generateTable(houseMembers, houseTable);

// Function to select table rows containing '<td>x</td>'

function contains(selector, tag) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function(element) {
    return RegExp(tag).test(element.innerHTML);
  });
}

// Assign table rows to party

const republicans = contains("tr", "<td>R</td>");
const democrats = contains("tr", "<td>D</td>");
const independents = contains("tr", "<td>I</td>");

// Show/hide table row when checkbox is checked/unchecked for party

const showRepublican = document.querySelector("#house-republican");
const showDemocrat = document.querySelector("#house-democrat");
const showIndependent = document.querySelector("#house-independent");

function checkboxFilter(checkbox, party) {
  checkbox.addEventListener("change", function(e) {
    for (i = 0; i < party.length; i++) {
      if (checkbox.checked) {
        party[i].style.display = "table-row";
      } else {
        party[i].style.display = "none";
      }
    }
  });
}

checkboxFilter(showRepublican, republicans);
checkboxFilter(showDemocrat, democrats);
checkboxFilter(showIndependent, independents);

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
  document.querySelector("#house-state"),
  document.querySelector("#house-data").getElementsByTagName("tbody")[0]
);
