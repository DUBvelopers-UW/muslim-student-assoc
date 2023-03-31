import { NavLink } from "react-router-dom";

function NavItem ({pages}) {
    const subPages = pages.subPages.map((subPage) => 
        <NavLink to={pages.basePath + subPage.path} key={subPage.path}>{subPage.title}</NavLink>
    );

    return (
        <div className="navItem">
            <button className="dropbtn">
                <NavLink to={pages.basePath}>{pages.title}</NavLink>
            </button>
            <div className="dropdown-content">
                {subPages}
            </div>
        </div>
    );
}
export default NavItem;