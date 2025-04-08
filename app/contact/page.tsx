import { Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Contact
              </span>{" "}
              Us
            </h1>
            <p className="text-xl text-white/80">Have questions or need assistance? Our team is here to help you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-white/70 mb-1">General Inquiries:</p>
                    <a href="mailto:info@vestrocloud.com" className="text-amber-300 hover:underline">
                      info@vestrocloud.com
                    </a>
                    <p className="text-white/70 mt-3 mb-1">Support:</p>
                    <a href="mailto:support@vestrocloud.com" className="text-amber-300 hover:underline">
                      support@vestrocloud.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-pink-600/30 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-white/70">
                      Block No. B-1, Umiyaji Park,
                      <br />
                      Kolki Road, Opp. New Police Line,
                      <br />
                      Upleta Lati Plot, Upleta Police Station,
                      <br />
                      Upleta, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-white/70">Our support team is available 24/7 for urgent technical issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
