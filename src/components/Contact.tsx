import React, { useState, useRef } from 'react';
import { MapPin, GraduationCap, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
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

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asarasua/'
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      href: 'https://github.com/assarasua'
    },
    {
      icon: <Twitter size={18} />,
      label: 'X',
      href: 'https://x.com/assarasua'
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

            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-gray-200 hover:text-white hover:border-gray-500 transition-colors duration-200"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </a>
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
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center group"
              >
                <span className="mr-3">{t('contact.form.submit')}</span>
                <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
