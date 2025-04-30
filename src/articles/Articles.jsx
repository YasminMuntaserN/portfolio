import SectionHeader from "../ui/SectionHeader.jsx";
import {useState} from "react";
import {FaBookOpen, FaCode, FaDatabase, FaReact, FaRobot, FaServer} from "react-icons/fa";
import {IoLayers} from "react-icons/io5";
import styled from "styled-components";
import {articles} from "../data/data-Articles.js";
import CategoryTabs from "./CategoryTabs.jsx";
import ArticlesList from "./ArticlesList.jsx";
import Pagination from "./Pagination.jsx";
import {usePagination} from "../PaginationContext.jsx";
import {RiFunctionFill} from "react-icons/ri";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: colors 0.3s;
    gap: 2rem;
    margin:10px auto;
    padding:80px;
`;
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--color-white);
`;

const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--main-color);
    animation: fadeIn 0.6s ease-in-out forwards;
`;

const Description = styled.p`
    font-size: 1.125rem;
    max-width: 42rem;
    margin: 0 auto;
    animation: fadeIn 0.6s ease-in-out forwards;
    animation-delay: 200ms;
`;
function Articles() {
    const [activeCategory, setActiveCategory] = useState('all');
     const {currentPage}=usePagination();
     
   const filteredArticles =()=> {
       const articlesPerPage = 6;
       const filteredArticles = articles.filter(article => {
           const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
           return matchesCategory;
       });
       
       const startIndex = currentPage * articlesPerPage;
       const endIndex = startIndex + articlesPerPage;
       const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
       
       return activeCategory === 'all'  ? paginatedArticles :filteredArticles;
   }

    const categories = [
        { id: 'all', label: 'All Articles', icon: <FaBookOpen size={20} /> },
        { id: 'react', label: 'React & Libraries', icon: <FaReact size={20} /> },
        { id: 'data-structures', label: 'Data Structures', icon: <IoLayers size={20} /> },
        { id: 'OOP & Patterns', label: 'OOP & Patterns', icon: <FaRobot size={20} /> },
        { id: 'fundamentals', label: 'Fundamentals', icon: <RiFunctionFill size={20} /> },
        { id: 'web basics', label: 'Web basics', icon: <FaCode size={20} /> },
        { id: 'dotnet', label: '.NET', icon: <FaServer size={20} /> },
        { id: 'database', label: 'Database', icon: <FaDatabase size={20} /> },
    ];
    
    return (
        <section id="articles">
            <SectionHeader header="Articles"/>
            <Container>
                <SubContainer>
                    <Title>Learning Journey</Title>
                    <Description>
                        A collection of my technical notes and articles from my journey in software development.
                        These serve as both a personal reference and a way to share knowledge.
                    </Description>
                </SubContainer>

                 <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />

                <ArticlesList articles={filteredArticles()}/>

                {activeCategory ==='all' && <Pagination count={articles.length}/>}
            </Container>
        </section>
    );
}

export default Articles;