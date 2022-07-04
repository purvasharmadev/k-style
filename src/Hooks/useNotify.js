import { toast } from "react-toastify";

export const useNotify = (msg,id,type,time) => {
  return toast[type](msg, {
    toastId: id,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: time ? time : 2000,
  });
   };

