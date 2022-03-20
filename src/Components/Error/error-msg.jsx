import { Link } from "react-router-dom";

function ErrorMsg(props) {
  return (
    <div
      style={{ height: "21.875rem" }}
      className="flex flex-space-center align-item-center container"
    >
      <div className="snackbar">
        {props.msg}
        <Link to="/" className="link color-white">
          <span> Retry </span>
        </Link>
      </div>
    </div>
  );
}

export { ErrorMsg };
