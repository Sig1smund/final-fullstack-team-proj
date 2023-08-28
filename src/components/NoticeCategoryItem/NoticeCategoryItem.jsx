import css from './NoticeCategoryItem.module.css';
import svg from '../../images/sprite.svg';
import { calculateAge, cutSity } from './NoticeItemUtils';
import useAuth from 'hooks/useAuth';

export default function NoticeCategoryItem({ item, handler }) {
  const {
    _id,
    category,
    title,
    name,
    date,
    // type,
    imageURL,
    // comments,
    sex,
    location,
    // price,
    // owner,
  } = item;

  const age = calculateAge(date);
  const city = cutSity(location);
  const { user, isLoggedIn } = useAuth();
  
  const isLogged = () => {
    if (!isLoggedIn) {
      return
    }
    const isFavorite = user.favorite.includes(_id);
    console.log(isFavorite);
    return isFavorite;
  }


  return (
    <li className={css.container}>
      <div className={css.wrapper}>
        <img className={css.pet_img} src={imageURL} alt={name} width="300" />

        <div className={css.category}>
          <p>{category}</p>
        </div>
        <div>
          <button className={[css.fav_btn, isLogged() && [css.fav_btn]].join(' ')} type="button" onClick={() => handler(_id)}>
            <svg className={css.heart} width="24" height="24">
              <use href={svg + '#heart'}></use>
            </svg>
          </button>
        </div>

        <div className={css.info_container}>
          <div className={css.info_item}>
            <svg className={css.svg_info} width="24" height="24">
              <use href={svg + '#location-1'}></use>
            </svg>
            <p>{city}</p>
          </div>
          <div className={css.info_item}>
            <svg className={css.svg_info} width="24" height="24">
              <use href={svg + '#clock'}></use>
            </svg>
            <p>
              {age < 1 && `<1 ${'min_year'} `}
              {age === 1 && `1 ${'year'}`}
              {age > 1 && `${age} ${'years'}`}
            </p>
          </div>
          <div className={css.info_item}>
            <svg className={css.svg_info} width="24" height="24">
              <use
                href={sex === 'male' ? svg + '#male' : svg + '#female'}
              ></use>
            </svg>
            <p>{sex}</p>
          </div>
        </div>
      </div>
      <div className={css.bottom_container}>
        <h2 className={css.title}>{title}</h2>
        <button className={css.learn_btn} type="button">
          Learn More
          <svg className={css.learn_svg} width="24" height="24">
            <use href={svg + '#pawprint-1'}></use>
          </svg>
        </button>
      </div>
    </li>
  );
}
