import { motion } from "framer-motion";

const productGroupVariants = {
	visible: {
		transition: { staggerChildren: 0.06 },
	},
};

const ProductsGroup: React.FC = ({ children }) => {
    return (
        <motion.div
				className="grid gap-2 md:gap-3 lg:gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3  3xl:grid-cols-4 5xl:grid-cols-5"
				variants={productGroupVariants}
				initial="hidden"
				animate="visible"
		>
            {children}
        </motion.div>
    );
}
 
export default ProductsGroup;