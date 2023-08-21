import css from './PetList.module.css'
import PetsItem from 'components/PetsItem/PetsItem'
import NoPet from "../../images/WBC_sad_1.jpg"
export default function PetsList() {
    const pets =[
        {
            id: 1,
            avatar: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
            name: "Jack",
            birthday: "10.10.2020",
            type: "cat",
            comments: "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat."

        },
        {
            id: 2,
            avatar: "https://media.istockphoto.com/id/1443562748/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B8%D0%B9-%D1%96%D0%BC%D0%B1%D0%B8%D1%80%D0%BD%D0%B8%D0%B9-%D0%BA%D1%96%D1%82.jpg?s=612x612&w=0&k=20&c=SxKz8UK4itm6bw_84jaTYkw6ZCPsUVwBcS32WPyGkew=",
            name: "deb",
            birthday: "10.10.2020",
            type: "cat",
            comments: "comm"

        },
        {
            id: 3,
            avatar: "https://media.istockphoto.com/id/1443562748/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B8%D0%B9-%D1%96%D0%BC%D0%B1%D0%B8%D1%80%D0%BD%D0%B8%D0%B9-%D0%BA%D1%96%D1%82.jpg?s=612x612&w=0&k=20&c=SxKz8UK4itm6bw_84jaTYkw6ZCPsUVwBcS32WPyGkew=",
            name: "deb3",
            birthday: "10.10.2020",
            type: "cat",
            comments: "comm"

        }
    ]
    return(
        <>
        {pets.length <=0 ? 
        (
            <div className={css.noPetsWrapper}>
            <p>No pets in your list</p>
            <img src={NoPet} alt='sad cat' className={css.imgNoPet}/>
            </div>
        )
        
        : (<div>
        <ul className={css.petsList}>
            {pets.map(pet => (
                        <PetsItem
                          key={pet.id}
                          pet={pet}
                          
                        />
                      ))}
            </ul>
            </div>)}
            </>

    )
}