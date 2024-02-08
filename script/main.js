document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

function errorMsg() {
    this.setCustomValidity('Please enter a valid email address');
}