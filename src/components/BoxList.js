import Box from "./Box";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {add_item} from "../redux/actions/setActions";

function BoxList(){

    const [changed,setChanged]=React.useState(false);
    const [changed2,setChanged2]=React.useState(false);
    const [message, setMess]=React.useState("");
    const [message2, setMess2]=React.useState("");
    const [st, setSt]=React.useState("blue");

    const list = useSelector(state=>state.list);
    const dispatch =useDispatch();

    // Template
    // const [boxes, setBoxes]=React.useState([]);
    // const [count, setCount]=React.useState(0);
    // const [color, setColor}=React.useState("white");
    // const [changed,setChanged]=React.useState(false);



    // lifecycles go below your states

    React.useEffect(()=>{
        if(changed){
            setMess("");
            // //Changes Color
            // setSt("green");
        }else{
            setMess2("");
            // // Changes Color
            // setSt("red");
        }
    },[changed]);

/////////////////////////////////////////////////////////
    //Changes color not needed//

    React.useEffect(()=>{
        if(changed2){
            setSt("white");
        }else{
            setSt("white");
        }
    },[changed2]);

////////////////////////////////////////////////////////


    let boxEles = list.map((obj, idx)=>
        <Box key={idx} mess={obj.message} nm={obj.nm} mess2={obj.message2}/>
    )

    const add_person = (ps)=>{
        dispatch(add_item(ps));
        setChanged(!changed);
    }

    return(
        <div style={{backgroundColor:st}}>
            {boxEles}
            <button onClick={()=>add_person("Bobby")}>1</button>
            <button onClick={()=>setChanged2(!changed2)}>1</button>
            <h1>{message}</h1>
            <h1>{message2}</h1>
        </div>
    )
}

export default BoxList;