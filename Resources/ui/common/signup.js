var win=Titanium.UI.currentWindow;

// background blue label of window
var bluelabel=Titanium.UI.createLabel({
   
	top:'0%',
	width:'100%',
	height:'100%',
	//color:'#0033CC	',
	//font:{fontSize:16, fontWeight:'bold'},
	//text:'New Pet',
	//textAlign:'center',
	backgroundColor:'#0033CC',
});
win.add(bluelabel);

//adding sign up lable about pet healthy
var signuplabel=Titanium.UI.createLabel({
   
	left:'14.64%',
	right:'21.38%',
	top:'44.6%',
	//width:'13.5%',
	height:'6%',
	color:'white	',
	font:{fontSize:14, fontWeight:'bold'},
	text:'Sign Up Information',
	textAlign:'left',
	//backgroundColor:'#0033CC',
});
win.add(signuplabel);

// adding email text field in window
var emailtf= null;
emailtf = Titanium.UI.createTextField({
			
			color:'#666666',
			height:'7%',
			top:'51.5%',
			left:'14.64%',
			right:'14.64%',
			width:'71.03%',
			font:{fontSize:10,fontweight:'bold'},	
			hintText:'Email\t\t\t\t\t\t\tRequired',
			//font:{fontSize:10},
			backgroundColor:'white',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win.add(emailtf);

// adding pasward text field
var passwardtf= null;
passwardtf = Titanium.UI.createTextField({
			
			passwordMask:true,
			color:'#666666',
			height:'7%',
			top:'59%',
			left:'14.64%',
			right:'14.64%',
			width:'71.03%',
			hintText:'Password\t\t\t\t\t\tRequired',
			font:{fontSize:10,fontweight:'bold'},
			//font:{fontSize:10},
			backgroundColor:'white',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win.add(passwardtf);

// adding verify password text field
var verifypasswordtf= null;
verifypasswordtf = Titanium.UI.createTextField({
			passwordMask:true,
			color:'#666666',
			height:'7%',
			top:'66.5%',
			left:'14.64%',
			right:'14.64%',
			width:'71.03%',
			font:{fontSize:10,fontweight:'bold'},	
			hintText:'Verify Password\t\t\t\tRequired',
			//font:{fontSize:10},
			backgroundColor:'white',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win.add(verifypasswordtf);

// adding first name text field
var firstnametf= null;
firstnametf = Titanium.UI.createTextField({
			
			
			color:'#666666',
			height:'7%',
			top:'74%',
			left:'14.64%',
			right:'14.64%',
			width:'71.03%',
			hintText:'First Name\t\t\t\t\t\tRequired',
			font:{fontSize:10,fontweight:'bold'},
			//font:{fontSize:10},
			backgroundColor:'white',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win.add(firstnametf);

// adding last name text field
var lastnametf= null;
lastnametf = Titanium.UI.createTextField({
			
			
			color:'#666666',
			height:'7%',
			top:'81.5%',
			left:'14.64%',
			right:'14.64%',
			width:'71.03%',
			hintText:'Last Name\t\t\t\t\t\tRequired',
			font:{fontSize:10,fontweight:'bold'},
			//font:{fontSize:10},
			backgroundColor:'white',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win.add(lastnametf);


//adding login button
var signupbutton=Titanium.UI.createButton({

	height:'8%',
	width:'72%',
	top:'89.5%',
	left:'14%',
	right:'14%',
	title:'Sign Up',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//backgroundImage:'plusbutton.png'
});
Ti.App.fireEvent('hide_indicator');
win.add(signupbutton);


signupbutton.addEventListener("click",function(){
	var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'#0033CC',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();


 });

/////   Android phone back button
win.addEventListener('android:back', function (e) {
  var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();
 
});
