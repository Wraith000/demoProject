import React,{useContext} from "react";
import {PokeContext} from '../../Context';

const Second = (props) =>{
    const Context = useContext(PokeContext);
    
    return (
        <React.Fragment>
            {Context.Test}
        </React.Fragment>
    )
}
export default Second;