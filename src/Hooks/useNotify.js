import { toast } from "react-toastify";

export const useNotify = (msg,id,type) => {
  return toast[type](msg, {
    toastId: id,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
   };

