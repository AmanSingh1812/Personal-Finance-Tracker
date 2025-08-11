function Navbar() {
  return (
    <>
      <nav className="bg-blue-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className="text-2xl text-white font-black ">Project</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <a
                    href="#"
                    aria-current="page"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white  ml-260"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-blue-600 hover:text-white"
                  >
                    Transaction History
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
