<html>
	<head>
		<title>Video Thumb v1.0</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="video-thumb.js" type="text/javascript"></script>
	</head>
	<body>
		<div style="width: 1000px;margin: 0 auto;">
			<div style="float:left;position:relative;">
				<span style="position: absolute; top: 5px; right: 10px;" id="sec"></span>
				<video width="500" id="video" src="big_buck_bunny.mp4" onerror="VideoThumb.failed(event)" controls="controls" preload="none"></video>
			</div>
			<div style="float:left;">
				<img width="500" id="testing" />
			</div>
		</div>
		<script>
			$(function(){
				var video = document.getElementById('video');
				VideoThumb.init('video');
				
				video.addEventListener("play", function(){
					var counter = 5;
					var interval = setInterval(function() {
						counter--;
						if (counter <= 0) {
							counter = 5;
							VideoThumb.thumb();
						}
						$("#sec").text(counter);
					}, 1000);
				});
			});
		</script>
	</body>
</html>