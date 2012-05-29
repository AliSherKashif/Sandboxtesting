var win = Titanium.UI.currentWindow;


//adding lable to top bar back button
var titlelabel=Titanium.UI.createLabel({
   
	top:'0%',
	width:'100%',
	height:'8.16%',
	color:'white',
	font:{fontSize:16, fontWeight:'bold'},
	text:'Rest Calls',
	textAlign:'center',
	backgroundColor:'black',
});
win.add(titlelabel);
//adding back button to title view
var backbutton=Titanium.UI.createButton({

	height:'5.78%',
	width:'16.51%',
	top:'1.24%',
	left:'2.18%',
	font:{fontSize:8, fontWeight:'bold'},
	//title:'BackB',
	//backgroundColor:'blue',
	backgroundImage:"backbutton.PNG",
	zIndex:1
});
win.add(backbutton);

backbutton.addEventListener('click',function(e){
	//Ti.App.fireEvent('show_indicator');
	var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();

});
//


/////adding button for Get Rest api

var getbutton=Titanium.UI.createButton({

	height:'9.3%',
	width:'71.4%',
	top:'10%',
	left:'14.3%',
	right:'14.3%',
	title:'Get API Call',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	
});
win.add(getbutton);

getbutton.addEventListener('click',function(e)
{

		//Ti.App.fireEvent('show_indicator');
		var win2=Titanium.UI.createWindow({
			navBarHidden:true,
			backgroundColor:"white",
			title:'Twitter',
			modal:true,
			url:'ui/common/twitter.js'
		});
		win.close();
		win2.open();
});


/////adding button for Post api

var postbutton=Titanium.UI.createButton({

	height:'9.3%',
	width:'71.4%',
	top:'20%',
	left:'14.3%',
	right:'14.3%',
	title:'Post API Call',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	
});
win.add(postbutton);

postbutton.addEventListener('click',function(e)
{
        //Ti.App.fireEvent('show_indicator');
		var win2=Titanium.UI.createWindow({
			navBarHidden:true,
			backgroundColor:"#0033CC",
			title:'Facebook',
			modal:true,
			url:'ui/common/facebook.js'
		});
		win.close();
		win2.open();
});
Ti.App.fireEvent('hide_indicator');

///// Back button of Android phone
win.addEventListener('android:back', function (e) {
  var homescreen = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 homescreen.open();
 
});