import { Children } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({Children}) => {
    return (
        <BrowserRouter>
            {Children}
        </BrowserRouter>
    )
}

export default AppProvider;