import React, { useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { getDataFromLocal } from "../Hooks/useLocalStorage";
import {useNotify} from "../Hooks/useNotify"

function Address() {
  // Reducer Function
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "FULLNAME":
        return { ...state, fullName: action.payload };
      case "ID":
        return { ...state, _id: action.payload };
      case "PHONE":
        return { ...state, pNo: action.payload };
      case "ADDRESS":
        return { ...state, address: action.payload };
      case "TOGGLE_BTN":
        return { ...state, toggle: action.payload };
      case "UPDATE_ITEM":
        return { ...state, updateItem: action.payload };
      case "ADDRESS_LIST":
        return { ...state, addressList: action.payload };
      case "DUMMY_ADDRESS":
        return {
          ...state,
          _id: uuid(),
          fullName: "Jane Doe",
          pNo: "092635100",
          address: "Myungong street, block 3, Busan, South Korea",
        };
      case "CLEAR_ADDRESS":
        return { ...state, _id: "", fullName: "", pNo: "", address: "" };
      case "ERROR_MSG":
        return { ...state, err: action.payload };
      default:
        return state;
    }
  };

  // useReducer
  const [state, dispatch] = useReducer(reducerFn, {
    _id: "",
    fullName: "",
    pNo: "",
    address: "",
    addressList: getDataFromLocal("address",[]),
    err: false,
    toggle: false,
    updateItem: null,
  });
  // Handle Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let add = {
      _id: uuid(),
      fullName: state.fullName,
      pNo: state.pNo,
      address: state.address,
    };
    
    if (state.fullName && state.pNo && state.address === "" ) {
        dispatch({ type: "ERROR_MSG", payload: false });

    } else if (state.toggle) {
      let newItem = list.map((item) => {
        if (item._id === state.updateItem._id) {
          const newItem = {
            ...item,
            _id: item._id,
            fullName: state.fullName,
            pNo: state.pNo,
            address: state.address,
          };
          useNotify("Address Updated","address-edit","success")
          return newItem;
        }
        return item;
      });
      dispatch({ type: "ADDRESS_LIST", payload: [...newItem] });
    } else {
        dispatch({ type: "CLEAR_ADDRESS" });
        useNotify("Address Added","address-add","success")
        return  dispatch({ type: "ADDRESS_LIST", payload: [...state.addressList, add] });



    }
    dispatch({ type: "CLEAR_ADDRESS" });
    dispatch({ type: "TOGGLE_BTN", payload: false });
  };

  // Saving address in localStorage
  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(state.addressList));
  }, [state.addressList]);

  let list = state.addressList;

  return (
    <>
      <div className="flex w-100 p-1 address">
        <div className="text-left mb-1">
          {/* form */}
          <form
            onSubmit={handleFormSubmit}
            className="form-container text-left"
          >
            {state.err && state.err ? (
              <h2 className="m-1">Input Fields are empty</h2>
            ) : (
              <h2>Address</h2>
            )}
            <label htmlFor="fullname"> Full Name </label>
            <input
              type="text"
              name="fullname"
              placeholder="enter your name"
              value={state.fullName}
              onChange={(e) => {
                dispatch({ type: "FULLNAME", payload: e.target.value });
              }}
            />
            <label htmlFor="phone">Phone number </label>
            <input
              type="number"
              name="phone"
              value={state.pNo}
              onChange={(e) => {
                dispatch({ type: "PHONE", payload: e.target.value });
              }}
              placeholder="enter your number"
            />
            <label htmlFor="address">Address </label>
            <input
              type="text"
              name="address"
              placeholder="enter your postal address"
              value={state.address}
              onChange={(e) => {
                dispatch({ type: "ADDRESS", payload: e.target.value });
              }}
            />

              <button
                type="submit"
                className="btn btn-primary input-btn-left m-1"
              >
                {state.toggle && state.toggle
                  ? "Update Address"
                  : "Add Address"}
              </button>

          </form>
          <button
                onClick={() => dispatch({ type: "DUMMY_ADDRESS" })}
                className="btn btn-primary input-btn-left m-1"
              >
                {" "}
                Dummy address{" "}
              </button>
        </div>

        {/* address container */}
        <div className="flex flex-wrap w-100">
          {list && list.length < 1 ? (
            <div className="container">
                <h2>Add Address</h2>
            </div>
          ) : (
            list &&
            list.map((item) => {
              return (
                <div key={item._id} className="card m-1">
                  <div className="card-heading p-1 color-primary bold">
                    {item.fullName}
                  </div>
                  <div className="card-body color-primary p-1">
                    <p>{item.address}</p>
                    <p>{item.pNo}</p>
                  </div>
                  <div className="flex flex-space-between color-primary bold p-1">
                    <p
                      onClick={() => {
                        const editItem = list.find(
                          (ele) => ele._id === item._id
                        );
                        dispatch({ type: "UPDATE_ITEM", payload: editItem });
                        dispatch({
                          type: "FULLNAME",
                          payload: editItem.fullName,
                        });
                        dispatch({ type: "PHONE", payload: editItem.pNo });
                        dispatch({
                          type: "ADDRESS",
                          payload: editItem.address,
                        });
                        dispatch({ type: "TOGGLE_BTN", payload: true });
                      }}
                      className="text-small pointer"
                    >
                      Edit
                    </p>
                    <p
                      onClick={() => {
                        const newList = list.filter(
                          (ele) => ele._id !== item._id
                        );
                        dispatch({ type: "ADDRESS_LIST", payload: newList });
                        useNotify("Address Deleted","address-delete","error")
                      }}
                      className="text-small pointer"
                    >
                      Delete
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export { Address };
