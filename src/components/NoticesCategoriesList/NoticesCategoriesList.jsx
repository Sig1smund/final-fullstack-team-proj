
import useNotices from "hooks/useNotices";

export default function NoticesCategoriesList() {
    const { notices } = useNotices();

    return (
        <ul>
            {notices.length && notices.map(item => {
                return (<li key={item._id}>
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <img src={item.imageURL} alt={item.name} width='300'/>
                </li>
                )
            })}
        </ul>
    );
}

