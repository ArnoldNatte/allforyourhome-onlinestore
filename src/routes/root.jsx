import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="flex flex-col items-left bg-amber-100 text-4xl">
        <p>this is the root</p>
        <ul className="flex justify-around">
          <Link to={"/"}>go Home</Link>
          <Link to={"/products"}>to the products</Link>
          <Link to={"/shop"}>to the shop</Link>
        </ul>
      </header>
        <Outlet />
    <footer className="flex flex-col items-left bg-green-100 text-4xl">
        this is the footer
    </footer>
    </>
  );
}
