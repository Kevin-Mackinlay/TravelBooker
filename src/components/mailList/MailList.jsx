import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Maximize Time, Minimize Cost</h1>
      <span className="mailDesc">Sign up for great deals!</span>
      <div className="mailInputContainer">
        <input type="text " placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList