import { Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in<span className="text-primary"> Touch </span>
        </h2>

        {/* Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a good
          conversation! Feel free to reach out if you'd like to work together,
          have a question, or simply want to connect.
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT - Contact Info */}
          <div className="pt-8">
        <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
        <div className="flex justify-center items-center space-x-6">
            <a
            href="https://www.linkedin.com/in/salsabilla-tri-andini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            >
            <Linkedin className="h-6 w-6" />
            </a>
            <a
            href="mailto:salsabillatriandini@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            >
            <Mail className="h-6 w-6" />
            </a>
        </div>
        </div>


          {/* RIGHT - Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent.");
              }}
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Salsabilla Tri Andini"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="salsabillatriandini@gmail.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cosmic-button w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
