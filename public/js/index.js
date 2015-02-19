(function() {

	var session = {
    audio: false,
    video: true
	};

	var mediaElement = document.getElementById('yesss');
	var capture = document.getElementById('capture');
	var video = document.getElementById('vid');
	var recordRTC, options;
	 
	navigator.getUserMedia(session, function(mediaStream) {

		video.src = window.URL.createObjectURL(mediaStream);
		video.play();

	 	options = {
		   type: 'gif',
		   frameRate: 100,
		   quality: 10
		};

		recordRTC = RecordRTC(mediaStream, options);

		capture.addEventListener('click', function(e) {

			e.target.style.opacity = 0;
			video.style.display = 'inline-block';
			mediaElement.style.display = 'none';

			recordRTC.startRecording();

			setTimeout(stopAndShow, 2000);

			function stopAndShow() {

				recordRTC.stopRecording(function(gifURL) {

			   		mediaElement.src = gifURL;

			   		video.style.display = 'none';
			   		e.target.style.opacity = 1;
			   		mediaElement.style.display = 'inline-block';

					});

				}

			});

			}, function() { /* do error handling in here eventually */ });

})();