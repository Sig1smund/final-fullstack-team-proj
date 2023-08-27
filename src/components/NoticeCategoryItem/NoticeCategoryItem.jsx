import css from "./NoticeCategoryItem.module.css"
import svg from '../../images/sprite.svg';

export default function NoticeCategoryItem({ item }) {
 const { _id, title, category, date, file, sex, location, owner } = item;



    return (
      <li className={css.container}>
        <div className={css.wrapper}>
          <img
            className={css.pet_img}
            src={item.imageURL}
            alt={item.name}
            width="300"
          />

          <div className={css.category}>
            <p>{category}</p>
          </div>
          <div>
            <button className={css.fav_btn} type="button">
              <svg className={css.heart} width="" height="">
                <use href={svg + '#heart'}></use>
              </svg>
            </button>
          </div>

          <div className={css.info_container}>
            <div className={css.info_item}>
              <svg class="" width="" height="">
                <use href=""></use>
              </svg>
              <p>{location}</p>
            </div>
            <div>
              <svg class="" width="" height="">
                <use href=""></use>
              </svg>
              <p>{date}</p>
            </div>
            <div>
              <svg class="" width="" height="">
                <use href=""></use>
              </svg>
              <p>{sex}</p>
            </div>
          </div>
        </div>
        <div className={css.bottom_container}>
          <h2 className={css.title}>{title}</h2>
          <button className={css.learn_btn} type="button">
            Learn More
            <svg class="" width="" height="">
              <use href={svg + '#pawprint-1'}></use>
            </svg>
          </button>
        </div>

        {/* <p>{item.name}</p> */}
      </li>
    );
}