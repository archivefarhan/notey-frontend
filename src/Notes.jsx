import logo from "./assets/noteylogo.png";
import { useState, useEffect } from "react";
import axios from "axios";

export function Notes() {
  const [openText, setOpenText] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  const [notes, setNotes] = useState([]);

  const handleIndexNotes = () => {
    axios.get("http://localhost:3000/notes.json").then((response) => {
      console.log(response.data);
      setNotes(response.data);
    });
  };

  useEffect(handleIndexNotes, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white text-black">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Notes</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  2
                </span>
              </a>
            </li>

            <li>
              <a href="/login" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>

            <li>
              <a href="/signup" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 h-screen">
          <div className="mx-auto">
            {openText ? (
              <div className="mx-auto text-center m-2">
                <input placeholder="Title" className="w-full rounded-lg border border-blue-600 text-sm p-3 mb-2" />
                <textarea
                  className="w-full rounded-lg border-blue-600 p-3 text-sm"
                  placeholder="Note"
                  rows="8"
                ></textarea>
                <button className="rounded-lg w-16 p-1 bg-blue-600 text-white mb-2">Submit</button>
                <button className="rounded-lg w-16 p-1 bg-blue-600 text-white mb-2" onClick={() => setOpenText(false)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className="mx-auto text-center m-2 text-blue-600 font-bold border border-blue-600 rounded-xl w-auto">
                <button onClick={() => setOpenText(true)}>Add Note</button>
              </div>
            )}
          </div>
          {notes.map((note) => (
            <div
              key={note.id}
              className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
            >
              {openNote ? (
                <a onClick={() => setOpenNote(false)} className="text-2xl text-gray-400 dark:text-white">
                  {note.body}
                </a>
              ) : (
                <a onClick={() => setOpenNote(true)} className="text-2xl text-gray-400 dark:text-white">
                  {note.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
