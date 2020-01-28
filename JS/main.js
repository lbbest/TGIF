let senateTable = document.querySelector("#senate-data");
let members = data.results[0].members;

for (i = 0; i < members.length; i++) {
  let firstName = members[i].first_name;
  let middleName = members[i].middle_name;
  let lastName = members[i].last_name;
  let fullName;
  if (middleName != null) {
    fullName = firstName + " " + middleName + " " + lastName;
  } else {
    fullName = firstName + " " + lastName;
  }
  console.log(fullName);
  let party = members[i].party;
  console.log(party);
  let state = members[i].state;
  console.log(state);
  let seniority = members[i].seniority;
  console.log(seniority);
  let votesWith = members[i].votes_with_party_pct + "%";
  console.log(votesWith);
}
