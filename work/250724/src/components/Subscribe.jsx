import '../css/Subscribe.css';

function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <div className="img_box">
          <div className="circle_box" />
          <img src="/images/mailbox.png" alt="mailbox" />
        </div>
        <div className="sub_text_box">
          <p>Subscribe For The Lastest Updates</p>
          <p>Subscribe to newsletter and never miss the new post every week.</p>
        </div>
        <div className="sub_main_box">
          <input type="text" placeholder="Enter your email here..." />
          <button className="sub_btn">Subscribe</button>
        </div>
      </section>
    </>
  )
}

export default Subscribe;