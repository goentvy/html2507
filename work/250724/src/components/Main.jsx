import '../css/Main.css';

function Main() {
  return (
    <>
        <main>
            <div className="main_content_wrap">
            <h1>
                Hi, I'm Entvy
                <br />
                Front End Dev
            </h1>
            <p>
                On this blog I share tips and tricks, frameworks, projects, tutorials,
                etc Make sure you subscribe to get the latest updates
            </p>
            <div className="main_box">
                <input type="text" placeholder="Enter your email here..." />
                <button className="sub_btn">Subscribe</button>
            </div>
            </div>
            <div className="main_content_img">
            <img src="/images/learn_coding.png" alt="learn_coding" />
            </div>
        </main>
        <div className="main_scroll">
            <img src="/images/arrow_down.png" alt="scroll_btn" />
        </div>
    </>
  )
}

export default Main;