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
                            <div className={s.thumb}>
                                <a href={service.url}>
                                    <img src={service.imageUrl} alt={service.title} className={s.image} />
                                </a>
                            </div>
                            <div>
                                <h2>{service.title}</h2>
                            
                                <p>{service.adress}</p>
                            </div>
                        </li>
                    
                    )
                })}
            </ul>
        </section>
    );
}