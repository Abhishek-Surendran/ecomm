import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <div className="text-center"></div>
    <h1 className="text-3xl font-bold">Page doesn't exists</h1>
    <Link to="/">Go Home</Link>
    </>
  )
}

export default NotFound;
