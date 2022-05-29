import React from 'react'
import config from '../../config.json'

export const Ps1 = () => {
    return (
        <div>
            <span className="text-light-yellow dark:text-dark-yellow">
                {config.ps1_username}
            </span>
            <span className="text-light-gray dark:text-light-gray">@</span>
            <span className="text-light-green dark:text-light-green">
                {config.ps1_hostname}
            </span>
            <span className="text-light-gray dark:text-light-gray">$ ~ </span>
        </div>
    )
}

export default Ps1;