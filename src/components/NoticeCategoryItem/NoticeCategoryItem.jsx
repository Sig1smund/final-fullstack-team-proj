export default function NoticeCategoryItem({item}) {

    return (<li >
        <p>{item.name}</p>
        <p>{item.category}</p>
        <img src={item.imageURL} alt={item.name} width='300'/>
    </li>)
}