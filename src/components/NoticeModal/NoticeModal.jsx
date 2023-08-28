import { Link } from "react-router-dom";
//import { useState } from "react";
//import { toast } from 'react-toastify';

//import useAuth from "hooks/useAuth";
//import { getNotice, setFavNotice } from "redux/notices/operations";

import css from "./NoticeModal.module.css";
import icon from '../../images/sprite.svg';
//import Modal from "components/Modal";
//import AttentionModal from "components/AttentionModal";


export default function NoticeModal({ id, isFavorite }) {
  //const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  //const { data } = getNotice(id);

 // if (!data) {
  //  return;
  //};

  //const { notice } = data;

  const title = "Sell Cat Felis chaus";
  const imageURL = "https://upload.wikimedia.org/wikipedia/commons/8/82/Jungle_Cat_on_tree_at_Sundarban%2C_West_Bengal%2C_India.jpg";
  const category = "sell";
  const name = "Nick";
  const type = "cat";
  const birthday = "26.09.2018";
  const sex = "male";
  const location = "Kyiv";
  const price = 10;
  const comments = "gggggggggggg";
  const phone = "+380665214154";
  const email = "lili262808@gmail.com";

  //const {
  //  title,
   // imageURL,
  //  category,
  //  name,
   // type,
   // birthday,
  //  sex,
  //  location,
   // price,
  //  comments,
   // owner,
 // } = notice;

 // const { email, phone } = owner;

 const phoneNumber = `tel:${phone}`;
 const emailAddress = `mailto:${email}`;

 // const showPrice = category === 'sell' ? true : false;
  const showPrice = true;

 //const [isAdditionModalOpen, setIsAdditionModalOpen] = useState(false);

  const onFavoriteBtnClick = (id) => {
    if (isLoggedIn) {
      try {
       // setFavNotice(id);
      } catch (error) {
        console.log(error);
      };
    };
  //  setIsAdditionModalOpen(true);
  };

 // const close = () => {
 //   setIsAdditionModalOpen(false);
 // };


  return (
    <>
      <div className="container">
      <div className="noticeCard">
        <label className="category">{category}</label>
        <img alt="notice pet avatar" className="photo" src={imageURL} />

        <div className="information">
          <h2 className="title">{title}</h2>
          <div className="informationItem">
            <span className="key">Name:</span>
            <p className="value">{ name }</p>
          </div>
          <div className="informationItem">
            <span className="key">Birthday:</span>
            <p className="value">{ birthday}</p>
          </div>
          <div className="informationItem">
            <span className="key">Type:</span>
            <p className="value">{ type }</p>
          </div>
          <div className="informationItem">
            <span className="key">Place:</span>
            <p className="value">{ location }</p>
          </div>
          <div className="informationItem">
            <span className="key">The sex:</span>
            <p className="value">{sex}</p>
          </div>
          <div className="informationItem">
            <span className="key">Email:</span>
            <Link className="value" href={emailAddress}>{ email }</Link>
          </div>
          {phone !== '' && (
            <div className="informationItem">
              <span className="key">Phone:</span>
              <Link className="valueLink" href={phoneNumber}>{ phone }</Link>
            </div>
          )}
          {showPrice && (
            <div className="informationItem">
              <span className="key">Price:</span>
              <p className="value">{price}</p>
            </div>
          )}
        </div>

          <div className={css.commentContainer}>
          <span className="key">Comments:</span>
          <p className="value">{comments}</p>
        </div>
      </div>

        <button className={css.favoriteBtn} onClick={() => onFavoriteBtnClick(id)} isFavorite={isFavorite}>
        {isFavorite ? 'Remove from' : 'Add to'}
        <svg className={css.heart} width="24" height="24">
            <use className={css.iconHeart} href={icon + '#heart'}></use>
        </svg>
      </button>

        <div className={css.contactBtnContainer}>
        {phone === '' ? (
            <Link className={css.contactLinkMail} to={emailAddress}>
            Contact
          </Link>
        ) : (
              <Link className={css.contactLinkPhone} to={phoneNumber}>
            Contact
          </Link>
        )}
      </div>
      </div>

    { /* isAdditionModalOpen && (
       <Modal isOpen={isAdditionModalOpen} onClose={close}>
         <AttentionModal />
        </Modal>
      )*/}
    </>

  );
};
