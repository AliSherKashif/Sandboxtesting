//Application Window Component Constructor
function ApplicationWindow() {
/*	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	
	return self;
	
*/	
	////  Home Screen   

var win=Titanium.UI.createWindow({
	url:'ui/common/home.js'
	
 	
});


//win.open();


	
	
	
	return win;
	
	
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
