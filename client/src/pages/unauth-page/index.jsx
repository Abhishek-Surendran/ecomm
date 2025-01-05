import { Link } from "react-router-dom";

function UnauthPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold my-4">
        You don't have access to view this page
      </h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default UnauthPage;
