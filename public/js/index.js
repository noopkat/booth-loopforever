(function() {

	var session = {
    audio: false,
    video: true
	};

	var mediaElement = document.getElementById('yesss');
 
	var recordRTC;
	 
	navigator.getUserMedia(session, function(mediaStream) {

	 	var options = {
		   type: 'gif',
		   frameRate: 200,
		   quality: 10
		};

		var recordRTC = RecordRTC(mediaStream, options);

		recordRTC.startRecording();

		setTimeout(stopAndShow, 3000);

		function stopAndShow() {

			recordRTC.stopRecording(function(gifURL) {
		   		mediaElement.src = gifURL;
		   		console.log(gifURL)
				});
			}

		}, function() { /* do error handling in here eventually */ });

})();