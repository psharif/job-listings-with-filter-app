import styled from "styled-components";

const StyledSection = styled.div`
    min-height: 200px; 
    width: 80%;
    background-color: #fff; 
    color: #000;
    border-radius: 5px; 
    display: flex;
    flex-direction: row;  
    box-sizing: border-box; 
    box-shadow: 0px 5px 20px 0px hsl(180, 11%, 83%);
    padding: 30px; 
    @media screen and (max-width: 1300px) {
        width: 90%;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .listing {
        display: flex;
        flex-basis: 50%;
        align-items: center;  
        gap: 5%; 
        img {
            width: 140px; 
            height: 140px;
            @media screen and (max-width: 1300px) {
                width: 50px; 
                height: 50px; 
                margin-top: -50px;
                margin-bottom: 10px; 
            }  
        }
        @media screen and (max-width: 1300px) {
            align-items: flex-start;
            flex-direction: column;
        } 
        .listing-info {
            display: flex; 
            flex-direction: column; 
            img {
                border-radius: 50%; 
            }
            .header-info {
                display: flex; 
                gap: 20px;
                font-size: 16px;
                align-items: center;    
                & > p {
                    color: #5CA5A5;
                    font-weight: bold; 
                    margin: 0; 
                } 
                .new, .featured {
                    border-radius: 30px;
                    color: #fff; 
                    font-weight: bold; 
                    padding: 10px 10px 5px 10px;
                    display: flex; 
                    align-items: center;
                    p {
                        font-size: 14px;
                        text-transform: uppercase;
                        margin: 0px; 
                    }
                } 
                .new {
                    background-color: #5CA5A5; 
                }
                .featured {
                    background-color: #2B3939; 
                }
            }
            .position {
                display: flex;  
                h2 {
                    margin-bottom: 5px; 
                    @media screen and (max-width: 1300px) {
                        font-size: 20px;
                    }
                    &:hover {
                        color: #5CA5A5;
                    }
                }
            }
            .details {
                display: flex;
                align-items: center; 
                gap: 20px;
                color: #979797;
                font-weight: 400;
                .break {
                    height: 4px; 
                    width: 4px; 
                    border-radius: 50%; 
                    background-color: #B7C4C4;
                } 
            }
        }
    }
    div.separator {
        width: 100%;
        color: #000;
        height: 2px; 
        background-color: #979797;
        opacity: 0.5;
        display: none;
        @media screen and (max-width: 1300px) {
            display: flex;
        }
    }
    .filters {
        flex-basis: 50%; 
        padding: 30px; 
        display: flex; 
        align-items: center;
        @media screen and (max-width: 1300px) {
            padding: 0; 
        } 
        .filter-list {
            flex-basis: 100%; 
            display: flex; 
            flex-direction: row-reverse; 
            gap: 20px;
            align-items: center;
            list-style: none;
            @media screen and (max-width: 1300px) {
                padding: 0; 
                flex-direction: row;
                flex-wrap: wrap;
            }  
            .filter-item { 
                padding: 10px; 
                color: #5CA5A5;
                font-weight: bold; 
                border-radius: 5px; 
                background-color: hsl(180, 52%, 96%);
                &:hover {
                    color: #fff; 
                    background-color: #5CA5A5;
                }
            }
        }
    }
`;

export default function JobListing(props) {
    const { company, 
            logo, 
            new: isNew, 
            featured: isFeatured, 
            position, role, level, 
            postedAt, 
            contract, 
            location, 
            languages, 
            tools } = props.listingDetails; 
    const filters = [role, level, ...languages, ...tools]; 

    return(
        <StyledSection>
            <section className="listing">
                <img src={`../../${logo}`} alt={`${company} logo`}/>
                <section className="listing-info">
                    <div className="header-info">
                        <p className="company">{company}</p>
                        { isNew ? 
                            (<div className="new">
                                <p>New!</p>
                            </div>) : null
                        }
                        { isFeatured ? 
                            (<div className="featured">
                                <p>Featured</p>
                            </div>) : null
                        }
                    </div>
                    <div className="position">
                        <h2>{position}</h2>
                    </div>
                    <div className="details">
                        <p>{postedAt}</p>
                        <div className="break"/>
                        <p>{contract}</p>
                        <div className="break"/>
                        <p>{location}</p>
                    </div>
                </section>
            </section>
            <div className="separator"/>
            <section className="filters">
                <ul className="filter-list">
                    {filters.map(filter => <li className="filter-item">{filter}</li>)}
                </ul>
            </section>
        </StyledSection>
    );
}