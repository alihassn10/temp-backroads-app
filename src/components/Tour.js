import React from 'react'
// import { toursOffered } from '../data'

const Tour = ({ id, img, tourDate, tourTitle, tourDesc, footerIcon, destination, duration, charges }) => {
    return (

        <article className="tour-card"  >
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt={tourTitle} />
                <p className="tour-date">{tourDate}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{tourTitle}</h4>
                </div>
                <p>
                    {tourDesc}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className={footerIcon}></i></span>{destination}
                    </p>
                    <p>{duration}</p>
                    <p>{'from $' + charges}</p>
                </div>
            </div>
        </article>
    );


}

export default Tour