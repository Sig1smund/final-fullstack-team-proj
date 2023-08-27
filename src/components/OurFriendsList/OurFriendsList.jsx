import useServices from "hooks/useServices";
import s from './OurFriendsList.module.css'

export default function OurFriendsList() {
    const { services } = useServices();
    console.log(services);
    return (
        <section className={s.container}>
            <ul className={s.list}>
                {services.map(service => {
                    return (
                        <li key={service._id} className={s.item}>
                            <h2>{service.title}</h2>
                            <a href={service.url}>
                                <img src={service.imageUrl} alt={service.title} width='390' />
                            </a>
                            <p>{service.adress}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}