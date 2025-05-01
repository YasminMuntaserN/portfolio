import styled from "styled-components";
import {useMediaQuery} from "../hooks/useMediaQuery.js";

const Container = styled.div`
    margin-bottom: 2.5rem;
    animation: fadeIn 0.6s ease-in-out forwards;
    animation-delay: 600ms;
`;

const TabList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
`;
const Tab = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 9999px;
    border: none ;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s;
    transform-origin: center;
&.active {
    background-color: var(--second-color);
    color: var(--color-white);
  }

  &.inactive {
    background-color: var(--color-gray);
    color: var(--color-border);
  }
  &.hover{
   transform: scale(1.05);
  }
  
`;
const CategoryTabs = ({
                       categories,
                       activeCategory,
                       onSelectCategory }) => {
    const isMobile =useMediaQuery("(max-width: 600px)");
    return (
        <Container>
            <TabList>
                {categories.map((category) => (
                    <Tab
                        key={category.id}
                        className={activeCategory === category.id ? "active" : "inactive"}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        {category.icon}
                        {  !isMobile && category.label }
                    </Tab>
                ))}
            </TabList>
        </Container>
    );
};

export default CategoryTabs;