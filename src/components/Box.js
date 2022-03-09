import React from "react";
import Style from "./Style";

//any other imports

function Box(props){

    const [num, setNum]= React.useState(0);
    const [color, setColor]= React.useState("");

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }



    let combine =()=>{
        addUp(props.number);
        setColor("green")
    }

    let style = {
        color: color
    }

    let pEles = [""].map((p ,idx )=>
        <p key={idx}>{p}</p>
    )



    return(
        <div style={{...Style.box, ...style}} onClick={combine}>
            <p>{props.nm}</p>
            <p>{props.mess}</p>
            <p>{props.mess2}</p>
            {/*<p>{num}</p>*/}
            {pEles}

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Box;


//========================================================================
//                            HINT for HW 1/25/22
//When you click on a box its going to check a number, refer it to an array
// Make it change the color/border for each item.
//========================================================================
