import React from "react";
import heroImage from "../images/books.jpg";

//css for header styling
const headerStyle = {
    "backgroundImage": `url(${heroImage})`,
    "maxWidth": "100vw",
    height: "calc(100vw * .43333)",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return(
        <header style = {headerStyle}>
            <h1>Google Books Search (React)</h1>
            <p>A Way to Search for and Save Your Books of Interest</p>
        </header>
    );
}

export default Header;