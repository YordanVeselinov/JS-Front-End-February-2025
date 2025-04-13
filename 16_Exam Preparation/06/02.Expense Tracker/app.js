window.addEventListener("load", solve);

function solve() {
    let formElement = document.querySelector("form");
    let expenseElement = document.getElementById("expense");
    let amountElement = document.getElementById("amount");
    let dateElement = document.getElementById("date");
    let clearBtn = document.querySelector(".delete") 
    let publishBtn = document.getElementById("add-btn");
    publishBtn.addEventListener("click", publish);
  
    function publish() {
      if (
        expenseElement.value == "" ||
        amountElement.value == "" ||
        dateElement.value == ""
      ) {
        return;
      }
      let reviewList = document.getElementById("preview-list");
      let publishedList = document.getElementById("expenses-list");
  
      let taskLiElement = document.createElement("li");
      taskLiElement.classList.add("expense-item");
  
      let taskArticleElement = document.createElement("article");
  
      let titleHeadingElement = document.createElement("p");
      titleHeadingElement.textContent =`Type: ${expenseElement.value}`;
      let taskTitle = expenseElement.value;
      let categoryPElement = document.createElement("p");
      categoryPElement.textContent = `Amount: ${amountElement.value}$`;
      let taskCategory = amountElement.value;
  
      let contentPElement = document.createElement("p");
      contentPElement.textContent = `Date: ${dateElement.value}`;
      let taskContent = dateElement.value;
  
      taskArticleElement.appendChild(titleHeadingElement);
      taskArticleElement.appendChild(categoryPElement);
      taskArticleElement.appendChild(contentPElement);
  
      let editBtn = document.createElement("button");
      editBtn.classList.add("btn");
      editBtn.classList.add("edit");
      editBtn.textContent = "edit";
      editBtn.addEventListener("click", edit);
  
      let postBtn = document.createElement("button");
      postBtn.classList.add("btn");
      postBtn.classList.add("ok");
      postBtn.textContent = "ok";
      postBtn.addEventListener("click", post);

      let buttonDiv = document.createElement("div");
      buttonDiv.classList.add("buttons");

  
      taskLiElement.appendChild(taskArticleElement);
      taskLiElement.appendChild(buttonDiv);
      buttonDiv.appendChild(editBtn);
      buttonDiv.appendChild(postBtn);
  
      reviewList.appendChild(taskLiElement);
      formElement.reset();
      publishBtn.disabled=true;
  
      function edit() {
        expenseElement.value = taskTitle;
        amountElement.value = taskCategory;
        dateElement.value = taskContent;
  
        reviewList.removeChild(taskLiElement);
        publishBtn.disabled=false;
      }
  
      function post() {
        reviewList.removeChild(taskLiElement);
        taskLiElement.removeChild(buttonDiv);
        publishedList.appendChild(taskLiElement);
        publishBtn.disabled=false;
        clearBtn.addEventListener("click", onClear)

        function onClear(){
          location.reload();
        }
      }
    }
  }
  