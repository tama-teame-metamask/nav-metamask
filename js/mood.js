var element = document.body;

const test = document.querySelector('#themeBtn')
console.log(test.value);
test.addEventListener('click' , function(){
    element.classList.toggle("Tdark");
})