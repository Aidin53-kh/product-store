export const listVariants = { visible: { transition: { staggerChildren: 0.1 } } };

export const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 150 } },
};

export const logoVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.8 } },
};