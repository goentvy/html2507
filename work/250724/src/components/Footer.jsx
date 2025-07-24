import '../css/Footer.css';

function Footer() {
  return (
    <>
        <footer>
            <div className="footer_main-wrap">
                <div className="about_blog">
                <div className="blog_logo">
                    <span className="logo_text">Entvy</span>
                    <span className="logo_point">.blog</span>
                </div>
                <p>Entvy Blog for Full Stack Developers</p>
                <div className="social_link">
                    <img src="/images/m.png" alt="M" />
                    <img src="/images/twitter.png" alt="twitter" />
                    <img src="/images/instagram.png" alt="instagram" />
                    <img src="/images/in.png" alt="linkedin" />
                </div>
                </div>
                <div className="footer_link">
                <ul className="link_category">
                    <li>CATEGORY</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Tailwind</li>
                    <li>React JS</li>
                    <li>More Category</li>
                </ul>
                <ul className="link_aboutme">
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Achievement</li>
                </ul>
                <ul className="link_call">
                    <li>GET IN TOUCH</li>
                    <li>+82-010-XXXX-XXXX</li>
                    <li>entvy7@naver.com</li>
                </ul>
                <ul className="link_followus">
                    <li>Medium</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
                </div>
            </div>
            <div className="footer_line" />
            <div className="footer_end">
                <div>© 2025 Entvy</div>
                <div>Made With ❤️ South Korea</div>
            </div>
        </footer>
    </>
  )
}

export default Footer;