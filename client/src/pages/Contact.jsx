import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m448nrj', 'template_z8su6yp', form.current, {
        publicKey: 'N0gUCbFBxi4CX9fjU',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-300 to-purple-400 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-4 text-purple-700">Contact Me</h1>
        <p className="text-center text-gray-600 mb-6">
          Have questions or feedback about my project? Send me a message, I’d love to hear from you!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-500 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

