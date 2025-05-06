import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  delay?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative"
    >
      <div className="absolute left-[-2rem] top-1/2 w-8 h-[2px] bg-[#64ffda] opacity-50" />
      <div className="border-l-2 border-[#64ffda]/20 pl-6 py-4">
        <h1 className="text-[#64ffda] text-4xl mb-6 jarvis-text">
          {title}
        </h1>
      </div>
    </motion.section>
  );
};

export default SectionTitle;