window.addEventListener("load", function(event) {

	var editorExtensionId= "kaddohhipflahlnfhochifnhgellhbod";
	chrome.runtime.sendMessage(editorExtensionId, {key: "I need shortcutKey"},
		function(response){
			console.log(response.key);
			switchCaptions = response.key;

			var numCaptions = jwplayer().getCaptionsList().length;
			var currentCaption = 0;
	
			document.addEventListener('keyup', function(e){

			if(e.key === switchCaptions){
				currentCaption += 1;
				jwplayer().setCurrentCaptions(currentCaption % numCaptions);
			}
		});
	});	
});


