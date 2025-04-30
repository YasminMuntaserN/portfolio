import React, { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

function AnimatedCard({ children, index }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                },
            }}
            style={{
                zIndex: 100 - index,
                marginTop: index !== 0 ? '-10px' : '0',
            }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedCard;
