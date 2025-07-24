import '../css/Header.css';

function Header() {
  return (
    <>
        <header>
            <div className="header_logo">
                <span className="logo_text">Entvy</span>
                <span className="logo_point">.blog</span>
            </div>
            <div className="nav_wrap">
                <div className="nav_link">
                <div>Home</div>
                <div>Category</div>
                <div>AboutMe</div>
                <div>
                    <img src="/images/search.png" alt="search" className="search" />
                    Search
                </div>
                </div>
                <div className="nav_cta">
                <img src="/images/coffee.png" alt="coffee" />
                BuyMeACoffee
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;