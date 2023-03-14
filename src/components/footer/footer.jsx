import { Link } from "react-router-dom";
import { FooterNavMap } from "./footerNavMap";

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="credits">
          <h3 className="creditsHeading">
            Endless<span className="colorCredits">Demands</span>.com
          </h3>
          <p>Created by Ryan Van Den Eeckhout.</p>
          <p>Copyright &copy; EndlessDemands.com. </p>
          <p>All Rights Reserved.</p>
        </div>
        <aside>
          <ul>
            {FooterNavMap.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.NavLink}>{item.NavButton}</Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </footer>
  );
};
