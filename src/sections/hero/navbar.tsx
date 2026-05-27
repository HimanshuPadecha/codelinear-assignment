import React from "react";

const Navbar = () => {
  const items = ["SOLUTIONS", "RESOURCES", "ABOUT US"];
  return (
    <nav className="flex items-center justify-between w-[500px] bg-black">
      <span>N7</span>
      <div className="flex items-center justify-center">
        {items.map((navItem) => (
          <span>{navItem}</span>
        ))}
      </div>
      <button>REQUEST DEMO</button>
    </nav>
  );
};

export default Navbar;
