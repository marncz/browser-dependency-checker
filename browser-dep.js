
var getMinBrowserVersion = function ( browser, debug ){

	
	var allCSSRules = getComputedStyle(document.body);
	var allCSSNames = [];	
	var minVersion = 0;
	
   for (var i = 0; i < allCSSRules.length; i++){
   	allCSSNames.push( allCSSRules[i] );
   }

	
   // Define indexes CSS Rules for Internet Explorer
	if(browser == "MSIE")         { var index = 0; }
	else if(browser == "Firefox") { var index = 1; }
	else if(browser == "Chrome")  { var index = 2; }
	else if(browser == "Safari")  { var index = 3; }
	else if(browser == "Opera")   { var index = 4; }
	 
	var browsers = [
						"MSIE",
						"Firefox",
						"Chrome",
						"Safari",
						"Opera"
					   ]	
// CSS rules along with versions supported, format: 	
// "CSS_name" : [IE_version, Firefox_version, Chrome_version, Safari_Version, Opera_version]
var rules = {
"align-content" : [11,28,21,9,12.1], 
"align-items" : [11,20,21,9,12.1], 
"align-self" : [11,20,21,9,12.1], 
"all" : [0,27,37,0,24], 
"@keyframes" : [10,16,43,9,30], 
"animation" : [10,16,43,9,30], 
"animation-name" : [10,16,43,9,30], 
"animation-duration" : [10,16,43,9,30], 
"animation-timing-function" : [10,16,43,9,30], 
"animation-delay" : [10,16,43,9,30], 
"animation-iteration-count" : [10,16,43,9,30], 
"animation-direction" : [10,16,43,9,30], 
"animation-play-state" : [10,16,43,9,30], 
"backface-visibility" : [10,16,36,9,23], 
"background-clip" : [9,4,4,3,10.5], 
"background-origin" : [9,4,4,3,10.5], 
"background-size" : [9,4,4,4.1,10], 
"border-bottom-left-radius" : [9,4,5,5,10.5], 
"border-bottom-right-radius" : [9,4,5,5,10.5], 
"border-image" : [11,15,16,6,15], 
"border-image-outset" : [11,15,15,6,15], 
"border-image-repeat" : [11,15,15,6,15], 
"border-image-slice" : [11,15,15,6,15], 
"border-image-source" : [11,15,15,6,15], 
"border-image-width" : [11,13,15,6,15], 
"border-radius" : [9,4,5,5,10.5], 
"border-top-left-radius" : [9,4,5,5,10.5], 
"border-top-right-radius" : [9,4,5,5,10.5], 
"box-decoration-break" : [0,32,22,6.1,15], 
"box-shadow" : [9,4,10,5.1,10.5], 
"box-sizing" : [8,29,10 ,5.1,9.5], 
"break-after" : [10,0,0,0,11.1], 
"break-before" : [10,0,0,0,11.1], 
"break-inside" : [0,0,0,0,0], 
"column-count" : [10,2,50,9,37], 
"column-fill" : [0,13,0,0,0], 
"column-gap" : [10,2,50,9,37], 
"column-rule" : [10,2,50,9,37], 
"column-rule-color" : [10,2,50,9,37], 
"column-rule-style" : [10,2,50,9,37], 
"column-rule-width" : [10,2,50,9,37], 
"column-span" : [10,0,50,9,37], 
"column-width" : [10,2,50,9,37], 
"columns" : [10,9,50,9,37], 
"filter" : [13,35,18,9.1,15], 
"fit" : [0,0,0,0,0], 
"flex" : [11,28,29,9,17], 
"flex-basis" : [11,28,29,9,17], 
"flex-direction" : [11,28,29,9,17], 
"flex-flow" : [11,28,29,9,17], 
"flex-grow" : [11,28,29,9,17], 
"flex-shrink" : [11,28,29,9,17], 
"flex-wrap" : [11,28,29,9,17], 
"@font-face" : [9,3.6,4,3,10], 
"@font-feature-values" : [0,0,0,0,0], 
"font-feature-settings" : [10,34,16,0,25], 
"font-kerning" : [0,0,0,0,0], 
"font-language-override" : [0,0,0,0,0], 
"font-size-adjust" : [0,3,0,0,0], 
"font-stretch" : [0,0,0,0,0], 
"font-synthesis" : [0,0,0,0,0], 
"font-variant" : [ , , , , ], 
"font-variant-alternates" : [0,0,0,0,0], 
"font-variant-caps" : [0,0,0,0,0], 
"font-variant-east-asian" : [0,0,0,0,0], 
"font-variant-ligatures" : [0,0,0,0,0], 
"font-variant-numeric" : [0,0,0,0,0], 
"font-variant-position" : [0,0,0,0,0], 
"hanging-punctuation" : [0,0,0,0,0], 
"hyphens" : [10,6,13,5.1,0], 
"image-orientation" : [0,26,0,0,0], 
"image-rendering" : [0,0,0,0,11.6], 
"image-resolution" : [0,0,0,0,0], 
"justify-content" : [11,28,29,9,17], 
"line-break" : [5.5,0,1,0,0], 
"mark" : [0,0,0,0,0], 
"mark-after" : [0,0,0,0,0], 
"mark-before" : [0,0,0,0,0], 
"marks" : [0,0,0,0,0], 
"marquee-direction" : [0,0,0,0,0], 
"marquee-play-count" : [0,0,0,0,0], 
"marquee-speed" : [0,0,0,0,0], 
"marquee-style" : [0,0,0,0,0], 
"nav-down" : [0,0,0,0,11.5], 
"nav-index" : [0,0,0,0,11.5], 
"nav-left" : [0,0,0,0,11.5], 
"nav-right" : [0,0,0,0,11.5], 
"nav-up" : [0,0,0,0,11.5], 
"object-fit" : [0,36,31,7.1,19], 
"object-position" : [0,36,31,0,19], 
"opacity" : [9,2,4,3.1,9], 
"order" : [11,28,29,9,17], 
"outline-offset" : [0,3.5,4,3,10.5], 
"overflow-wrap" : [9,3.5,0,3,9.5], 
"overflow-x" : [9,3.5,4,3,9.5], 
"overflow-y" : [9,0,4,3,9.5], 
"@page" : [8,19,0,5,6], 
"perspective" : [10,16,36,9,23], 
"perspective-origin" : [10,16,36,9,23], 
"resize" : [0,5,4,4,15], 
"rest" : [0,0,0,0,0], 
"rest-after" : [0,0,0,0,0], 
"rest-before" : [0,0,0,0,0], 
"ruby-align" : [0,38,0,0,0], 
"tab-size" : [0,4,21,6.1,15], 
"text-align-last" : [5.5,12,35,0,0], 
"text-combine-upright" : [11,48,48,0,34], 
"text-decoration-color" : [0,6,0,0,0], 
"text-decoration-line" : [0,6,0,0,0], 
"text-decoration-style" : [0,6,0,0,0], 
"text-justify" : [5.5,0,0,0,0], 
"text-orientation" : [0,0,48,0,34], 
"text-overflow" : [6,7,4,3.1,11], 
"text-shadow" : [10,3.5,4,4,9.6], 
"text-underline-position" : [0,0,0,0,0], 
"transform" : [10,16,36,9,23], 
"transform-origin" : [10,16,36,9,23], 
"transform-style" : [11,16,36,9,23], 
"transition" : [10,16,26,6.1,12.1], 
"transition-delay" : [10,16,26,6.1,12.1], 
"transition-duration" : [10,16,26,6.1,12.1], 
"transition-property" : [10,16,26,6.1,12.1], 
"transition-timing-function" : [10,16,26,6.1,12.1], 
"word-break" : [5.5,15,4,3.1,15], 
"word-wrap" : [5.5,3.5,4,3.1,10.5], 
"writing-mode" : [9.0,41,8.0,5.1,15.0] 
}; 
		
	
   for (var key in rules) {
   	
  		 for (var x = 0; x < allCSSNames.length; x++){
  		 
   		 if( allCSSNames[x] == key ){
   		 	
				  if( rules[key][index] > minVersion ) { 
				      if( debug == 1) { 
				      	console.log(key + " may not work properly on " + browsers[index] + " < " + rules[key][index]);
						}
				  		minVersion = rules[key][index];
				  }    		 
				  
   		 }
   	 }
   	
   }

	return minVersion;
}




var showPopup = function ()
{ 
   document.documentElement.innerHTML += '\
      <div id="browse-dep-popup"> \
      <h1> Upss... </h1> \
      Your web browser does not meet minimal requirements to view this website.<br> \
      Consider upgrading your current web browser or downloading one of the below web browsers in the latest version. \
      <div style="margin-left:9%;position: absolute;bottom: 10%;"> \
      <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank"><img src="images/chrome.png" style="margin-left:10px;height:90px"></a> \
      <a href="https://www.mozilla.org/firefox/new/" target="_blank"><img src="images/firefox.png" style="margin-left:10px;height:90px"> </a>\
      <a href="http://www.opera.com/download" target="_blank"><img src="images/opera.png" style="margin-left:10px;height:90px"> </a>\
      <a href="https://www.microsoft.com/en-gb/download/internet-explorer.aspx" target="_blank"><img src="images/ie.png" style="margin-left:10px;height:90px"> </a>\
      <a href="https://www.microsoft.com/en-gb/download/internet-explorer.aspx" target="_blank"><img src="images/safari.png" style="margin-left:10px;height:90px"> </a>\
      </div></div>';
}

var browserDepCheck = function ( rules )
{   
			  // Set initial variables
			  
			  var failedDependencies = 0;
      
   		  // Get the setting variables
    
           if( rules["debug"] == 1 ){
                  var debug = 1;
                  delete rules["debug"];
            }
            
            if( rules["success"] ){
                  var success_url = rules["success"];
                  delete rules["success"];
            }
              
            if( rules["fail"] ){
                  var fail_url = rules["fail"];
                  delete rules["fail"];
            } 


      if( window.MSStream ){
               var agentString = window.MSStream;
               var array = agentString.split(";");
		   
      } else {
          var userAgent =  navigator.userAgent;
          console.log(userAgent);
          // Just in case if userAgent returns MSIE
          if(userAgent.includes("MSIE")){
               var array = userAgent.split(';');
          } else {
          	   userAgent.replace(/ /g,'');
               var array = userAgent.split(',');
          }
		  
      }

			
      for( var i = 0; i < array.length; i++ ){
        for ( var key in rules ) {
        	
         var string =  array[i].substring(array[i].indexOf( key ));
        	if( string.includes("MSIE") ){
            	var browser = string.split(' ')[0];
            	var version = parseInt(string.split(' ')[1]);
         }  else {
            	var browser = string.split('/')[0];
               var version = parseInt( string.split('/')[1] );
         }
        
         

            if( browser.includes( key ) ){

            if( version >= rules[key] ){		   		
            		if( debug == 1 ){ console.log("Browser requirements met: " + browser + " >= " + version ); }   		
            } else {
			   		if( debug == 1 ){ console.log("Browser requirements not met: " + browser + " < " + version ); }
			         failedDependencies++;
            }	
							   
            }
          }
      }
		
      if( failedDependencies > 0 ){
			
               // Failed dependency check, look for action on fail
               if( !fail_url ){
                  showPopup();
               } else {
                  window.location.href = fail_url;		
               }
				
       }	else {
				if( debug == 1 ){ alert ("You have passed!"); }
            // Passed dependency check, look for action on success
            if( success_url ){
               window.location.href = success_url;		
            }
		
      }	


   
}



