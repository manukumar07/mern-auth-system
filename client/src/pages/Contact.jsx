import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import toast from "react-hot-toast";
import { Mail, Send, MessageCircle, Clock, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      "Message Sent! ✅ Thank you for your message. We'll get back to you soon."
    );

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@authpro.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "< 24 hours",
      description: "We're fast responders",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,#2563EB,#9333EA)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 bg-[linear-gradient(90deg,#2563EB,#9333EA)] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-[#6B7280] max-w-[34rem] mx-auto">
              We're here to help! Send us a message and we'll respond as quickly
              as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-up">
              <Card className="glass-card shadow-xl bg-[#FFFFFF]">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins flex items-center gap-2 text-[#111827]">
                    <MessageCircle className="w-6 h-6 text-[#a03ffa]" />
                    Send Message
                  </CardTitle>
                  <CardDescription className="text-[#6B7280]">
                    Fill out the form below and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#111827]">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-[#F9FAFB] text-[#111827] border-3 border-[#E5E7EB] hover:border-[#a03ffa] focus:border-[#a03ffa] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#111827]">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-[#F9FAFB] text-[#111827] border-3 border-[#E5E7EB] hover:border-[#a03ffa] focus:border-[#a03ffa] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#111827]">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-[#F9FAFB] text-[#111827] border-3 border-[#E5E7EB] hover:border-[#a03ffa] focus:border-[#a03ffa] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#111827]">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="bg-[#F9FAFB] text-[#111827] border-3 border-[#E5E7EB] hover:border-[#a03ffa] focus:border-[#a03ffa] transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1E40AF] transition-colors flex items-center justify-center bg-gradient-to-r from-[#967ffc] to-[#1D4ED8] h-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 fade-in-up">
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-4 text-[#111827]">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-[#6B7280]">
                  We're always excited to hear from developers and businesses
                  looking to improve their authentication systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="glass-card hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                          <item.icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-[#111827]">
                            {item.title}
                          </h3>
                          <p className="text-[#9e63fc] font-medium">
                            {item.info}
                          </p>
                          <p className="text-sm text-[#6B7280]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="glass-card bg-[#2563EB] text-[#FFFFFF] bg-gradient-to-r from-[#967ffc] to-[#1D4ED8]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-[#FFFFFF]" />
                    <h3 className="text-xl font-semibold">Global Support</h3>
                  </div>
                  <p className="opacity-90 text-[#F9FAFB]">
                    We provide support to teams worldwide. No matter where you
                    are, we're here to help you build secure, scalable
                    authentication systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
