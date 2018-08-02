

		function animations() {
			var elem = document.getElementById("my-modal");


			elem.classList.remove('bounceInDown');
			elem.classList.remove('animated');
			elem.classList.remove('shake');
			
			

			
			elem.classList.add('animated');
			elem.classList.add('shake');
				
			
			

			
		}
		//Map Initialization
		function initialize() {
	        var mapOptions = {
	          zoom: 17,
	          center: new google.maps.LatLng(59.9387942,30.3230833)
	        }
	        var map = new google.maps.Map(document.getElementById('map-canvas'),
	                                      mapOptions);

	        var image = 'img/map-marker.png';
	        var myLatLng = new google.maps.LatLng(59.9387942,30.3230833);
	        var nerdsMarker = new google.maps.Marker({
	            position: myLatLng,
	            map: map,
	            icon: image
	        });
      	}

	      google.maps.event.addDomListener(window, 'load', initialize);

	      //JavaScript for modal
	      // Get the modal
	      var modal = document.getElementById('my-modal');

	      // Get the button that opens the modal
	      var btn = document.getElementById("modal-btn");

	      // Get the <span> element that closes the modal
	      var close = document.getElementsByClassName("modal-close")[0];

	      // When the user clicks on the button, open the modal
	      btn.onclick = function(e) {
	          e.preventDefault();
	          modal.style.display = "block";

	          if(modal.classList.contains('shake')){
				 	modal.classList.replace('shake', 'bounceInDown'); 
				}
	      }

	      // When the user clicks on <span> (x), close the modal
	      close.onclick = function() {
	          modal.style.display = "none";
	      }

	      // When the user clicks anywhere outside of the modal, close it
	      window.onclick = function(event) {
	          if (event.target == modal) {
	              modal.style.display = "none";
	          }
	      } 

	      document.getElementById('btn-modal').onclick = function(e){
	      	e.preventDefault()

	      	// animations();


	      	if(document.getElementById('user-name').value.length == 0 || 
	      		document.getElementById('user-email').value.length == 0 || 
	      		document.getElementById('letter').value.length == 0){

		 	     var elem = document.getElementById('my-modal');


				 
				 if(elem.classList.contains('bounceInDown')){
				 	elem.classList.replace('bounceInDown', 'shake'); 
				 
				 }else if(elem.classList.contains('shake')){

					document.getElementById('my-modal').classList.remove("shake")
				 	document.getElementById('my-modal').classList.add("shake")
				 
				 }
				 
				 // elem.classList.add('animated');
				 // elem.classList.add('shake'); // Add .fade-in class

				  
	      	}
	      	
	      }

	     