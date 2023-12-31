import css from './PetList.module.css';
import PetsItem from 'components/PetsItem/PetsItem';
import NoPet from "../../images/WBC_sad_1.jpg";
import { useSelector } from 'react-redux';
import {selectUserPets} from '../../redux/auth/selectors';

export default function PetsList() {
    const pets = useSelector(selectUserPets);


    return(
        <>
        {pets.length <=0 ? 
        (
            <div className={css.noPetsWrapper}>
            <p>No pets in your list</p>
            <img src={NoPet} alt='sad cat' className={css.imgNoPet}/>
            </div>
        )
        
        : (<div >
          
        <ul className={css.petsList}>
          {pets.map(pet=>{
            return(<PetsItem  pet={pet} key={pet._id}/>)
          })}
            </ul>
            </div>)}
            </>

    )
}