import React from "react";



export default function({ onClick , children }) {
    return (
        (
            <>
                <option onClick={onClick}>{children}</option>
            </>
        )
    )
}


