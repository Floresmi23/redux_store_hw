import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function BoxPage(){

    const list = useSelector(state=>state["list"]);

    const params = useParams()

    const curObj = list.find(obj => obj.nm ===params.id);




    return(
        <div>
            <h1>{curObj.nm}</h1>
            <p>{curObj[0].message}</p>
            <p>{curObj[1].message2}</p>

        </div>
    )
}

export default BoxPage;