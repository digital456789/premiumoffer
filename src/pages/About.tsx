import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'All our products are crafted with attention to detail and professional standards.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'We prioritize customer satisfaction and provide excellent support for all products.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Our tools and templates are designed to deliver measurable results for your business.',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Get immediate access to your digital products right after purchase.',
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate creators dedicated to providing high-quality digital
            products that empower businesses and individuals to achieve their goals. With years of
            experience in digital marketing, video production, and automation, we understand what
            it takes to succeed in today's digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our mission is to democratize access to professional-grade digital tools and resources.
            We believe that everyone should have the opportunity to create stunning content,
            automate their workflows, and grow their business without breaking the bank.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're a content creator, entrepreneur, or business owner, we're here to
            support your journey with products that are both affordable and effective.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
