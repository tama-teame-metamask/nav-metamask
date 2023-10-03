var element = document.body;

const desktopBtn = document.querySelector('#themeBtnDesktop')
desktopBtn.addEventListener('click' , function(){
    element.classList.toggle("Tdark");
    if(element.classList=='Tdark'){
        document.getElementById('logoImgDesktop').src="../assets/logodark.svg"
    }else{
        document.getElementById('logoImgDesktop').src="../assets/logolight.svg"
    }
})
// themeBtnmobile
const mobileBtn = document.querySelector('#themeBtnmobile')
mobileBtn.addEventListener('click' , function(){
    if(element.classList=='Tdark'){
        element.classList.remove("Tdark")
        document.getElementById('logoImgMobile').src="../assets/logolight.svg"
        // imgLogo = 'assets/logolight.svg'
        
    }else{
        element.classList.add("Tdark")
        document.getElementById('logoImgMobile').src="../assets/logodark.svg"
        // imgLogo = 'assets/logodark.svg'
    }
    }
    
)