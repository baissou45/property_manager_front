import { useRouteError } from "react-router-dom"

export default function Error404() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        404
    </div>
  )
}