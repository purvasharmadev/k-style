import "../Styles/profile.css";
import { Userinfo } from "./UserInfo";
import { Address } from "./UserAddress";
import { useState} from "react"
// profile
function Profile() {
  const [Component, setComponent] = useState(<Userinfo />);

  return (
    <>
      <div className="m-top flex align-item-center flex-space-between">
        <button
          onClick={() => setComponent(<Userinfo />)}
          className="btn w-50 btn-primary container p-1"
        >
          Profile
        </button>
        <button
          onClick={() => setComponent(<Address />)}
          className="btn w-50 btn-info container p-1"
        >
          Address
        </button>
      </div>
      <div className="p-1">{Component}</div>
    </>
  );
}

export { Profile };
