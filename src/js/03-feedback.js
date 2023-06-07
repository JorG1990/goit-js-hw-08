
import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const textMessage = document.querySelector("textarea");


form.addEventListener(`input`, throttle(function(){
  const dataObj={};
    dataObj.email = inputEmail.value;
    dataObj.message = textMessage.value;
    //console.log(dataObj);
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
    localStorage.getItem('feedback-form-state');
}, 500));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataObj = {};
  dataObj.email = inputEmail.value;
  dataObj.message = textMessage.value;
  console.log(dataObj);
  localStorage.clear()
  inputEmail.value = "";
  textMessage.value = "";
});

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('feedback-form-state');
  if (savedTime) {
       const dataObj = JSON.parse(saveData);
       console.log(dataObj);
       inputEmail.value = dataObj.email;
      textMessage.value = dataObj.message;
    }
  })