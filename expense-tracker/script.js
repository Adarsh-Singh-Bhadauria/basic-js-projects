let expenseForm = document.getElementById("expenseForm");
let tableBody = document.getElementById("tableBody");

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let amount = document.getElementById("amount").value;

  if(description && category && !isNaN(amount)){
    let row = document.createElement("tr");
    row.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`
    tableBody.appendChild(row);

    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  }
  else{
    alert("Enter valid values!");
  }
})