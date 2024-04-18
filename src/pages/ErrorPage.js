import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-light text-center pt-5" style="height: 100vh;">
      <div className="container">
        <h1 className="display-1 pt-5 font-weight-bold">{error.statusText}</h1>
        <h1 className="display-4 pt-1 pb-3">Something is wrong!</h1>
        <h3 className="font-weight-light text-secondary">{error.message}</h3>
        <a href="#" className="btn btn-info mt-3 pt-3 pb-3 pr-4 pl-4">Return to home</a>
      </div>
    </div>
  );
}