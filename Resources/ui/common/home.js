var activity = Ti.Android.currentActivity;
var win = Ti.UI.currentWindow;

var Cloud = require('ti.cloud');
Cloud.debug = true;
var CloudPush = require('ti.cloudpush');
CloudPush.debug = true;
CloudPush.enabled = true;

/// to get system current time
var d = new Date();

var curr_hour = d.getHours()-1;
var curr_min = d.getMinutes();
var curr_sec = d.getSeconds();
var curr_time = curr_hour+":"+curr_min+":"+curr_sec;        

//////   Adding List of buttons  /////////////////

/////adding cloud api call button

var login_button=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'2%',
	left:'14.3%',
	right:'14.3%',
	title:'Login',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});
//view1.add(cloudapi_button);

login_button.addEventListener('click',function(e)
{
	Ti.App.fireEvent('show_indicator');
Cloud.Users.login({
    login: 'test@mycompany.com',
    password: 'test_password'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('login Successfully');
        textArea.value=textArea.value+'\n'+'login Successfully!!!'+" "+curr_time+'\n'
        Ti.App.fireEvent('hide_indicator');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
            Ti.App.fireEvent('hide_indicator');
    }
});
});

///// adding Button 2

var subscribe_button=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'18%',
	left:'14.3%',
	right:'14.3%',
	title:'To Subscribe a Device',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});

subscribe_button.addEventListener('click',function(e)
{
	
Ti.App.fireEvent('show_indicator');

CloudPush.retrieveDeviceToken({
	
        success: function deviceTokenSuccess(e) {
        alert('Device Token: ' + e.deviceToken);
        textArea.value=textArea.value+'\n'+'Device Token: ' + e.deviceToken+" "+curr_time+'\n'
            
    Cloud.PushNotifications.subscribe({
    channel: 'alert',
    type:'android',
    device_token:e.deviceToken
}, 

function (e) {
    if (e.success) {
        alert('subscribe Success');
        textArea.value=textArea.value+'\n'+'Subscribe Successfully: ' +' '+curr_time+'\n';
        Ti.App.fireEvent('hide_indicator');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
            Ti.App.fireEvent('hide_indicator');
    }
});
            
            
    },
        error: function deviceTokenError(e) {
            alert('Failed to register for push! ' + e.error);
            Ti.App.fireEvent('hide_indicator');
        }
    });


});
    
CloudPush.addEventListener('callback', function (evt) {
        alert(evt.payload);
        textArea.value=textArea.value+'\n'+'Subscribe callback: '+evt.payload+" "+curr_time+'\n';
    });
    
CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
        Ti.API.info('Tray Click Launched App (app was not running)');
    });
    
 CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
        Ti.API.info('Tray Click Focused App (app was already running)');
    });    
/////adding Button 3

var notify_button=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'34%',
	left:'14.3%',
	right:'14.3%',
	title:'Notify a Device',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});

notify_button.addEventListener('click',function(e)
{
	Ti.App.fireEvent('show_indicator');
Cloud.PushNotifications.notify({
    channel: 'alert',
    payload: 'Welcome to push notifications'
}, function (e) {
    if (e.success) {
       alert('Notify Success');
        
        textArea.value=textArea.value+'\n'+'Notify Successfully!!! '+" "+curr_time+'\n';
        Ti.App.fireEvent('hide_indicator');
        
        
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
            Ti.App.fireEvent('hide_indicator');
    }
});

});

///// adding Button 4

var button4=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'50%',
	left:'14.3%',
	right:'14.3%',
	title:'Button4',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});
//view1.add(button4);

/////adding Button 5

var button5=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'66%',
	left:'14.3%',
	right:'14.3%',
	title:'Button5',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});
//view1.add(button5);

///// adding Button 6

var button6=Titanium.UI.createButton({

	height:'80%',
	width:'71.4%',
	//top:'82%',
	left:'14.3%',
	right:'14.3%',
	title:'Button6',
	font:{fontSize:16, fontWeight:'bold'},
	backgroundColor:'white',
	//zIndex:1
});
//view1.add(button6);

//////////
var rowData1=[];

for(var i=1;i<=6 ;i++)
    {
    	
    	 var row = Titanium.UI.createTableViewRow({height:'50px', width:'322px'});
    	 if(i==1)
    	 row.add(login_button);
    	 if(i==2)
    	 row.add(subscribe_button);
    	 if(i==3)
    	 row.add(notify_button);
    	 if(i==4)
    	 row.add(button4);
    	 if(i==5)
    	 row.add(button5);
    	 if(i==6)
    	 row.add(button6);
    	 //row.add(arrowbutton1);
    	 rowData1[i]=row;
    }
    	
/////   tableview for vertical buttons
var listbutton = Ti.UI.createTableView({
   		top:"0%",
   		height:"60%",
	    left:'0%',
	    width:'100%',
	    backgroundColor:'#0033CC',
	    separatorColor:'#0033CC',
	    data:rowData1
	    });
win.add(listbutton);
/////////////////////////////////////////////////////////


var textArea = Ti.UI.createTextArea({
  value : '',
  height :'40%',
  width : '100%',
  top : '60%',
  font : {fontSize:14, fontWeight:'bold'},
  color : '#888',
  textAlign : 'left',
  editable:false,
  //appearance : Ti.UI.KEYBOARD_APPEARANCE_ALERT,
  //keyboardType : Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  //returnKeyType : Ti.UI.RETURNKEY_EMERGENCY_CALL,
  borderWidth : 1,
  borderColor : '#bbb',
  borderRadius : 2
});
win.add(textArea);

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var menuItem = menu.add({ title: "Settings" });
 // menuItem.setIcon("item1.png");
  menuItem.addEventListener("click", function(e) {
    //alert("I was clicked");
    var settingsscreen=Titanium.UI.createWindow({
			navBarHidden:true,
			backgroundColor:"#0033CC",
			title:'Settings',
			modal:true,
			orientationModes:[Ti.UI.PORTRAIT],
	        windowSoftInputMode:Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
			url:'ui/common/setting.js'
		});
		win.close();
		settingsscreen.open();
		
  });
};



win.open();
