import { Link } from "react-router-dom";

export default function Root() {
    return (
        <div className=" bg-amber-600">
            this is the root
            <Link to={"/products"}>to the products</Link>
        </div>
    )
};
