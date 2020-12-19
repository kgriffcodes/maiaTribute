// const navListItem = document.querySelectorAll('.nav-list-item')

// Array.from(navListItem).forEach(element => element.addEventListener('click', expandNav))

// function expandNav(click){
// 	navListItem.style. 
// }

var darkModeButton = document.getElementById("darkMode");
var body = document.getElementsByTagName('body')[0];
var navie = document.getElementsByTagName('nav')[0];
// var whiteSects = document.getElementsByClassName('whiteTheme');
// var navText = document.querySelectorAll(.nav-text);


var darkModeEnabled = true;

function toggleDarkMode(){
	var stylin = document.getElementById("style.css");
	console.log('--Dark mode enabled before', darkModeEnabled)
	if (darkModeEnabled == true) {
		console.log('Dark mode is enabled');
		body.style.background = '#3d3635';
		// navie.style.background = '#FFFFFF';
		body.style.color = '#908164';
		// navie.style.color = '#3d3635';
		// stylin.href = "dark.Style.css";
		darkModeButton.innerHTML = 'Light Mode';
		darkModeEnabled = false;
	} else { //if (darkModeEnabled == false)
		console.log('Dark mode is disabled');
		body.style.background = '#e9dacb';
		navie.style.background = '#3d3635'
		body.style.color = '#3d3635';
		darkModeButton.innerHTML = 'Dark Mode';
		darkModeEnabled = true;
	}
	console.log('--Dark mode enabled after', darkModeEnabled)
}

darkModeButton.addEventListener('click', toggleDarkMode);