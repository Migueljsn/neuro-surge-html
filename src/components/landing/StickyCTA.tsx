import { motion } from "framer-motion";


const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-0 p-0 bg-deep-blue/95 backdrop-blur border-t border-glow-purple/20 md:hidden"
    >
    </motion.div>
  );
};

export default StickyCTA;
