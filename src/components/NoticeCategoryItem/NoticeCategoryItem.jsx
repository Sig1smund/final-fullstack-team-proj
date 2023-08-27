export default function NoticeCategoryItem({item}) {

    return (<li key={item._id}>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <img src={item.imageURL} alt={item.name} width='300'/>
    </li>)
}