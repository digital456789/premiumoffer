import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppCheckout = () => {
    const message = encodeURIComponent(`Hi, I want to buy ${product.title}. Please guide me.`);
    const whatsappUrl = `https://wa.me/918742851341?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={product.image_url}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold text-blue-600">${product.price}</span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppCheckout}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-semibold shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
