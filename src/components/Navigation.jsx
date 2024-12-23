import { Link, NavLink } from "react-router-dom";
import { Navbar, DarkThemeToggle } from "flowbite-react";

const Navigation = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <Link to={`/`}>
        <Navbar.Brand as={"div"}>
          <img
            src="/logos/logo1.jpg"
            className="mr-3 h-10 w-10 sm:h-9 rounded-full"
            alt="Kings Height Realty"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The Kings Height Realty
          </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <DarkThemeToggle />
      <Navbar.Collapse>
        {[
          { path: "/", label: "Home" },
          { path: "/services", label: "Services" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact Us" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 font-bold"
                : "text-gray-900 dark:text-white"
            }
          >
            <Navbar.Link as={"div"}>{label}</Navbar.Link>
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
