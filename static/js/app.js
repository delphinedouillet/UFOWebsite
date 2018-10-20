// from data.js
var tableData = data;

// LEVEL 1

var tbody = d3.select("tbody");

tableData.forEach(function(observation){
 var row = tbody.append("tr");
 var data_formatted = Object.entries(observation);
 data_formatted.forEach(function(row_data){
   row.append("td").text(row_data[1]);
 });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
  d3.event.preventDefault(); 
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  if (inputValue){
  console.log(inputValue);
  var filteredData = data.filter(input => input.datetime === inputValue);
  console.log(filteredData);}
  else{
      console.log("no Date selected")
  }

  //clear tableData
  var Table = document.getElementById("body");
  Table.innerHTML = ""; 

  // insert filtered data
  filteredData.forEach(function(observation){
  var row = tbody.append("tr");
  var data_formatted = Object.entries(observation);
  data_formatted.forEach(function(row_data){
  row.append("td").text(row_data[1]);
    });
   });
});

// LEVEL 2

