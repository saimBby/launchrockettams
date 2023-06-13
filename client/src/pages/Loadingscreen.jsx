import React, { useState, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader"

function Loadingscreen() {  
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    })

    return (
        <div>
            {
                loading ?
                    <CircleLoader
                        size={50}
                        color={"#123abc"}
                        loading={loading}
                />
                :
                <div></div>
            }
        </div>
    )
}

export default Loadingscreen