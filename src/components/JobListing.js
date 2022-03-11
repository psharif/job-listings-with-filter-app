import styled from "styled-components";

const StyledSection = styled.div`
    min-height: 200px; 
    width: 80%;
    background-color: #fff; 
    color: #000;
    border-radius: 5px; 
`;

export default function JobListing(props) {
    return(
        <StyledSection>{props.children}</StyledSection>
    );
}