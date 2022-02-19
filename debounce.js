function debounce(func,delay=300){
  var timeout;
  return function () {
    var context = this;
    var args = arguments

    clearTimeout(timeout)
    timeout= setTimeout(function(){
      func.apply(context, args)
    }, delay)
  }
}


// Use case
function saveInput(){
  console.log('Call Api');
}
var processChange = debounce(saveInput, 500);
var debounceInput = document.querySelector('#debounce-input')
debounceInput.addEventListener('onkeyup', processChange)

// In html file
// Only call api when typing stop for 500ms

// <input id="debounce-input" type="text" />  

