import React, { useState, useRef } from 'react';
import { Mail, MapPin, GraduationCap, Send } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-bot honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmissionTime = useRef<number>(0);
  const [submissionCount, setSubmissionCount] = useState(0);
  
  // Enhanced rate limiting: 30 seconds between submissions, max 5 per session
  const SUBMISSION_COOLDOWN = 30000;
  const MAX_SUBMISSIONS_PER_SESSION = 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Session submission limit check
    if (submissionCount >= MAX_SUBMISSIONS_PER_SESSION) {
      toast.error('Maximum submissions reached for this session. Please refresh the page.');
      return;
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmissionTime.current < SUBMISSION_COOLDOWN) {
      const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime.current)) / 1000);
      toast.error(`Please wait ${remainingTime} seconds before submitting again.`);
      return;
    }

    // Honeypot check (anti-bot measure)
    if (formData.honeypot) {
      console.warn('Bot submission detected');
      return; // Silent failure for bots
    }

    // Enhanced input validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      toast.error('Name must be at least 2 characters long.');
      return;
    }

    if (trimmedMessage.length < 10) {
      toast.error('Message must be at least 10 characters long.');
      return;
    }

    if (trimmedMessage.length > 5000) {
      toast.error('Message is too long. Please keep it under 5000 characters.');
      return;
    }

    // Enhanced content filtering
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /vbscript:/gi,
      /on\w+\s*=/gi,
      /data:/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /eval\s*\(/gi,
      /document\./gi,
      /window\./gi
    ];

    const hasSuspiciousContent = suspiciousPatterns.some(pattern => 
      pattern.test(trimmedName) || pattern.test(trimmedMessage)
    );

    if (hasSuspiciousContent) {
      toast.error('Your message contains invalid content. Please remove any code or scripts.');
      return;
    }

    setIsSubmitting(true);
    lastSubmissionTime.current = now;
    
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
          message: formData.message,
          honeypot: formData.honeypot,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        toast.error('Contact saved but email notification failed.');
      } else {
        toast.success("Message sent successfully! I'll get back to you soon.");
      }

      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setSubmissionCount(prev => prev + 1);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "34654312863";
    const message = encodeURIComponent(t('contact.whatsapp.defaultMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: t('contact.location'),
      info: t('contact.locationValue'),
      link: null
    },
    {
      icon: <MapPin size={24} />,
      title: t('contact.heritage'),
      info: t('contact.heritageValue'),
      link: null
    },
    {
      icon: <GraduationCap size={24} />,
      title: t('contact.teaching'),
      info: t('contact.teachingValue'),
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">{t('contact.getInTouch')}</h3>
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
                <strong className="text-orange-400">{t('contact.bridgeDescription')}</strong>
                <br /><br />
                {t('contact.passionDescription')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              
              {/* Honeypot field - hidden from users, visible to bots */}
              <div style={{ display: 'none' }}>
                <label htmlFor="website">Website (leave blank):</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20b559] rounded-full shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        title={t('contact.whatsapp.title')}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </div>
    </section>
  );
};

export default Contact;