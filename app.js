
// var person='wendy';
// var age=23;

// function calculator(){
//   console.log('this is a calc');
// }
// calculator();

var count = 0;

// var value = document.getElementById("#value")
// var value = document.querySelectorAll("#value"); 
var value = document.querySelector("#value");

var btns = document.querySelectorAll(".btn");

// looping

btns.forEach(function(btn){
  
  btn.addEventListener("click",function(e){
    //when you click the button it selects in javascript
    var style = (e.currentTarget.classList);

    // if,else if and else to check for conditions
    if(style.contains('decrease')){
      count--;
    }
    else if(style.contains('increase')){
      count++;
    }
    else {
      count=0;
    }

    value.textContent=count;
  })
})


document.getElementById("counterTitle").innerHTML="My Counter app";

// document.querySelector(.title).innerHTML="Counter Up";
