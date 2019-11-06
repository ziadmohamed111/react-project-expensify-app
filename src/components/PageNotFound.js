import React from 'react';
import { Link } from "react-router-dom" 

export const PageNotFound = () => (
    <div>
        <p>404!</p>
        <Link to="/">GO HOME</Link>
    </div>

)

export default PageNotFound