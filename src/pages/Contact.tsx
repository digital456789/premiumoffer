import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Reach us instantly',
      value: 'Chat with us',
      link: 'https://wa.me/918742851341',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a message',
      value: 'support@premiumoffer.com',
      link: 'mailto:support@premiumoffer.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We are available',
      value: 'Mon - Fri: 9AM - 6PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Find us at',
      value: 'Online Worldwide',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products? We're here to help! Reach out to us through any of
            the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <info.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{info.description}</p>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-700 font-semibold text-lg">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Contact</h2>
          <p className="text-gray-600 text-lg mb-8">
            For the fastest response, reach out to us on WhatsApp. We typically respond within
            minutes during business hours.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918742851341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-colors font-semibold shadow-lg text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
