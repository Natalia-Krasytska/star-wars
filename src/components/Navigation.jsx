import Navitem from "./Navitem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <Navitem changePage={changePage}
                                               itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;