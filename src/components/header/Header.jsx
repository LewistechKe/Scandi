import './header-styles.css'
import { Link ,useLocation } from 'react-router-dom'

export const Header = () => {
    const {pathname} = useLocation();
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <h3>{pathname == '/addProduct'? 'Product Add' : 'Product List'}</h3>
                </div>
                <div className="header-right">
                    <Link to="/addProduct" ><button className="add-btn">{pathname == '/addProduct'? 'Save' : 'ADD'}</button></Link>
                    <button className="del-btn">{pathname == '/addProduct' ? 'Cancel' : 'Mass Delete'}</button>
                </div>
            </div>
        </>
    )
}