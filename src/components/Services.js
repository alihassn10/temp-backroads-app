import React from 'react'
import Title from './Title'
import { servicesOffered } from '../data'
import Service from './Service'
const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title={'our'} subTitle={'services'} />


            <div className="section-center services-center">
                {servicesOffered.map((service) => {

                    return (

                        <Service key={service.id} {...service} />
                    );
                })}

            </div>
        </section>)
}

export default Services