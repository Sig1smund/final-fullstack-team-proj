import React, { useState } from 'react';
import useServices from "hooks/useServices";
import s from './OurFriendsList.module.css';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=158x150';

export default function OurFriendsList() {
    const { services } = useServices();
    const [openDropdowns, setOpenDropdowns] = useState({}); 

    const toggleDropdown = (service, serviceId) => {
        if (service.workDays) {
            return setOpenDropdowns(prevOpenDropdowns => ({
                ...prevOpenDropdowns,
                [serviceId]: !prevOpenDropdowns[serviceId] || false
            }));
        }
        return;
    };

    const getDayOfWeekAbbreviation = (dayIndex) => {
        const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
        return daysOfWeek[dayIndex];
    };

    return (
        <section className={s.container}>
            <ul className={s.list}>
                {services.map(service => {
                    const firstWorkDay = service.workDays && service.workDays.find((day => day.isOpen));

                    return (
                        <li key={service._id} className={s.item}>
                            <h2 className={s.title}>{service.title}</h2>
                            <div className={s.info}>
                                <div className={s.thumb}>
                                    <a href={service.url} target="_blank" rel="noreferrer">
                                        <img src={service.imageUrl || defaultImg} alt={service.title} className={s.image} />
                                    </a>
                                </div>
                                <div className={s.details}>
                                    <button className={s.infoDetails} onClick={() => toggleDropdown(service, service._id)}>
                                    <p className={`${s.infoTitle} ${openDropdowns[service._id]? s.active : ''}`}>Time:</p>
                                        {firstWorkDay ? (
                                            <p className={`${s.timeText} ${openDropdowns[service._id]? s.active : ''}`}>
                                                {`${firstWorkDay.from} - ${firstWorkDay.to}`}
                                            </p>
                                        ) : (
                                            <p className={s.timeText}>
                                               day and night
                                            </p>
                                        )}
                                    </button>
                                    {openDropdowns[service._id] && (
                                        <div className={s.dropdownContent}>
                                            {service.workDays && service.workDays.length > 0 ? (
                                                service.workDays.map((day, index) => (
                                                    <p key={index} className={s.scheduleText}>
                                                        {day.from ? `${getDayOfWeekAbbreviation(index)}   ${day.from} - ${day.to}` : `${getDayOfWeekAbbreviation(index)} Closed`}
                                                    </p>
                                                ))
                                            ) : (
                                                <p>Not specified</p>
                                            )}
                                        </div>
                                    )}
                                    <p className={s.infoTitle}>Address:</p>
                                    <p className={s.infoDetails}>{service.address || 'website only'}</p>
                                    <p className={s.infoTitle}>Email:</p>
                                    <p className={s.infoDetails} href="mailto:">{service.email || 'phone only'}</p>
                                    <p className={s.infoTitle}>Phone:</p>
                                    <a href={`tel:${service.phone || ''}`}>{service.phone || 'email only'}</a>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}