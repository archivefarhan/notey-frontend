import logo from "./assets/notey.png";

export function Home() {
  return (
    <div className="w-screen h-auto min-h-screen">
      <div className="flex">
        <img src={logo} className="mx-auto mt-96" />
      </div>
    </div>
  );
}
