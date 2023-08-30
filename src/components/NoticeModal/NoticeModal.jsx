import { Link } from "react-router-dom";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useAuth from 'hooks/useAuth';
import Modal from '../Modal'
import AttentionModal from '../AttentionModal'
import css from "./NoticeModal.module.css";
import icon from '../../images/sprite.svg';


export default function NoticeModal({ item, handler, favorites, isLoggedIn }) {
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  if (!item) {
    return;
  };

  const {
    _id,
    category,
    title,
    name,
    date,
    type,
    imageURL,
    comments,
    sex,
    location,
    price,
    owner,
  } = item;

  const { email, phone } = owner;

  const phoneNumber = `tel:${phone}`;
  const emailAddress = `mailto:${email}`;

  const showPrice = category === 'sell' ? true : false;

  const onFavClick = (id) => {
    isLoggedIn ? dispatch(handler(id)) : setIsAttentionModalOpen(true);
    console.log(isAttentionModalOpen);
    return console.log(id);
  }

  const close = () => {
    setIsAttentionModalOpen(false);
  };



  return (
    <>
      <div className={css.container}>
        <div className={css.noticeCard}>
          <label className={css.category}>{category}</label>
          <img alt="notice pet avatar" className={css.photo} src={imageURL} />

          <div className={css.information}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Name:</p>
              <p className={css.value}>{ name }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Birthday:</p>
              <p className={css.value}>{ date}</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Type:</p>
              <p className={css.value}>{ type }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Place:</p>
              <p className={css.value}>{ location }</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>The sex:</p>
              <p className={css.value}>{sex}</p>
            </div>
            <div className={css.informationItem}>
              <p className={css.informationKey}>Email:</p>
              <div className={css.contactWrap}>
                <Link className={css.valueLink} to={emailAddress}>{email}</Link>
              </div>
            </div>
            {phone !== '' && (
              <div className={css.informationItem}>
                <p className={css.informationKey}>Phone:</p>
                <div className={css.contactWrap}>
                  <Link className={css.valueLink} to={phoneNumber}>{phone}</Link>
                </div>
              </div>
            )}
            {showPrice && (
              <div className={css.informationItem}>
                <p className={css.informationKey}>Price:</p>
                <p className={css.value}>{price}</p>
              </div>
            )}
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.commentContainer}>
            <p className={css.commentKey}>Comments:</p>
            {comments}
          </div>

          <div className={css.buttons}>

            {phone === '' ? (
              <Link className={css.contactLink} to={emailAddress}>
                Contact
              </Link>
            ) : (
              <Link className={css.contactLink} to={phoneNumber}>
                Contact
              </Link>
            )}
            {!isRefreshing &&
              <button className={css.favoriteBtn} onClick={()=>onFavClick(_id)}>
                {favorites ? 'Remove from' : 'Add to'}
                <div className={favorites ? [css.favBtn, css.infavBtn].join(' ') : [css.favBtn].join(' ')}>
                  <svg className={css.heart} width="24" height="24" >
                    <use className={css.iconHeart} href={icon + '#heart'}></use>
                  </svg>
                </div>
            </button>
            }

            {isAttentionModalOpen && (
        <Modal isOpen={isAttentionModalOpen} onClose={close}>
          <AttentionModal />
        </Modal>
      )}
            </div>
        </div>
      </div>


    </>

  );
};
