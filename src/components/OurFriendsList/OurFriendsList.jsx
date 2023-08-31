import useServices from "hooks/useServices";
import s from './OurFriendsList.module.css';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=158x150';

export default function OurFriendsList() {
    const { services } = useServices();
    return (
        <section className={s.container}>
            <ul className={s.list}>
                {services.map(service => {
                    console.log(service)
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
                                    <p className={s.infoTitle}>Time</p>
                                    <p className={s.infoDetails}>{service.workdays}{'-'}{service.workdays}</p>
                                    <p className={s.infoTitle}>Adress</p>
                                    <p className={s.infoDetails}>{service.adress || 'website only'}</p>
                                    <p className={s.infoTitle}>Email</p>
                                    <a href="mailto:">{service.email || 'phone only'}</a>
                                    <p className={s.infoTitle}>Phone</p>
                                    <a href='tel:'>{service.phone || 'email only'}</a>
                                </div>
                            </div>
                        </li>
                    
                    );
                })}
            </ul>
        </section>
    );
}