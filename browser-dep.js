var showPopup = function ( )
{ 
	document.documentElement.innerHTML += '\
	   <div id="browse-dep-popup"> \
		<h1> Upss... </h1> \
		Your web browser do not meet minimal requirements to view this website.<br> \
		Consider upgrading your current web browser or downloading one of the below web browsers in the latest version. \
		<div style="margin-left:15%;position: absolute;bottom: 10%;"> \
		<a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank"><img src="images/chrome.png" style="margin-left:10px;height:90px"></a> \
		<a href="https://www.mozilla.org/firefox/new/" target="_blank"><img src="images/firefox.png" style="margin-left:10px;height:90px"> </a>\
		<a href="http://www.opera.com/download" target="_blank"><img src="images/opera.png" style="margin-left:10px;height:90px"> </a>\
		<a href="https://www.microsoft.com/en-gb/download/internet-explorer.aspx" target="_blank"><img src="images/ie.png" style="margin-left:10px;height:90px"> </a>\
		</div></div>';
}

var browserDepCheck = function ( rules )
{   

    // Get the debug mode
    
      if( rules["debug"] ){
      	 if( rules["debug"] == 1 ){
      	      var debug = 1;
              delete rules["debug"];
      	 }
      }

   window.onload = function(){
   	
		var elem = document.getElementById('test');
	
		if( window.MSStream ){
			 var agentString = window.MSStream;
		    var array = agentString.split(";");
		   
		} else {
		    var userAgent =  navigator.userAgent;
		    
			 // Just in case if userAgent returns MSIE
			 if(userAgent.includes("MSIE")){
			    var array = userAgent.split(';');
			 } else {
			    var array = userAgent.split(',');
			 }
		    
		   
		}
	

		var failedDependencies = 0;
			
		for( var i = 0; i < array.length; i++ ){
			if(array[i].includes("MSIE")){
				var string =  array[i].substring(array[i].indexOf("MSIE"));
				var browser = string.split(' ')[0];
				var version = parseInt(string.split(' ')[1]);
			} else {
				var browser = array[i].split('/')[0];
				var version = parseInt( array[i].split('/')[1] );
			}
			
			for (var key in rules) {

			   if(browser.includes( key )){

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
			
			if( rules["fail"] ){
   	  		   var url = rules["fail"];
        	           delete rules["fail"];
   		        } else {
   		          var url = undefined;
   		        }
			
			if( !url ){
			    showPopup();
		         } else {
			    window.location.href = url;		
		        }
				
		      }	else {
				
		// Passed dependency check, look for action on success
		
	        if( rules["success"] ){
   	            var url = rules["success"];
                    delete rules["success"];
   	        } else {
   		    var url = undefined;
   	        }
		
		if( url ){
		   window.location.href = url;		
		}
		
	        }	

	};
   
}



