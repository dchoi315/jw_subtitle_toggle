chrome.storage.sync.get('shortcutKey', function(chromeStorage){
	
	document.getElementById('shortcutKey').value = chromeStorage.shortcutKey === undefined ? '[': chromeStorage.shortcutKey;
	shortcutKey = document.getElementById('shortcutKey').value
	document.getElementById('shortcutKey').addEventListener('keyup', function(e){
		chrome.storage.sync.set({'shortcutKey': e.key});
		document.getElementById('shortcutKey').value = e.key;
		console.log(e.key)	
	});	

});


