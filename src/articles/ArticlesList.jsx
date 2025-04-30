import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard.jsx";
import AnimatedCard from "./AnimatedCard.jsx";

const Empty = styled.div`
    text-align: center;
    padding: 4rem 0;
    opacity: 0;
    animation: fadeIn 0.6s ease-in-out forwards;
    animation-delay: 800ms;
`;

const EmptyText = styled.p`
    font-size: 1.25rem;
    color: var(--color-gray);
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
`;

function ArticlesList({ articles }) {
    if (articles.length === 0) {
        return (
            <Empty>
                <EmptyText>
                    No articles found. Try adjusting your search or category filter.
                </EmptyText>
            </Empty>
        );
    }

    return (
        <Grid
            initial="hidden"
            animate="visible"
        >
            {articles.map((article, index) => (
                 <AnimatedCard index={index}>
                     <ArticleCard article={article}/>
                 </AnimatedCard>
            ))}
        </Grid>
    );
}

export default ArticlesList;
