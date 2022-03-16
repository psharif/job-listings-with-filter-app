import styled from "styled-components";
import JobListing from './JobListing';
import FilterBar from './FilterBar';

const StyledContainer = styled.div`
    width: 100vw; 
    min-height: 100vh; 
    background-color: hsl(180, 52%, 96%);
    font-family: 'Spartan', sans-serif;
    header {
        width: 100%; 
        height: 150px;
        background-image: url("../../images/bg-header-desktop.svg");
        background-color: #5CA5A5;
    }
    main {
        width: 100%;
        min-height: calc(100vh - 150px);  
        display: flex;
        flex-direction: column; 
        align-items: center;  
        gap: 30px; 
    }
`;

export default function Page(props) {
    return(
        <StyledContainer>
            <header></header>
            <main>
                <FilterBar />
                {props.JobListings.map(listing => {
                    return (
                        <JobListing 
                            key={listing.id}
                            listingDetails={listing}
                        />
                    )
                })}
            </main>
        </StyledContainer>
    );
}