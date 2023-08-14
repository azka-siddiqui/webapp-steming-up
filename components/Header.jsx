import "./Header.css"

const Header = () => {
    return (
        <>
            <nav id="navbar">

            <ul>
                <li>
                    <img src="images/Logo.png" />
                </li>
                <li>
                    <a href="a"><button type="button">CITIES FOR YOUTH</button></a>
                </li>
                <li>
                    <a href="a"><button type="button">OUR PARTNERS</button></a>
                </li>
                <li>
                    <a href="workshops.html"><button type="button">WORKSHOPS</button></a>
                </li>
                <li>
                    <a href="#banner"><button type="button">ABOUT</button></a>
                </li>
                <li>
                    <a href="a"><button type="button">BLOG</button></a>
                </li>
            </ul>
            </nav>
            
            <div class="banner">
                <img alt="banner image" class="banner image" src="./images/banner 1.jpg" />
            </div>
            
            <p class="absolute-position">
                Youth-led <br /> city building
            </p>
        </>
    )
}

export default Header