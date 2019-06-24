chrome.runtime.onMessageExternal.addListener((request, sender, senderResponse) =>  {

	chrome.storage.sync.get('shortcutKey', function(chromeStorage){
		shortcutKey = chromeStorage.shortcutKey === undefined ? '[': chromeStorage.shortcutKey;

		senderResponse({key: shortcutKey});
	});
	
	

})