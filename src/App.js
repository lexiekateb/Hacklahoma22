import logo from './logo.png';
import button from './plus-button.png';
import './App.css';

function App() {
  return (
    <div class Name="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Create your profile below!</h1>
      </header>
	<p> Click the button to add your profile. </p>
    </div>
  );
}

var butto =
document.createElement("butto");
butto.innerHTML = "Create Profile"

var body =
document.getElementsByTagName("body") [0];
body.appendChild(butto);

butto.addEventListener ("click",
function() {
  let name = prompt("Please enter your name", "Enter here");
  if(name != null) {
    let major = prompt("Please enter your major", "Enter here");
  }
});

export default App;
