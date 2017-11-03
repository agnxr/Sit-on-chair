document.addEventListener("DOMContentLoaded", function(){

/* slider with chairs - header */
    var next = document.getElementById('nextPicture');
    var prev = document.getElementById('prevPicture');

    var array = document.getElementsByClassName('slider');


    var index=0;

var visibleElement = array[0].firstElementChild;
visibleElement.classList.add("visible");

nextPicture.addEventListener("click", event1);

function event1(){

 for (i = 0; i < array[0].children.length; i++) {
   if(array[0].children[i].classList = "visible"){
     array[0].children[i].classList.remove('visible');
   }
 }
     index = index - 1;
     if(index<0){
       index = 1;
     }
     array[0].children[index].classList.add('visible');
}

prevPicture.addEventListener("click", event2);

function event2(){

for (i = 0; i < array[0].children.length; i++) {
 if(array[0].children[i].classList = "visible"){
   array[0].children[i].classList.remove('visible')
 }
}

if(index>=array[0].children.length){
  index = 0;
}
  array[0].children[index].classList.add('visible')
    index = index + 1;
}

/* end of slider */

/*menu */

var menuArray = document.getElementsByClassName('menu')[0].firstElementChild.children;
console.log(menuArray);

for (var i = 0; i < menuArray.length; i++) {
  menuArray[i].addEventListener('mouseover', function(){
    if(this.querySelector('ul')!=null){
      this.getElementsByTagName('ul')[0].style.display='block';
    }

  });
  menuArray[i].addEventListener('mouseout', function(){
    if(this.querySelector('ul')!=null){
      this.getElementsByTagName('ul')[0].style.display='none';
    }
  });
}

/* triangle */
var parent = document.getElementById('parent');
console.log(parent);

parent.addEventListener("mouseover", function(){
    if(this.querySelector('div')!=null){
      this.getElementsByTagName('div')[0].style.display='block';
    }
});
parent.addEventListener('mouseout', function(){
  if(this.querySelector('div')!=null){
    this.getElementsByTagName('div')[0].style.display='none';
  }
});

/* box section */

var boxes = document.querySelectorAll('.box');

function mouseOverParent(event){
var child=this.querySelector('.whiteBackground');
child.style.display='none';
}


function mouseOut(){
  var child=this.querySelector('.whiteBackground');
  child.style.display='block';
}

for (var i = 0; i < boxes.length; i++) {

  boxes[i].addEventListener('mouseover', mouseOverParent );
  boxes[i].addEventListener('mouseout', mouseOut );

}




})
