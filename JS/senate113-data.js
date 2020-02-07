let senateMembers = senateData.results[0].members;
let senateTable = document
  .querySelector("#senate-data")
  .getElementsByTagName("tbody")[0];

generateTable(senateMembers, senateTable);

// Function to select table rows containing 'x'

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function(element) {
    return RegExp(text).test(element.textContent);
  });
}

// Assign table rows to party

let republicans = contains("tr", "R");

// Show/hide table row when checkbox is checked/unchecked

const showRepublican = document.querySelector("#senate-republican");
showRepublican.addEventListener("change", function(e) {
  for (i = 0; i < republicans.length; i++) {
    if (showRepublican.checked) {
      republicans[i].style.display = "table-row";
    } else {
      republicans[i].style.display = "none";
    }
  }
});
