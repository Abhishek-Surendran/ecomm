import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Page doesn't exists</h1>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
}

export default NotFound;
