// userinfo
function Userinfo() {
    const user = JSON.parse(localStorage.getItem("userInfo"));
  
    return (
      <div className="input-container">
        <img
          src="https://w0.peakpx.com/wallpaper/147/311/HD-wallpaper-bts-jungkook-bangtan-bangtan-sonyeondan-bts-bulletproof-boys-jeon-jungkook-jeon-jungkook-jungkook-jungkookie-thumbnail.jpg"
          alt="jk-pic"
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