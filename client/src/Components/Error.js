import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = new useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        {err.status + " " + err.statusText}
      </h2>

      <h2 className="text-gray-500 text-lg">Something went wrong</h2>
    </div>
  );
};

export default Error;
