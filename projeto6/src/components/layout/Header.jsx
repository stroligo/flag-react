export function Header() {
  return (
    <header>
      <nav className="bg-red-200 ">
        <div className="container mx-auto flex p-6 justify-center md:justify-between items-center">
          <div className="">
            <div className="flex gap-5 items-center">
              <img className="w-10 h-10" src="" alt="Logo do blog" />
              <span className="text-black">Title</span>
            </div>
          </div>

          <ul className="hidden md:flex gap-10">
            <li className="hover:text-red-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-red-500">
              <a href="/add-location">Add Location</a>
            </li>
            <li className="hover:text-red-500">
              <a href="/the-traveler">The Traveler</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
