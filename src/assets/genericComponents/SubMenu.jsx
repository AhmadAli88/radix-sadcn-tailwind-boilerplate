import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";

export default function SubMenu(props) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };
  let location = useLocation();
  
  const isActive = props?.item?.pathList?.includes(location?.pathname) || props?.item?.path === location?.pathname;

  return (
    <div className="mb-1">
      {/* Main Menu Item */}
      <div
        className={`rounded-lg transition-colors duration-200 ${
          isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        {props?.item?.path ? (
          <Link
            to={props.item.path}
            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className={`text-lg ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {props?.item?.icon}
              </span>
              <span>{props?.item?.title}</span>
            </div>
            {props?.item?.subNav && (
              <span className="text-gray-400">
                {subnav ? (
                  <BsArrowDownShort size={20} />
                ) : (
                  <BsArrowRightShort size={20} />
                )}
              </span>
            )}
          </Link>
        ) : (
          <button
            onClick={showSubnav}
            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg text-left"
          >
            <div className="flex items-center space-x-3">
              <span className={`text-lg ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {props?.item?.icon}
              </span>
              <span>{props?.item?.title}</span>
            </div>
            {props?.item?.subNav && (
              <span className="text-gray-400">
                {subnav ? (
                  <BsArrowDownShort size={20} />
                ) : (
                  <BsArrowRightShort size={20} />
                )}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Submenu Items */}
      {subnav && props.item.subNav && (
        <div className="mt-1 ml-4 space-y-1">
          {props.item.subNav.map((navItem, idx) => (
            <div key={idx}>
              {navItem.subNav ? (
                <SubMenu item={navItem} />
              ) : (
                <Link
                  to={navItem?.path || '#'}
                  className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                    navItem?.pathList?.includes(location?.pathname)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={navItem?.onClick}
                >
                  <span className="text-base text-gray-400">
                    {navItem?.icon}
                  </span>
                  <span>{navItem.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}