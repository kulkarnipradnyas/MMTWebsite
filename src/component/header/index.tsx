import * as React from "react";
import "./header.scss";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { setOption } from "../../store/reducer/appReducer";
import DefaultPage from "../../component/defaultPage";

export const options: any = {
  HOME: <DefaultPage />,
  "ABOUT US": <DefaultPage />,
  SERVICES: <DefaultPage />,
  TRAINING: <DefaultPage />,
  CELEBRATION: <DefaultPage />,
  DOWNLOADS: <DefaultPage />,
  CONTACTS: <DefaultPage />,
};
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="headerParent">
      <div className="headers">
        <img src={logo} width="50px" height="50px" />

        {Object.keys(options).map((o, i) => (
          <a className="options" key={i} onClick={() => dispatch(setOption(o))}>
            {o}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
