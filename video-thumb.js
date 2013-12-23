var VideoThumb = {

	video: null,
	canvas: null,
	
	init: function(el) {
		VideoThumb.video = document.getElementById(el);
		VideoThumb.canvas = document.createElement('canvas');
	},
	
	thumb: function() {
		var filename = VideoThumb.video.src;
		var w = VideoThumb.video.videoWidth;
		var h = VideoThumb.video.videoHeight;
		
		VideoThumb.canvas.width = w;
		VideoThumb.canvas.height = h;
		var ctx = VideoThumb.canvas.getContext('2d');
		ctx.drawImage(VideoThumb.video, 0, 0, w, h);
	
		var data = VideoThumb.canvas.toDataURL("image/jpg");
		return data;
		
	},
	
	failed: function(e) {
		switch (e.target.error.code) {
			case e.target.error.MEDIA_ERR_ABORTED:
				console.log('You aborted the video playback.');
			break;
			case e.target.error.MEDIA_ERR_NETWORK:
				console.log('A network error caused the video download to fail part-way.');
			break;
			case e.target.error.MEDIA_ERR_DECODE:
				console.log('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
			break;
			case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
				console.log('The video could not be loaded, either because the server or network failed or because the format is not supported.');
			break;
			default:
				console.log('An unknown error occurred.');
			break;
		}
	}
		
};