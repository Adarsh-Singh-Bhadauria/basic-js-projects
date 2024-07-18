let write = document.getElementById("write");
let list = document.getElementById("list");

write.addEventListener("keyup", (e) =>{
  if (e.key === "Enter"){
    addTodo(e.target.value);
    e.target.value = "";
  }
})

function addTodo(value){
  let item = document.createElement("li");
  item.innerHTML = `${value}`;
  list.appendChild(item);

  item.addEventListener("click", (e) => {
    e.target.classList.toggle("done");
  })
}