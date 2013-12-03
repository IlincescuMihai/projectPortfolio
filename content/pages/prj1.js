var $v,
    wrLen,
    L,H;




function ddW(baseHeight){   /* dinamicly dimensioning Wrapper  */
    
    $v.css( "width" , 5*baseHeight ); 
    wrLen=$v.innerWidth(); 
    

} 




function refreshPage() {
    var $s= $("#screen");
    H = $s.innerHeight();
    L = $s.innerWidth();
    
     ddW(H);
}


function getWrPos(mouseX) { return -mouseX * (wrLen-L) / L;}



/* CODU  */

$(document).ready(function() {  



$v=$( "#wrapper" );
refreshPage();
var resizeTimer, $hoverAnt=$("#prj1"), $hoverNew;



    
    


$(window).mousemove(function(event){$v.css( "left", getWrPos(event.pageX)   );   });        /*  Aici se misca divu Wrapper dupa mouseX */

$(window).resize(function () {                         /* Aici se redimensioneaza divu Wrapper in functie de inaltimea lui window  */
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshPage, 100);
  
  });






});