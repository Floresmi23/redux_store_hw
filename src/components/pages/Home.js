import React from "react";
import {useDispatch} from "react-redux";
import {add_item} from "../../redux/actions/setActions";

function Home(){

    const dispatch =useDispatch();
    const [form, setForm]=React.useState({
        nm: "",
        message: "",
        message2: ""
    })
    const [mess, setMess]=React.useState("");

    const handleChange = prop => event =>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    };

    const handleSubmit = () => {

        if(form.message.length>=2&&form.nm.length>=2&&form.message2.length){
            dispatch(add_item(form));
            setForm({
                nm: "",
                message: "",
                message2: ""
            })
            setMess("submitted");

        }else{
            setMess("error in submission");
        }
    }

    return(
        <div>
            <input type="text" placeholder={"name"} value={form.nm} onChange={handleChange("nm")}/>
            <input type="text" placeholder={"message"} value={form.message} onChange={handleChange("message")}/>
            <input type="text" placeholder={"text"} value={form.message2} onChange={handleChange("message2")}/>
            {/*<button onClick={()=>dispatch(add_item(form))}>Click Me</button>*/}
            <button onClick={handleSubmit}>Submit</button>
            <h3>{mess}</h3>
        </div>
    )
}

export default Home;