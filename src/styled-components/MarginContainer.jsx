import styled from "styled-components";

export const MarginContainer = styled.div`
  margin-left: ${(props) => props.margin || "20px"};
  color: ${(props) => props.color || "var(--color-gray)"};
`;
