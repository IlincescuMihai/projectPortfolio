var $v,
    wrH,
    L,H;




function ddW(baseWidth){   /* dinamicly dimensioning Wrapper  */
    
    $v.css( "height" , 1.25*baseWidth ); 
    wrH=$v.innerHeight(); 
    

} 




function refreshPage() {
    var $s= $("#screen");
    H = $s.innerHeight();
    L = $s.innerWidth();
    
     ddW(L);
}


function getWrPos(mouseY) { return -mouseY * (wrH-H) / H;}



/* CODU  */

$(document).ready(function() {  



$v=$( "#wrapper" );
refreshPage();
var resizeTimer ;



    
    


$(window).mousemove(function(event){$v.css( "top", getWrPos(event.pageY)   );   });        /*  Aici se misca divu Wrapper dupa mouseX */

$(window).resize(function () {                         /* Aici se redimensioneaza divu Wrapper in functie de inaltimea lui window  */
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshPage, 100);
  
  });






});