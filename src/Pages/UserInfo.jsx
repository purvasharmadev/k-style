// userinfo
function Userinfo() {
    const user = JSON.parse(localStorage.getItem("userInfo"));
  
    return (
      <div className="input-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8DweMma-rWymXLF3izM3bHnpexvKQPeZSDaitnE2kfOmDpa9zEmbALDq5MybVA6dcWY&usqp=CAU"
          alt="profile-pic"
          className="avatar avatar-md m-auto"
        />
        <h2 className="m-1">
          Hi! {user.firstName} {user.lastName}
        </h2>
        <h2 className="m-1">Email: {user.email}</h2>
      </div>
    );
  }
  
  export { Userinfo };