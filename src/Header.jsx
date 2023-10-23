import logo from "./assets/noteylogo.png";

export function Header() {
  return (
    <nav class="fixed top-0 z-50 w-full bg-slate-100 border-b border-gray-200 ">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="/" class="flex ml-2 md:mr-24">
              <img src={logo} class="h-8 mr-3" alt="Notey Logo" />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Notey</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
