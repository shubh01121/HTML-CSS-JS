document.querySelector("#createList").addEventListener("click", createList);
document.querySelector(".close").addEventListener("click", hideListForm);
document.querySelector("#addList").addEventListener("click", createCard);

let cards = [];
function createList() {
  document.querySelector("#listForm").style.visibility = "visible";
  console.log("List Created");
}

function hideListForm() {
  document.querySelector("#listForm").style.visibility = "hidden";
  console.log("Hide List Form Executed");
}

function createCard() {
  console.log("New");
  document.querySelector("#listForm").style.visibility = "hidden";
  let userInput = document.querySelector("#listName").value;
  console.log("Card is being created");
  let card = document.createElement("div");
  card.id = cards.length;
  card.className = "p-2 modal-box";
  let header = document.createElement("header");
  let title = document.createElement("h4");
  header.appendChild(title);
  title.innerText = userInput;
  let item = document.createElement("ul");

  let plusIcon = document.createElement("i");
  plusIcon.className = "fa-solid fa-plus";
  plusIcon.id = "AddItem" + cards.length;
  plusIcon.setAttribute("data-target", "#taskForm");
  plusIcon.setAttribute("data-toggle", "modal");
  plusIcon.addEventListener("click", () => createSubTask(item));
  let del = document.createElement("i");
  del.className = "fa-solid fa-trash";
  del.id = cards.length;

  del.addEventListener("click", () => deleteCard(card));
  let footer = document.createElement("footer");
  footer.append(del, plusIcon);
  card.append(header, item, footer);

  cards.push(card);
  display(cards);
}
function createSubTask(item) {
  console.log("Subtask");
//   document.querySelector("#subTaskForm").style.visibility = "visible";
  document.querySelector("#addTask").addEventListener(
    "click",
    function eventHandler() {
      addItemToCard(item);
      this.removeEventListener("click", eventHandler);
    },
    { once: true }
  );
  console.log(document.querySelector("#addTask"));
}
function addItemToCard(item) {
  console.log("Item Added");
//   document.querySelector("#subTaskForm").style.visibility = "hidden";
  let subTask = document.createElement("li");
  subTask.innerText = document.querySelector("#taskName").value;
  console.log(item);
  item.appendChild(subTask);
}
function deleteCard(item) {
  cards = cards.filter((card) => card !== item);
  display(cards);
}

function display(cards) {
  console.log(cards);
  let lists = document.querySelector("#lists");
  lists.innerHTML = "";
  console.log("display");
  for (let i = 0; i < cards.length; i++) {
    lists.appendChild(cards[i]);
  }
  console.log(lists);
}
