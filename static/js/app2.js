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
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#State").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  if (inputDate){
    var filteredData = data.filter(input => input.datetime === inputDate);
    console.log(filteredData);
  }
  else if (inputCity){
    var filteredData = data.filter(input => input.city === inputCity);
    console.log(filteredData);
  }
  else if (inputState){
    var filteredData = data.filter(input => input.state === inputState);
    console.log(filteredData);
  }
  else if (inputCountry){
    var filteredData = data.filter(input => input.country === inputCountry);
    console.log(filteredData);
  }
  else if (inputShape) {
    var filteredData = data.filter(input => input.shape === inputShape);
    console.log(filteredData);
  }
  else{
      console.log("no input")
  }

  console.log(filteredData);

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



