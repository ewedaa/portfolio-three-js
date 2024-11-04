function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-between flex-wrap gap-5">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/mostafaghorab11"
          target="_blank"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/mostafaghor4b/"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.png"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </a>
        <a href="https:x.com/ghor4b" target="_blank" className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
      <p className="text-white-500">
        © 2025 Mostafa Ghorab. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
