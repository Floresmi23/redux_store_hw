import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/boxes"}>Blog</Link>
            <Link to={"/products"}>Products</Link>
        </nav>
    )
}
export default Nav;