import React,{Component} from 'react'



const PokeContext = React.createContext();

class Provider extends Component{
    state = {
        Test:"test"        
    }
    
    render(){
        return(
            <PokeContext.Provider value={{
                ...this.state,
                //Test
    
               
            }}>
                {this.props.children}
            </PokeContext.Provider>
        )
    }
}

const Consumer = PokeContext.Consumer;

export {Provider,Consumer,PokeContext};