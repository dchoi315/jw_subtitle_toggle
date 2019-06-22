//TODO: Allow for the key to be changed later.




chrome.storage.sync.get("shortcutKey", function(key){

	switchCaptions = key.shortcutKey === undefined ? '[' : key.shortcutKey

	window.addEventListener("load", function(event) {

	var numCaptions = jwplayer().getCaptionsList().length

	var currentCaption = 0;

		document.addEventListener('keyup', function(e){

			if(e.key === switchCaptions){
				currentCaption += 1;
				jwplayer().setCurrentCaptions(currentCaption % numCaptions);
			}
		});

	});


});


