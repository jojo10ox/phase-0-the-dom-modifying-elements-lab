// Write your code here!
//main.remove();
document.querySelector('#main').remove();
//# refers to the ID in html file, . refers to a class 

const newHeader = document.createElement("h1");

newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
document.body.append(newHeader);

// to show in DOM use the follow code: document.body.append(newHeader);
