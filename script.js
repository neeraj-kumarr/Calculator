let string = "";
let buttons = document.querySelectorAll("button");
let result = 0;
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {


    //  if the '=' sign is clicked, calculate the input
    if (e.target.innerHTML == "=") {
      string = eval(string);
      result = string;
      // It will update the input value to display on screen
      document.querySelector("input").value = string;
      // It will replace the calculated result with new input if any given

      string = " ";

    }
    // if C is clicked, erase the numpad
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector("input").value = string;
    }

    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }



  });
});
