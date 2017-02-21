/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var title=$("title").text();
         $("body").prepend("<div class='future'><h1>" + title + "</h1></div>");
         
         var dragme = false;
         
         $(function () {
         
            var element = sym.$("Divider");
            var clipper = sym.$("color2");
         
         	element.mousedown(function() { dragme = true })
         	$(document).mouseup(function() { dragme = false })
         	$(document).mousemove(function(e) { 
         
         			if(dragme){ 
         				//Drag left side to the value of x.pageX (direction horizontal)
         				element.offset({
                         //top: e.pageY,
                         left: e.pageX
                     });
                     //Or use css property values
                     //element.css('left', e.pageX);
         
                     //Drag right clip side to the value of x.pageX (direction horizontal)
                     //clip values top, right, bottom, left
                     var directionX = e.pageX - (clipper.offset().left);
         				clipper.css('clip','rect(0px '+directionX+'px 356px 0px)');
         			}
         		})	
         	})
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-41908609");