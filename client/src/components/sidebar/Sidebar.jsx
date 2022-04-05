import "./sidebar.css";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  let activeItemed = sidebar_items.map((val, i) => {
    let dat = val.subNav
      ? val.subNav.findIndex((item) => item.route === props.location.pathname)
      : null;
    return dat;
  });
  const [Ind, setInd] = useState(null);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        {/* logo */}
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items.map((item, index) => {
        if (item.subNav) {
          return (
            <div onClick={() => setInd(index)} key={index}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              />
              <div style={{
                  marginLeft:'12%'
              }}>
                {Ind === index && item.subNav
                  ? item.subNav.map((item, inde) => {
                      return (
                        <Link to={item.route} key={inde}>
                          <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={inde === activeItemed[index]}
                          />
                        </Link>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        } else {
          return (
            <Link to={item.route} key={index} onClick={() => setInd(null)}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Sidebar;
