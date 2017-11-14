
// Run a function when a number or an operator is clicked and display it in the sreen
function clicked(val){
  document.getElementById("calc").value += val;
  };

// Clear and reset the calculator when we hit AC
function clearAll(val){
  document.getElementById("calc").value = "";
};

//Clear the last entry when we hit CE
function clearEntry(val){
  var count;
  for (count = 0; count < val.length-1; i++){
    result = val[i];
    return result;
    document.getElementById("calc").value = result;

  }

};
// Store the value to be evaluating within the function showResult
var clear = function(val) {
  document.getElementById("calc").value = val;
};
// Evaluate the value passed in the clear method.
// Return error if clear() cannot be evaluated
function showResult(){
  try
   {
       clear(eval(document.getElementById("calc").value))
   }
   catch(showResult)
   {
       clear('Error')
   }
};
