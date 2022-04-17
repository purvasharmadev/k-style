import { toast } from "react-toastify";

function notify(msg) {
  return toast.warning(msg, {
    toastId: "1",
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
}

export default notify;
