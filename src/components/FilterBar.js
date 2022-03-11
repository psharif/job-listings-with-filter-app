import styled from "styled-components";

const StyledSection = styled.div`
    margin-top: -30px;
    min-height: 60px; 
    width: 80%;
    background-color: #fff; 
    color: #000;
    border-radius: 5px; 
`;

export default function FilterBar(props) {
    return(
        <StyledSection>{props.children}</StyledSection>
    );
}