import styled from "styled-components";

const StyledSection = styled.div`
    margin-top: -30px;
    min-height: 60px;
    box-sizing: border-box; 
    padding: 0 3%; 
    outline: none; 
    border: none; 
    width: 80%;
    background-color: #fff; 
    color: #000;
    border-radius: 5px;
    box-shadow: 0px 5px 20px 0px hsl(180, 11%, 83%);
    display: flex; 
    justify-content: space-between; 
    @media screen and (max-width: 1300px) {
        width: 90%;
    }
    .filters {
        .filter-list {
            flex-basis: 100%; 
            display: flex; 
            flex-direction: row; 
            gap: 20px;
            align-items: center;
            list-style: none;  
            flex-wrap: wrap;
            .filter-item { 
                height: 30px;
                color: #5CA5A5;
                font-weight: bold; 
                border-radius: 5px; 
                background-color: hsl(180, 52%, 96%);
                display: flex; 
                align-items: center;  
                box-sizing: border-box; 
                p {
                    padding: 10px;
                    margin: 0; 
                }
                button {
                    height: 100%;
                    padding: 0 8px;
                    border-radius: 0px 5px 5px 0px; 
                    color: #fff; 
                    background-color: #5CA5A5;
                    border: none; 
                    &:hover {
                        background-color: #000;
                    }
                }
            }
        }
    }
    button.clear-btn {
        border: none; 
        background-color: transparent; 
        color: #5CA5A5;
        font-weight: bold; 
        font-size: 16px;
        &:hover {
            text-decoration: underline; 
        }
    }
`;

export default function FilterBar(props) {
    return(
        <StyledSection>
            <section className="filters">
                <ul className="filter-list">
                    <li className="filter-item">
                        <p>React</p>
                        <button>
                            <img src="../../images/icon-remove.svg" alt="remove-icon"/>
                        </button>
                    </li>
                    <li className="filter-item">
                        <p>Python</p>
                        <button>
                            <img src="../../images/icon-remove.svg" alt="remove-icon"/>
                        </button>
                    </li>
                    <li className="filter-item">
                        <p>Midweight</p>
                        <button>
                            <img src="../../images/icon-remove.svg" alt="remove-icon"/>
                        </button>
                    </li>
                    <li className="filter-item">
                        <p>Fullstack</p>
                        <button>
                            <img src="../../images/icon-remove.svg" alt="remove-icon"/>
                        </button>
                    </li>
                </ul>
            </section>
            <button className="clear-btn">Clear</button>
        </StyledSection>
    );
}