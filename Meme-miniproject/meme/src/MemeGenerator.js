import React from 'react'


class  MemeGenerator extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
           top_text: "",
           bottom_text : "",
           image : "http://i.imgflip.com/1bij.jpg",
           allMemeImgs : []
        }
    }

      componentDidMount() {
        const url = "https://api.imgflip.com/get_memes";

       fetch(url)
        .then((res)=>res.json())
        .then((response)=> {
            this.setState({ allMemeImgs: response.data.memes });
        })
       
      }

      handleChange1 = (e) => {
       
        this.setState(
          {
            top_text: e.target.value,
          
          }
        )
      }
      handleChange2 = (e) => {
       
        this.setState(
          {
            
            bottom_text: e.target.value
          }
        )
      }
       handleClick = (e)=>{
        e.preventDefault();
      console.log(this.state.allMemeImgs)
       this.setState(
       { image : this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url}
       )

    //this.setState({ image: allMemeImage });
       }
    
    render(){
        return (
            <div>
                <form className='meme-form'>
                    <input  value={this.state.top_text} placeholder="Top Text" onChange={this.handleChange1}/>
                    <input value={this.state.bottom_text} placeholder="Bottom Text" onChange={this.handleChange2}/>

                    <button onClick={this.handleClick}>
                        Gen
                    </button>
                </form>
                <div className='meme'>
                    <h2 className='top'>{this.state.top_text}</h2>
                     <img src={this.state.image} />        
                    <h2 className='bottom'>{this.state.bottom_text}</h2>
                </div>
            </div>
          )
    }
 
}

export default MemeGenerator


/*try {
          const response = await fetch(url)
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const allMemeImage = await response.json();
          console.log(json)
          this.setState({ image: allMemeImage });
        } catch(error) {
          console.log(error)
        }*/