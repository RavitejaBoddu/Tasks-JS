/*   *********** Using XMLHttpRequest ***************   */

const xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    //parse JSON data
    data = JSON.parse(xhr.responseText);
    // console.log(data);

    let table = document.querySelector("table");
    let tabledata = Object.keys(data[0]);
    generateTableHead(table, tabledata);
    generateTable(table, data);
  } else if (xhr.status === 404) {
    console.log("No records found");
  }
};

xhr.onerror = function () {
  console.log("Network error occurred");
};

xhr.open("GET", "https://fakestoreapi.com/products/");

xhr.send();

/*   *********** Using Fetch *******************   */

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data[0])
//     let table = document.querySelector("table");

//     let tdata = Object.keys(data[0]);
//     generateTableHead(table, tdata);
//     generateTable(table, data);
//   }).catch((err)=>{
//     console.log(err);
//   });

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
