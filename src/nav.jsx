import "./nav.css"


function Nav({ setPage }){
    return (
        <div>
            <ul>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("about")}>About</li>
                <li onClick={() => setPage("help")}>Shop</li>
            </ul>
        </div>
    )
}
export default Nav