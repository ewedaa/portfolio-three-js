import { socialLinks } from "../constants";

function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-between flex-wrap gap-5">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map(({ id, name, image, link }) => (
          <a key={id} href={link} target="_blank" className="social-icon">
            <img src={image} alt={name} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>
      <p className="text-white-500">© 2025 DVM Ewida. All rights reserved.</p>
    </section>
  );
}

export default Footer;
