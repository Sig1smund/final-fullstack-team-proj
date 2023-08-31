import useServices from "hooks/useServices";
import s from './OurFriendsList.module.css'

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
                                        <img src={service.imageUrl} alt={service.title} className={s.image} />
                                    </a>
                                </div>
                                <div className={s.details}>
                                    <p>Time</p>
                                    <p>{service.workdays}{'-'}{service.workdays}</p>
                                    <p>Adress</p>
                                    <p>{service.adress}</p>
                                    <p>Email</p>
                                    <a href="mailto:">{service.email || 'phone only'}</a>
                                    <p>Phone</p>
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