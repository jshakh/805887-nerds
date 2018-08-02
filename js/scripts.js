

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
