import { createContext, useReducer } from "react";
import filterReducer from "../reducers/jobListings.reducer";

export const JobListingContext = createContext();
export const DispatchContext =  createContext(); 

export default function JobListingsProvider(props) {
    const [values, dispatch] = useReducer(filterReducer, []);

    return(
        <JobListingContext.Provider value={values}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </JobListingContext.Provider>
    );
}
