var $v,
    wrLen,
    L,H;




function ddC(baseHeight){    /* dinamicly dimensioning Containers - lol */
    
    $("container").css ("height" , baseHeight);
    
    $(".p_02").css( "width" , 0.2 * baseHeight );
    $(".p_06").css( "width" , 0.6 * baseHeight );
    $(".p_08").css( "width" , 0.8 * baseHeight );
    $(".p_10").css( "width" , 1.0 * baseHeight );
    $(".p_12").css( "width" , 1.2 * baseHeight );
    $(".p_14").css( "width" , 1.4 * baseHeight );
    $(".p_16").css( "width" , 1.6 * baseHeight );
    $(".p_18").css( "width" , 1.8 * baseHeight );
    $(".p_20").css( "width" , 2.0 * baseHeight );
}

function ddW(baseHeight){   /* dinamicly dimensioning Wrapper  */
    
    $v.css( "width" , 16*baseHeight );
    wrLen=$v.innerWidth();
    

} 

function ddQ(baseHeight){  /* dinamicly dimensioning Quotes text  */

    
    
    $("h2").css("font-size", baseHeight/12 ).each(   function(){                   /* dimensioneaza si pozitioneaza corect fiecare quote  */
       var $this= $(this);
       var pozY = ($this.parent().parent().height() - $this.parent().height())/2;
        $this.parent().css("top", pozY);
    });
    
    
    $("h3").css("font-size", baseHeight/24 ).each(   function(){                   /* pozitioneaza corect fiecare author  */
        $(this).parent().css("bottom", baseHeight/30).css("right", baseHeight/20);
    });
    

}




function refreshPage() {
    var $s= $("#screen");
    H = $s.innerHeight();
    L = $s.innerWidth();
     ddC(H/2);
     ddW(H/2);
     ddQ(H/2);
     
     
    /*$( "#output" ).text(H+" "  +  $(".p_10").height()  +  " "  +  $(".p_10").width() ); */
    
}

function getWrPos(mouseX) {
    
    return -mouseX * (wrLen-L) / L;
     
}



/* CODU  */

$(document).ready(function() {  



$v=$( "#wrapper" );
refreshPage();
var resizeTimer, $hoverAnt=$("#prj1"), $hoverNew;


$(".pr_title").hide();                                                  /*  Minunea asta afiseaza titlurile jos in consola  */
$(".margine").hoverIntent(                                              /*  cu hoverIntent nu oricum                        */
    
    function(){  $($(this).attr("data-tip")).fadeIn(500);  }, 
    function(){  $($(this).attr("data-tip")).hide();      }     );
    
    

   




$(window).mousemove(function(event){$v.css( "left", getWrPos(event.pageX)   );   });         /*  Aici se misca divu Wrapper dupa mouseX */

$(window).resize(function () {                         /* Aici se redimensioneaza divu Wrapper in functie de inaltimea lui window  */
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshPage, 100);
  
  });






});