import React from 'react';
import {FaBookOpen, FaCode, FaDatabase, FaReact, FaRobot, FaServer} from "react-icons/fa";
import {IoLayers} from "react-icons/io5";
import styled from "styled-components";
import {MdKeyboardDoubleArrowDown} from "react-icons/md";
import {RiFunctionFill} from "react-icons/ri";

const Card = styled.div`
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    height: 350px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    padding: 15px;
    border-radius: 100%;
    background: white;
`;

const Name = styled.h2`
    font-weight: bold;
    font-size: 15px;
    color: var(--color-white);
    margin-bottom: 0.7rem;
`;

const Date = styled.span`
    font-size: 16px;
    color: var(--color-white);
`;

const Header = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-image: linear-gradient(to right, var(--color-border), var(--color-border), var(--main-color));
`;

const Category = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CategoryName = styled.p`
    font-size: 12px;
    font-weight: bold;
`;

const Container = styled.div`
    background-color: var(--color-white);
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Data = styled.p`
    color: var(--color-border);
    font-size: 18px;
    margin-top: 1rem;
    flex: 1;
    overflow-y: auto;
`;

const Expand = styled.div`
    background-color: var(--color-light-gray);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
`;

function ArticleCard({article}) {
    return (
        <Card>
            <Header>
                <Icon>{getCategory(article.category)}</Icon>
                <div>
                    <Name>{article.title}</Name>
                    <Date>{article.date}</Date>
                </div>
            </Header>
            <Container>
                <Category style={{background: getCategoryGradient(article.category)}}>
                    <CategoryName>{article.category}</CategoryName>
                </Category>
                <Data>{article.excerpt}</Data>
            </Container>
            <Expand>
                <a href={article.url} target="_blank"><p style={{color: getCategoryGradient(article.category)}}><MdKeyboardDoubleArrowDown size={20}/> Read More </p></a>
            </Expand>
        </Card>
    );
}

export default ArticleCard;

const getCategory = (CategoryName) => {
    switch (CategoryName) {
        case 'all':
            return <FaBookOpen size={20}/>;
        case 'react':
            return <FaReact size={20}/>;
        case 'data-structures':
            return <IoLayers size={20}/>;
        case 'fundamentals':
            return <RiFunctionFill size={20}/>;
        case 'dotnet':
            return <FaServer size={20}/>;
        case 'database':
            return <FaRobot size={20}/>;
        case 'OOP & Patterns':
            return <FaServer size={20}/>;
        case 'web basics':
            return <FaCode size={20}/>;
    }
};

function getCategoryGradient(category) {
    switch (category) {
        case 'react':
            return 'linear-gradient(to right, #3B82F6, #2563EB)';
        case 'data-structures':
            return 'linear-gradient(to right, #10B981, #059669)';
        case 'fundamentals':
            return 'linear-gradient(to right, #8B5CF6, #7C3AED)';
        case 'dotnet':
            return 'linear-gradient(to right, #6366F1, #4F46E5)';
        case 'database':
            return 'linear-gradient(to right, #F59E0B, #D97706)';
        case 'web basics':
            return 'linear-gradient(to right, #FBD909, #E8D452)';
        case 'OOP & Patterns':
            return 'linear-gradient(to right, #F38CBB, #4A052F)';
        default:
            return 'linear-gradient(to right, #3B82F6, #2563EB)';
    }
}