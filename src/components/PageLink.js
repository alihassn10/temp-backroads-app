import React from 'react'

function PageLink({ id, href, name ,itemClass }) {
    return (
        <li key={id}>
            <a href={href} className={itemClass}>{name}</a>
        </li>
    )
}

export default PageLink