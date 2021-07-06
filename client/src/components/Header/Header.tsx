import { useState } from "react";

const Header = () => {
  const [spin, setSpin] = useState(false);
  const [menu, setMenu] = useState(false);

  const triggerSpin = () => {
    setSpin(true);
    setTimeout(function () {
      setSpin(false);
    }, 1000);
  };

  const menuTrigger = () => {
    setMenu(!menu);
  };

  return (
    <div className="dashboard-header">
      <div className="flex-row">
        <div className="logo-small" onClick={() => menuTrigger} />
        <h3>SWARMWATCH</h3>
      </div>
      <div className="flex-row">
        <i
          className={`reload-icon ${spin === true ? "spin" : ""}`}
          onClick={spin ? () => {} : triggerSpin}
        />
        <i className="menu-list-icon" />
      </div>
    </div>
  );
};

export default Header;
