// toggle spin  class on icon
document.querySelector('.toggle-setting .fa-gear').onclick = 
function(){
    //rotate the gear
 this.classList.toggle('fa-spin');
   //open the setting-box 
 document.querySelector('.setting-box').classList.toggle('open');
};
///////////////////////////////////////////////////////////////
//  function to add background   vw
const myButton1 = document.getElementById('Volkswagen');
 
myButton1.onclick = function(){
  landingPage.style.background = 'url("image/img/golf.jpg")';
  landingPage.style.backgroundSize = 'contain';
  landingPage.style.backgroundRepeat= 'no-repeat' ;
}
// function to go back to the default background 
myButton1.ondblclick = function(){
  landingPage.style.background = 'url("image/06.jpg  ")'; 
}

//  function to add background   BMW
const myButton2 = document.getElementById('BMW');

 myButton2.onclick = function(){
  landingPage.style.background = 'url("image/img/x6.jpg")';
  landingPage.style.backgroundSize = 'contain';
  landingPage.style.backgroundRepeat= 'no-repeat' ;
}

// function to go back to the default background 
myButton2.ondblclick = function(){
  landingPage.style.background = 'url("image/06.jpg  ")'; 
}

//  function to add background   audi
const myButton3 = document.getElementById('Audi');

 myButton3.onclick = function(){
  landingPage.style.background = 'url("image/img/audi.jpg")';
  landingPage.style.backgroundSize = 'contain';
  landingPage.style.backgroundRepeat= 'no-repeat' ;
}

// function to go back to the default background 
myButton3.ondblclick = function(){
  landingPage.style.background = 'url("image/06.jpg  ")'; 
}

//  function to add background   MercedesBens
const myButton4 = document.getElementById('MercedesBens');

 myButton4.onclick = function(){
  landingPage.style.background = 'url("image/img/mercedes-benz.jpg")';
  landingPage.style.backgroundSize = 'contain';
  landingPage.style.backgroundRepeat= 'no-repeat' ;
} 

// function to go back to the default background 
myButton4.ondblclick = function(){
  landingPage.style.background = 'url("image/06.jpg  ")'; 
}

//  function to add background   Opel
const myButton5 = document.getElementById('Opel');

 myButton5.onclick = function(){
  landingPage.style.background = 'url("image/img/opel.png")';
  landingPage.style.backgroundSize = 'contain';
  landingPage.style.backgroundRepeat= 'no-repeat' ;
}
// function to go back to the default background 
myButton5.ondblclick = function(){
  landingPage.style.background = 'url("image/06.jpg  ")'; 
}

////////////////////////////////////////////////////////////////////////////

// select landing page
 landingPage = document.querySelector('.landing-page');
//array for images
let imageArray = [
    '09.jpg',
    '04.jpg',
    '07.jpg',
    '02.jpg',
    '04.jpg',
    '05.jpg'
];

 const randomNumber = imageArray.length;
 let myBtn = document.getElementById('btn');

//function to change the background
 myBtn.onclick = function(){
      landingPage.style.background = 'url("image/01.jpg  ")'; 
 }
//function to return to the pervious background
 myBtn.ondblclick = function(){
    landingPage.style.background = 'url("image/06.jpg  ")'; 
} 
///////////////////////////////////////////////
//  start our sales
let ourSales = document.querySelector('.sales');

window.onscroll = function(){

  // sales offset top
  let salesOffsetTop = ourSales.offsetTop;
  //sales outer height
  let salesOuterHeight = ourSales.offsetHeight;
  //window height
  let windowHeight = this.innerHeight;
  // window scrollTop
  let windowScrollTop = this.pageYOffset

   if(windowScrollTop >(salesOffsetTop + salesOuterHeight -windowHeight)){
    
    let allSkills = this.document.querySelectorAll('.sales-box .sales-progress span');

    allSkills.forEach(skill =>{
       
      skill.style.width = skill.dataset.progress;
    });

   }
 
};

//  end our sales
 
///////////////////////////////////////////
//create popup with the image
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img =>{

  img.addEventListener('click',(e) =>{

    // create overlay Element

    let overlay =document.createElement('div');

    // add class to the overlay

    overlay.className = 'popup-overlay';

    // append overlay to the body

    document.body.appendChild(overlay);

    //create the popup box

    let popupBox = document.createElement('div');

    // add class to the popup box

    popupBox.className = 'popup-box';

    if(img.alt !== null){
      //create heading

      let imgHeading = document.createElement('h3');

      // create text for Heading

      let imgText = document.createTextNode(img.alt);

      //append the text to the Heading

      imgHeading.appendChild(imgText);

      // append to the popup box

      popupBox.appendChild(imgHeading);

    }

    //create the img

    let popupImage = document.createElement('img');

    // console.log(img.src);

    // set img source
    
    popupImage.src = img.src;

    //add image to popup box

    popupBox.appendChild(popupImage);

    //append the popup box to the body

    document.body.appendChild(popupBox);

    ////////////////////////////
    if(img.alt !== null){
      //create heading

      let imgHeading = document.createElement('p');

      // create text  

      let imgText = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda reprehenderit qui molestiae impedit adipisci dolor esse fugit atque architecto recusandae quo amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda reprehenderit qui molestiae impedit adipisci dolor esse fugit atque architecto recusandae quo amet');

      //append the text to the Heading

      imgHeading.appendChild(imgText);

      // append to the popup box

      popupBox.appendChild(imgHeading);

    }
    //////////////////////////

    // creat the close span

    let closeButton = document.createElement('span');

    // create the close button text

    let closeButtonText = document.createTextNode('X');

    // append text to close button

    closeButton.appendChild(closeButtonText);

    //add class to the close button

    closeButton.className = 'close-button';

    // add close button to the popup box

    popupBox.appendChild(closeButton);

  });

});

// close popup

document.addEventListener('click',function(e){

  if(e.target.className =='close-button'){

    //remove the current popup

    e.target.parentNode.remove();
    
    //remove overlay

     document.querySelector('.popup-overlay').remove();

  }
});

////////////////////////////////
// start bullets
// select all bullets 
const allBullets = document.querySelectorAll('.nav-bullets .bullet');

allBullets.forEach(bullet =>{

  bullet.addEventListener('click',(e)=>{

      document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior:'smooth'
      });
  });

});

//toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.links');

toggleBtn.onclick = function(){

  //toggle class menu-active on btn
  this.classList.toggle('menu-active');

  //toggle class open on the links
   tLinks.classList.toggle('open');
};
 