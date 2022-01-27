import { Link } from "react-router-dom";
import '../../../body/itemListContainer/style.css'

const NavBarCategory = ({category}) => {
    return (
        <li><Link className="list" to={`/category/${category.id}`}>{category.description}</Link></li>
    )
}

export default NavBarCategory
