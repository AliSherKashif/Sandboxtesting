var win = Titanium.UI.currentWindow;



//adding lable to top bar back button
var titlelabel=Titanium.UI.createLabel({
   
	top:'0%',
	width:'100%',
	height:'8.16%',
	color:'white',
	font:{fontSize:16, fontWeight:'bold'},
	text:'Settings',
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

/////adding Settings Button 

var button1=Titanium.UI.createButton({

	height:'9.3%',
	width:'71.4%',
	top:'10%',
	left:'14.3%',
	right:'14.3%',
	title:'Settings Button',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//backgroundImage:'plusbutton.png'
});
win.add(button1);
Ti.App.fireEvent('hide_indicator');

/////  android phone back button
win.addEventListener('android:back', function (e) {
  var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();
 
});