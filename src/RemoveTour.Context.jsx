import { createContext, useState } from "react";

export const RemoveTourContext = createContext({
    tours: null,
    setTours: () => null,
    removeTour: () => null
});


const RemoveTourProvider = ({children}) => {
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const value = { tours, setTours, removeTour };
    return (
        <RemoveTourContext.Provider value={value}>
            {children}
        </RemoveTourContext.Provider>
    )
}

export default RemoveTourProvider;