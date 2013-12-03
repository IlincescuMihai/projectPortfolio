/**************************************************************
* ImageFollowMouse plugin for jQuery
* v1.2
* Image Follow Mouse move
* By Xing Wang, http://AskBargains.com http://videogameonsale.info ( live demo )
*
* Please use as you wish at your own risk.
* fix v1.0 the bug for group list img, add img max-height and img max-width
* fix v1.2 the bug for img position
* Usage:
*
* From JavaScript, use:
*     $(<select#ID>).ImageFollowMouse({src: <S>, width: <W>, height: <H>, topY:<Y> ,leftX :<X> ,backgroundColor :<C>, padding:<P>, maxHeight:<MH>, maxWidth:<MW>,});
*     where:
*       <select> is the DOM node selector, e.g. "p" need use <select#ID>
*	    <S> is the src of Image 
*       <W> is the Width of Image (optional)
*       <H> is the Height of Image (optional)
*       <Y> is the Image close to the mouse poing of y lever (optional)
*       <X> is the Image close to the mouse poing of x lever (optional)
*       <C> is the background color of Image (optional)
*       <P> is the Image Padding(optional)
*       <MH> is the Max Image Height
*       <MW> is the Max Image Width  
        <D>  description : you can put html tag inside , for example, you can use <span color:red>company</span> as img alt
* 
*Example :
*     
*     <img src="images/happy.jpg" id="selectedImage"  width="88px" style="border:2px solid #ccc; background-color:#fff; padding:2px" />
*    
***************** example 1 **************************************** 
*     <script type="text/javascript">
*     $(document).ready(function() {
*     $("#selectedImage").ImageFollowMouse({ 
*            src: 'images/happy.jpg',
*            Padding:'28px'
*         });  
*     }); 
*     </script>
****************** example 2 ********************************************
*     
*       $(document).ready(function () {
*       $('.itemImg').each(function () {
*       $(this).ImageFollowMouse({ src: $(this).attr("src"), maxHeight: '200px', maxWidth: '200px', topY: -140, leftX: 50,description: $(this).attr("alt") });
*       });
*   }); 
**************************************************************/
(function ($) {

    $.fn.ImageFollowMouse = function (params) {


        params = $.extend({ src: null, width: null, height: null, topY: null, leftX: null, backgroundColor: null, padding: null, maxHeight: null, maxWidth: null,description: null}, params);

        this.each(function () {
            var $t = $(this);
            var imgWidth, imgHeight, imgMaxHeight, imgMaxWidth;
            var bColor = "#fff";
            var iPadding = "15px";
            var iMargin = "2px";
            var desc = "";
            var X, Y;

            if (params.topY != null) Y = params.topY;
            if (params.leftX != null) X = params.leftX;

            if (params.backgroundColor != null) bColor = params.backgroundColor;
            if (params.padding != null) iPadding = params.padding;

            var idTmpDvi = $t.attr("id") + "-i-f-m-i-dvi";

            var idTmp = $t.attr("id") + "-i-f-m-i";

            $("<div id='" + idTmpDvi + "' />").prependTo('body');

            $('div#' + idTmpDvi).prepend("<img id='" + idTmp + "' src='" + params.src + "' alt= '" + desc + "' />");

            $('div#' + idTmpDvi).css('position', 'absolute').css('visibility', 'hidden');

            $t.mousemove(function (e) {

                $("div#" + idTmpDvi) 
                    .css('top', e.pageY + Y)
                    .css('left', e.pageX + X)
                    .css('visibility', 'visible')
                    .css('-moz-box-shadow', '0px 0px 8px 8px #aaa')
                    .css('-webkit-box-shadow', '0px 0px 8px 8px #aaa')
                    .css('box-shadow', '0px 0px 8px 8px #aaa')
                    .css('-moz-border-radius', '8px')
                    .css('border-radius', '8px')
                    .css('background-color', bColor)
                    .css('padding', iPadding)
                    .css('margin', iMargin);

                if (params.width != null) {
                    imgWidth = params.width;
                    $("img#" + idTmp).css('width', imgWidth);
                }
                if (params.height != null) {
                    imgHeight = params.height;
                    $("img#" + idTmp).css('height', imgHeight);
                }

                if (params.maxHeight != null) {
                    imgMaxHeight = params.maxHeight;
                    $("img#" + idTmp).css('max-height', imgMaxHeight);
                }
                if (params.maxWidth != null) {
                    imgMaxWidth = params.maxWidth;
                    $("img#" + idTmp).css('max-width', imgMaxWidth);
                }
                if (params.description != null) {
                    desc = params.description;
                    $('img#' + idTmp).next().remove();
                    $('img#' + idTmp).after("<div style='clear:both; max-width:320px; font: bold 14px Tahoma; color:#555;'><br/>" + desc + "</div>");
                }
            });

            $t.mouseout(function (e) {
                $("div#" + idTmpDvi).css("visibility", "hidden");
            });

        });

        return this;
    };
})(jQuery);
 