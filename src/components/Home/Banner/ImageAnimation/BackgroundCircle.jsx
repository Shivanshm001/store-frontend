import { motion } from 'framer-motion';

export function BackgroundCircle({ className }) {
    return (
        <motion.div className={className}
            initial={{ scale: 0.4, y: -1000, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 4, type: "spring", repeat: Infinity, repeatDelay: 4, }}
            key={"yellow-circle"}>
        </motion.div>
    );
}