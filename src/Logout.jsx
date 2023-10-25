import axios from "axios";

export function LogoutLink() {
  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="/" onClick={handleLogout}>
      Logout
    </a>
  );
}
