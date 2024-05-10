import "./Navbar.css"
/*function Navbar (){
    const iconStyles = {
        padding: "8px",
        color: "green",
        backgroundColor: "white",
    };
    return (
        <nav className="navbar">
            <div>
                <h2 style={{ backgroundColor: "teal"}}>L</h2>
                <h2 style={{ backgroundColor: "navy"}}>Voyaguer</h2>

            </div>
            <div>
                <p style={iconStyles}>icon</p>
                <p style={iconStyles}>icon</p>
                <p style={iconStyles}>icon</p>
            </div>
            </nav>
        );
}
export default Navbar;*/

function Navbar(props){
    

    //Links nos muestra el array pero props nos muestra el objeto de dentro
const links = props.links;
return(
    <nav className="navbar">
        <div>
            {/Comento comentario/}
            <h2 style={{ color:"#A87676"}}>Logo</h2>
            <h2 style={{ color:"#CA8787"}}>{props.header}</h2>
        </div>
        <div>
            {
            links.map((link) =>(
                <button key={link.id}>
                <a href="{link.link}">{link.text}</a>
                </button>
            ))
            }
        </div>
    </nav>
);
}

export default Navbar;
