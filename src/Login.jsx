import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1 className="mt-96 mb-5 text-center font-bold text-4xl">Login</h1>
      <ul className="text-center mt-5">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <label
            for="UserEmail"
            class="mt-10 w-1/5 mx-auto relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="UserEmail"
              name="email"
              placeholder="Email"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Email
            </span>
          </label>

          <label
            for="Password"
            class="mt-3 w-1/5 mx-auto relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Password
            </span>
          </label>

          <button className="mt-4 rounded-lg bg-blue-600 text-white w-16 text-center" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
