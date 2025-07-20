
import React, { useState } from 'react';
import { Mail, MapPin, GraduationCap, Send } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('bizkardo_contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        toast.error('Failed to save contact. Please try again.');
        return;
      }

      // Send emails via edge function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        toast.error('Contact saved but email notification failed.');
      } else {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
      }

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      info: "Bizkardo Baserria Ibarra",
      link: null
    },
    {
      icon: <MapPin size={24} />,
      title: "Heritage",
      info: "Basque Country",
      link: null
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Teaching",
      info: "NYU Stern School of Business",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Ready to build something meaningful together? Whether you're interested in fintech innovation, 
            product leadership, gamification strategies, or exploring opportunities in Africa, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-700/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-orange-400">Building bridges between cultures and innovation.</strong>
                <br /><br />
                I'm passionate about creating meaningful connections between Basque heritage and African innovation, 
                always looking for opportunities to apply gamification principles to solve real-world problems.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
