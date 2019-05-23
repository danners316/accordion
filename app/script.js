/* START */


var accordionApp = (function(){
  'use strict';

  //Group Defs and Terms
  var allDefs = document.querySelectorAll("dd");
  var allTerms = document.querySelectorAll("dt");
  
  allDefs[0].classList.toggle("active");
  allTerms[0].classList.add("open");
  
  for(let index = 0 ; index < allTerms.length ; index++) {
    
      // Add listener for onClick dt
      allTerms[index].addEventListener('click', function() {
      
        //Reset Open Classes dt
        for (var item of allTerms) {
        item.classList.remove("open");
        }
        
        //Reset Active Classes dd
        for (var item of allDefs) {
        item.classList.remove("active");
        }
      
      // Index of Clicked dt to assign to dd
      var clicked = index;
      
        // Reset By Hiding all dd
        
        for(var i = 0; i < allDefs.length; i++){
            //allDefs[i].style.display = "none";
            allDefs[clicked].classList.toggle("active");
        }
      
      //Roll Down Appropriate Def
      //allDefs[clicked].style.display = "block";
      allDefs[clicked].classList.toggle("active");
      //Add open class
      allTerms[clicked].classList.add("open");
    
    });
  
  }
  
});


window.addEventListener('load', function() {
    accordionApp();
})



/* END */