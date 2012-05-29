/*globals Titanium, Ti, alert, require, setTimeout, setInterval, JSON*/
var win = Ti.UI.currentWindow;
var fstatus=Titanium.App.Properties.getString("fstatus");
Titanium.Facebook.appid = "134793934930";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];

function showRequestResult(e) {
	var s = '';
	if (e.success) {
		s = "SUCCESS";
		if (e.result) {
			s += "; " + e.result;
		}
		if (e.data) {
			s += "; " + e.data;
		}
		if (!e.result && !e.data) {
			s = '"success", but no data from FB.  I am guessing you cancelled the dialog.';
		}
	} else if (e.cancelled) {
		s = "CANCELLED";
	} else {
		s = "FAIL";
		if (e.error) {
			s += "; " + e.error;
		}
	}
	alert(s);
}

var login = Titanium.Facebook.createLoginButton({
	top: 10, style:'wide'
});
win.add(login);

var actionsView = Ti.UI.createView({
	top: 55, left: 0, right: 0, visible: Titanium.Facebook.loggedIn, height: 'auto'
});

Titanium.Facebook.addEventListener('login', function(e) {
	if (e.success) {
		actionsView.show();
	}
	if (e.error) {
		alert(e.error);
	}
});

Titanium.Facebook.addEventListener('logout', function(e){
	var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();
});

var statusText = Ti.UI.createTextField({
	top: 0, left: 10, right: 10, height: 40,
	value:fstatus
	//hintText: 'Enter your FB status'
});
actionsView.add(statusText);
var statusBtn = Ti.UI.createButton({
	title: 'Publish status',
	top: 45, left: 10, right: 10, height: 40
});
statusBtn.addEventListener('click', function() {
	Titanium.Facebook.requestWithGraphPath('me/feed', {message: statusText.value}, "POST", showRequestResult);
	statusText.value='';
	var WindowLoginnew = Ti.UI.createWindow({
    title:'Home',
    backgroundColor:'white',
    url:'ui/common/home.js'
 });
 win.close();
 WindowLoginnew.open();
	
});
actionsView.add(statusBtn);


win.add(actionsView);

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

