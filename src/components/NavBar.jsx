import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function NavBar({ isDarkMode }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  const navList = (
    <ul className="mt-2 mb-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 sticky top-0 bg-white z-10">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <a href="#" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <a href="#" className="flex items-center">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <a href="" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 rounded-3xl shadow-lg backdrop-blur-[100px] ${
        isDarkMode ? "bg-gray-900" : "bg-[white]/10"
      } animate-float`}
      style={{
        animation: "float 3s ease-in-out infinite",
      }}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className={`mr-4 cursor-pointer py-1.5 font-bold text-xl ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Wang.<span style={{ color: "#DC7F60" }}>Dev</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {/* <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className={`hidden lg:inline-block ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <span>Log In</span>
          </Button>
          <Button
            variant="text"
            size="sm"
            className={`hidden lg:inline-block ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <span>Sign in</span>
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit lg:hidden outline-none focus:ring-0"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isDarkMode ? "#ffffff" : "#000000"}
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isDarkMode ? "#ffffff" : "#000000"}
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default NavBar;
