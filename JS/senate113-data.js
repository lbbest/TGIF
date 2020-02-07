let senateMembers = senateData.results[0].members;
let senateTable = document
  .querySelector("#senate-data")
  .getElementsByTagName("tbody")[0];

generateTable(senateMembers, senateTable);

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

const showRepublican = document.querySelector("#senate-republican");
const showDemocrat = document.querySelector("#senate-democrat");
const showIndependent = document.querySelector("#senate-independent");

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
