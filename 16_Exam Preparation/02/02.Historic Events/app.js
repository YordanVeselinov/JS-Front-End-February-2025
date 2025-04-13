window.addEventListener("load", solve);

function solve() {
    let formElement = document.querySelector("form");
    let timeElement = document.getElementById("time");
    let nameElement = document.getElementById("name");
    let descriptionElement = document.getElementById("description");
  
    let addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", onAdd);
  
    function onAdd(e) {
    e.preventDefault()
      if (
        timeElement.value == "" ||
        nameElement.value == "" ||
        descriptionElement.value == ""
      ) {
        return;
      }
      let taskList = document.getElementById("preview-list");
      let doneList = document.getElementById("archive-list");
  
      let taskLiElement = document.createElement("li"); 
      let buttonDiv = document.createElement("div"); 
      buttonDiv.setAttribute("class", "buttons")
      let taskArticleElement = document.createElement("article");

      let ageP = document.createElement("p");
      ageP.textContent = `${timeElement.value}`;
      let name = timeElement.value;
    
  
      let petP = document.createElement("p");
      petP.textContent = `${nameElement.value}`;
      let phone = nameElement.value;
  
      let genderP = document.createElement("p");
      genderP.textContent = `${descriptionElement.value}`;
      let gender = descriptionElement.value;
    
      taskArticleElement.appendChild(petP);
      taskArticleElement.appendChild(ageP);
      taskArticleElement.appendChild(genderP);
     
  
      let editBtn = document.createElement("button");
      editBtn.setAttribute("class", "edit-btn")
      editBtn.addEventListener("click", edit);
      editBtn.textContent = "Edit" 

      let doneBtn = document.createElement("button");
      doneBtn.setAttribute("class", "next-btn")
      doneBtn.addEventListener("click", onDone);
      doneBtn.textContent = "Next"
      buttonDiv.appendChild(editBtn);
      buttonDiv.appendChild(doneBtn);
  
      taskLiElement.appendChild(taskArticleElement);
      taskLiElement.appendChild(buttonDiv);

      addButton.disabled = true;
  
      taskList.appendChild(taskLiElement);
      formElement.reset();
  
      function edit() {
        timeElement.value = name;
        nameElement.value = phone;
        descriptionElement.value = gender;
  
        taskList.removeChild(taskLiElement);
        addButton.disabled = false;
      }
  function onDone() {
    let taskDoneLiElement = document.createElement("li"); 
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "archive-btn")
    deleteBtn.addEventListener("click", onDelete);
    deleteBtn.textContent = "Archive"
    taskDoneLiElement.appendChild(taskArticleElement);
    taskDoneLiElement.appendChild(deleteBtn);
    doneList.appendChild(taskDoneLiElement);
    taskList.removeChild(taskLiElement);


    function onDelete() {
      doneList.removeChild(taskDoneLiElement);
      addButton.disabled = false;
    }
  }
      
    }
  }
  