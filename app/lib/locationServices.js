exports.getUserLocation = function(_callback) {
	
	/*
	
	if (Ti.Geolocation.locationServicesEnabled) {
		Ti.Geolocation.purpose = 'Fornire informazioni rilevanti alla posizione dell\'utente';
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
		Ti.Geolocation.distanceFilter = 10;
		Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

		
		 Titanium.Geolocation.getCurrentPosition(function(e) {
		 if (e.error) {
		 alert('Error: ' + e.error);
		 } else {

		 var position = {
		 latitude : e.coords.latitude,
		 longitude : e.coords.longitude
		 };

		 Ti.API.info("COORDINATE UTENTE: " + JSON.stringify(position));
		 Alloy.Globals.userPosition = position;

		 _callback(position);

		 }
		 });
		 

	} else {
		alert('Abilitare i servizi di localizzazione per usufruire del servizio');
	}
	*/

	
	var position = {
		latitude : -37.800777,
		longitude : 175.320038
	};
	
	/*
	var position = {
		latitude : 41.8,
		longitude : 16.51
	};
	*/
	
	

	Ti.API.info("COORDINATE UTENTE: " + JSON.stringify(position));
	Alloy.Globals.userPosition = position;

	_callback(position);
	
	
	

};
