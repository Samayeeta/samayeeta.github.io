import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojvyqro", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container" data-aos="fade-up">
        <h2 className="section-headline">Get In Touch</h2>

        {status === 'success' ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--card-bg)',
            borderRadius: '16px',
            border: '1px solid var(--accent-color)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Thanks!</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Your message has been received. I'll get back to you soon!</p>
            <button
              onClick={() => setStatus('')}
              className="btn-cta"
              style={{ marginTop: '2rem', fontSize: '0.8rem' }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              marginBottom: '4rem',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 4rem'
            }}>
              If you have a project in mind or just want to say hi, feel free to drop a message!
              I'll get back to you as soon as I can.
            </p>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'SENDING...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#ff4d5a', marginTop: '1rem', textAlign: 'center', fontWeight: 600 }}>
                  Oops! There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </>
        )}

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Or reach out via socials</p>
          <a href="https://linkedin.com/in/samayeeta-maitra" target="_blank" rel="noreferrer" className="btn-cta" style={{ fontSize: '0.8rem' }}>
            LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
}