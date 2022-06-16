/*   *********** Using XMLHttpRequest ***************   */

const xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);

    let tableData = "";
    data.map((values) => {
      tableData += `
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price} $</td>
            <td><img src="${values.image} /></td>
            <td>${values.rating.rate}</td>
        </tr>
      `;
    });

    let table = document.getElementById("tableBody");
    table.innerHTML = tableData;
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
// let tableData = "";
// data.map((values) => {
//   tableData += `
//     <tr>
//         <td>${values.title}</td>
//         <td>${values.description}</td>
//         <td>${values.price} $</td>
//         <td><img src="${values.image} /></td>
//         <td>${values.rating.rate}</td>
//     </tr>
//   `;

// });

// let table = document.getElementById("tableBody");
// table.innerHTML = tableData;
//   }).catch((err)=>{
//     console.log(err);
//   });
