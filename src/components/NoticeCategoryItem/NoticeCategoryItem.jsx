export default function NoticeCategoryItem({item}) {

    return (<li >
        <h2>{item.comments}</h2>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <img src={item.imageURL} alt={item.name} width='300'/>
    </li>)
}