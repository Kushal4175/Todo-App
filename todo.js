
// function to change greeting according to the current time
function get_greeting(name = 'Dear'){
  let curr_time = new Date();
  let curr_hrs = curr_time.getHours();
  if(curr_hrs >= 4 && curr_hrs < 12){
    return `Good Morning ${name},`
  } else if(curr_hrs >= 12 && curr_hrs < 16 ){
    return `Good Afternoon ${name},`
  } else{
    return `Have a Nice Day ${name}, Good Evening!`
  }
};

let greet = get_greeting(); // Greeting generated

// assigning it into greeting tag.
document.querySelector('#greeting').innerHTML = greet;


// This will make todo visible
let disply_none = () => {
  document.querySelector('#heading').style.display = "flex";
};
// setting timeout so that Your todos come after greeting
setTimeout(disply_none,4000);


// Function will make the greeting disappear and make the previous todo list or adding new todo list appear
let whole = () => {
  let greet = document.querySelector('#greeting')
  greet.innerHTML = '';
  document.querySelector('.whole').style.display = 'block'
  previous_todo_element();
};
setTimeout(whole,7500);


// defining 2 array used to store todo and date whether previous todo or if not present then blank array
let todo_array = JSON.parse(localStorage.getItem('Todo')) || [];
let date_array = JSON.parse(localStorage.getItem('Date')) || [];

// function to get if there is some todo in local storage
function previous_todo_element(){

  //creating element for previous todos
  if(todo_array != null || todo_array != undefined) {
    for (let i = 0; i < todo_array.length && i != null; i++){
      let articl = document.createElement('article');
      articl.className = 'articl';
      articl.innerHTML = `
          <h2 class="js-todos">${todo_array[i]}</h2>
          <h2 class="js-todos">${date_array[i]}</h2>
          <button class= "js-done" onclick = "done(this)">Done</button>
        `
      document.body.appendChild(articl);
    };
  };
}; 


// function to set todo in local storage call in both add_btn_click and done functions
function set_todo(){
  // preventing null value to be set in local storage as when I get todo and date from local storage it results:
  // previous_todo = ,'task 1' , 'task2' same comma(,) comes in case of date_array
  localStorage.setItem('Todo',JSON.stringify(todo_array));
  localStorage.setItem('Date',JSON.stringify(date_array));
};


// to add todos
function add_btn_click(){

  // assigning both todo and date into two variable
  let your_todo = document.querySelector('#Your-todo');
  let todo_date = document.querySelector('#todo-date');

  // checking if user have entered the todo and date
  if(your_todo.value === '' || todo_date.value === ''){
    alert('Please enter Todo or Date')
    return
  } else{
    let articl = document.createElement('article');
    articl.className = 'articl';
    articl.innerHTML = `
      <h2 class="js-todos">${your_todo.value}</h2>
      <h2 class="js-todos">${todo_date.value}</h2>
      <button class= "js-done" onclick = "done(this)">Done</button>
    `
    document.body.appendChild(articl);
  }
  
  // giving todo and date of todo in array
  todo_array.push(your_todo.value);
  date_array.push(todo_date.value);
  
  // setting todo in local storage
  set_todo();
  
  // clearing the value of inputs
  your_todo.value = '';
  todo_date.value = '';
};
// adding event listener on add button
let btn = document.querySelector('#todo-add');

let event_handler = (event) => {
  if(event.key === "Enter"){
    add_btn_click()
  };
};

addEventListener('keydown',event_handler);

// function to remove todo
function done(buttonElement){


  // geting strings to be remove from array
  let date_remove = buttonElement.previousElementSibling.innerHTML;
  let todo_remove = buttonElement.previousElementSibling.previousElementSibling.innerHTML;

  // geting index of elements to be removed
  let index_todo_remove = todo_array.indexOf(todo_remove);
  let index_date_remove = date_array.indexOf(date_remove);

  // removing elements from array
  todo_array.splice(index_todo_remove,1);
  date_array.splice(index_date_remove,1);
  
  // setting final before refressing todo in local storage
  set_todo();
  buttonElement.parentElement.remove();
  
};
