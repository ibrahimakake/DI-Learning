import React, { Component } from 'react';



class Child extends Component {
    constructor(){
        super()
    }

    componentWillUnmount(){
        alert("The component named Header will is about to be unmonted")
    }
        
    
    render(){
        return(
          <div>
            <header>Hello World !</header>
            
          </div>
        )
    }
}


class ColorComponent extends Component {
    constructor(){
        super()
            this.state = {
                favoriteColor: 'red',
                show: true
              }
        
    }
  

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  shouldComponentUpdate() {
    return true; 
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000); 
  }


  componentDidUpdate(){
    console.log("after update")
  }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }


    handleDelete = () => {
        this.setState({ show: false });
      };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        <h2>Exercice3</h2>
        <div>
        {this.state.show ? <Child /> : null}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
      </div>
    );
  }
}

export default ColorComponent;
