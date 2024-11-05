import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const serviceId = 'service_iscu5vu';
      const templateId = 'template_rv0pleb';
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Mostafa',
          from_email: form.email,
          to_email: 'mostafaghorab4business@gmail.com',
          message: form.message,
        },
        'MVM7GcqK9aI8zKVGp'
      );
      setIsLoading(false);
      setForm({
        name: '',
        email: '',
        message: '',
      });
      alert('Thank you. I will get back to you as soon as possible.');
    } catch (error) {
      setIsLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative pb-16 min-h-screen flex items-center justify-center flex-col">
        <img
          src="assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen h-full"
        />

        <div className="contact-container pt-20">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a new project to live, I&apos;m here to
            help you.
          </p>

          <form
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col space-y-7 mt-12"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                required
                defaultValue={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                required
                defaultValue={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                required
                defaultValue={form.message}
                rows={5}
                onChange={handleChange}
                className="field-input"
                placeholder="How can I help you?"
              />
            </label>

            <button type="submit" className="field-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
