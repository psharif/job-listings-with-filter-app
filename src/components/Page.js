import { useState, useContext } from "react"; 
import { DispatchContext, JobListingContext } from '../context/jobListings.context';
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

export default function Page({ JobListings }) {
    const dispatch = useContext(DispatchContext);
    const filters = useContext(JobListingContext);
    
    // Adds a filter to the filter list. 
    const addFilter = (text) => {
        dispatch({ type: "ADD_FILTER", text })
    }
    // Removes a filter from the filter list.
    const deleteFilter = (text) => {
        dispatch({ type: "DELETE_FILTER", text });
    }
    // Clears the filters in the filter list. 
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"});
    }

    return(
        <StyledContainer>
            <header />
            <main>
                <FilterBar 
                    filters={filters} 
                    deleteFilter={deleteFilter} 
                    clearFilters={clearFilters} 
                />
                {JobListings.map(listing => {
                    const requirements = [listing.role, listing.level, ...listing.languages, ...listing.tools];
                    if(filters.every( filter => requirements.includes(filter))) {
                        return (
                            <JobListing 
                                key={listing.id}
                                addFilter={addFilter}
                                listingDetails={listing}
                            />
                        )
                    } else return null;
                })}
            </main>
        </StyledContainer>
    );
}