
import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";



function App() {

  const carinfo = {name: "Ford", model: "Mustang"};



  return (
    <>
    <h3>Exercise 1</h3>
    <Car carinfo={carinfo}/>
    <h3>Exercise 2</h3>
    <Events/>
    <h3>Exercise 3</h3>
    <Phone/>
    <h3>Exercise 4</h3>
    <Color/>
    </>
  );
}

export default App;
