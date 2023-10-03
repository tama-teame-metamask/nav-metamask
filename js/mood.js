var element = document.body;

const desktopBtn = document.querySelector('#themeBtnDesktop')
desktopBtn.addEventListener('click' , function(){
    element.classList.toggle("Tdark");
})
// themeBtnmobile
const mobileBtn = document.querySelector('#themeBtnmobile')
mobileBtn.addEventListener('click' , function(){
    if(element.classList=='Tdark'){
        element.classList.remove("Tdark")
        document.getElementById('logoImg').src="";;
        // imgLogo = 'assets/logolight.svg'
        
    }else{
        element.classList.add("Tdark")
        document.getElementById('logoImg').src="";
        // imgLogo = 'assets/logodark.svg'
    }
    }
    
)