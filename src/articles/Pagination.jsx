import React from 'react';
import {usePagination} from "../PaginationContext.jsx";
import styled from "styled-components";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";

const Box = styled.div`
   display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
border: none;
    background: none;
    font-size: 32px;
    color: var(--color-white);
`
function Pagination({count}) {
    
    const {currentPage ,getPages,setCurrentPage }=usePagination();
    const totalPages =getPages(count);
    const nextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages - 1));
    };

    const prevPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 0));
    };
    return (
        <Box>
            {currentPage !==1 &&
            <Button onClick={prevPage}>
                <MdKeyboardDoubleArrowLeft />
            </Button>
            }
            {currentPage !==totalPages-1 &&
            <Button onClick={nextPage}>
                <MdKeyboardDoubleArrowRight />
            </Button>
            }
        </Box>
    );
}

export default Pagination;