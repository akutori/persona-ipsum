import { useState } from "react";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      {menuOpen && <div>Menu</div>}
    </div>
  );
}

export default Menu;

