import { useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <div className="status">Something went wrong</div>;
};
