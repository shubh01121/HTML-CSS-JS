document.querySelector("#createList").addEventListener("click", createList);
document.querySelector("#close").addEventListener("click", hideListForm);
document.querySelector('#addList').addEventListener("click", createCard);
let cards = [];
function createList() {
    document.querySelector("#listForm").style.visibility = "visible";
    console.log("List Created");
}

function hideListForm() {
    document.querySelector("#listForm").style.visibility = "hidden";
    console.log("Hide List Form Executed");
}
//<i id="createList" class="fa-solid fa-plus">
function createCard() {
    //to hide the form once add button is pressed
    document.querySelector("#listForm").style.visibility = "hidden";
    //read the data of the form
    let userInput = document.querySelector("#listName").value;
    console.log("Card is being created");
    
    let title = document.createElement("h4");
    let ul = document.createElement("ul");
    //<h4> </h4>
    title.innerText = userInput;
    //<h4>userInput</h4>
    let plusIcon = document.createElement("i");
    //<i> </i>
    plusIcon.className = "fa-solid fa-plus";
    plusIcon.addEventListener("click",()=>{
        showItemForm(ul);
    })

    //<i class="fa-solid fa-plus"> </i>
    let del = document.createElement("i");
    del.className = "fa fa-trash";
    del.addEventListener("click", function removeList() {
        let tempNewArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] !== div1) {
                tempNewArray.push(cards[i]);
            }
        }
        cards = tempNewArray;
        display(cards);
    });
    let div1=document.createElement("div");
    div1.append(title, ul, del, plusIcon);

    cards.push(div1);
    console.log(cards);
    display(cards);
}
function showItemForm(tag){
    document.querySelector("#itemForm").style.visibility = "visible";
    document.querySelector("#addItem").addEventListener("click",function m1(){

        let li = document.createElement("li");
        li.innerText=document.querySelector("#itemName").value;
        tag.append(li);
        document.querySelector("#itemForm").style.visibility = "hidden";
        // remove a event listener
        document.querySelector("#addItem").removeEventListener("click",m1);
        console.log("Add Button is pressed");
    });
}



function display(cards) {
    let lists = document.querySelector("#lists");
    lists.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        lists.appendChild(cards[i]);

    }
}


