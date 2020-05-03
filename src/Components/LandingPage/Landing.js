import React, { useState,useContext,useHistory, useEffect  } from 'react';
import { Typography  } from 'antd';
import { Skeleton, List, Avatar } from 'antd';
import { Card } from 'antd';
import {PokeContext} from '../../Context';
const { Title } = Typography;
const { Meta } = Card;

const Landing = (props) =>{
    const Context = useContext(PokeContext);
    const [load,setLoaded] = useState(false);
    const [items,SetItems] = useState([]);
    useEffect(()=>{
        if(!load)
        {
            fetch("https://pokeapi.co/api/v2/item").then(x=>x.json()).then(y=>
                {
                    setTimeout(function(){
                        y.results.forEach(e => {
                            e.ImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/"+e.name+".png";
                            
                        });
                        SetItems(y.results);
                        setLoaded(true);
                        console.log(y.results);
                    },3000)
                    
                    
                    
                })
        }
       
        
    },[])
    return (
        <React.Fragment>
            {items.Length == 0 ? (
                    <Skeleton loading={true} active Paragraph={{rows:'10'}}>
                    </Skeleton>
            ) : (
            <React.Fragment>
               {items.map(x=>{
                   return (
                    <Card
                    hoverable
                    style={{ width: 200,float:'left' }}
                    cover={<img alt="example" src={x.ImgUrl} />}
                  >
                    {/* <Meta title={x.name} description="www.instagram.com" /> */}
                    <Meta title={x.name} />
                  </Card>
                   )
                   
                   })}
            </React.Fragment>
            )
            }
        </React.Fragment>
    )
}
export default Landing;