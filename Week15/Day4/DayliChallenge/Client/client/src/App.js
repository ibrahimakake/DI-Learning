
import { Component, React } from 'react';

     class App extends Component {
     constructor(){
      super()
      this.state={
        message:null
      }
     }
     async componentDidMount(){
        const url = "https://localhost:3003/api/hello"
         try{
          const res = await fetch(url)
          const data = await res.text()
          console.log(data)
          //this.setState({message:data })
         }catch(err){
         console.error(err)
         }
        

      }
     render(){
         return (
    <div className="App">
      <header > hello world {this.state.message}</header>
    </div>
  );

     }
 
}

export default App;
