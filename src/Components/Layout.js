import { Link } from "react-router-dom";

const Layout = ({ todo }) => {


    return (
        <>
            <Link to={todo.id.toString()} id="see-details"> See Details </Link>
        </>
    )
};

export default Layout;