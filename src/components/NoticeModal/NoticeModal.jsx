import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';

import useAuth from "hooks/useAuth";
import { getNotice, setFavNotice } from "redux/notices/operations";

import css from "./NoticeModal.module.css";
import icon from '../../images/sprite.svg';
import Modal from "components/Modal";
import AttentionModal from "components/AttentionModal";


export default function NoticeModal({ onClose, id, isFavorite }) {
  const { isLoggedIn } = useAuth();

  const { data } = getNotice(id);

  if (!data) {
    return;
  };

  const { notice } = data;

  const {
    title,
    imageURL,
    category,
    name,
    type,
    birthday,
    sex,
    location,
    price,
    comments,
    owner.email,
    owner.phone,
  } = notice;

  const phoneNumber = `tel:${phone}`;
  const emailAddress = `mailto:${email}`;

  const showPrice = category === 'sell' ? true : false;

  const [isAdditionModalOpen, setIsAdditionModalOpen] = useState(false);

  const onFavoriteBtnClick = (id) => {
    if (isLoggedIn) {
      try {
        setFavNotice(id);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsAdditionModalOpen(true);
    };
  };

  const close = () => {
    setIsAdditionModalOpen(false);
  };

  const onContactBtnClick = (phone) => {
    toast.error('Please use the email for contact');
  };

  return (
    <>
      <div className="container">
      <div className="noticeCard">
        <label className="category">{category}</label>
        <img className="photo" src={imageURL} />

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
            <Link className="value" href={emailAddress}>{ owner.email }</Li>
          </div>
          {phone !== '' && (
            <div className="informationItem">
              <span className="key">Phone:</span>
              <Link className="value" href={phoneNumber}>{ owner.phone }</Link>
            </div>
          )}
          {showPrice && (
            <div className="informationItem">
              <span className="key">Price:</span>
              <p className="value">{price}</p>
            </div>
          )}
        </div>

        <div className="commentContainer">
          <span className="key">Comments:</span>
          <p className="value">{comments}</p>
        </div>
      </div>

      <button className="favoriteBtn" onClick={() => onFavoriteBtnClick(id)} isFavorite={isFavorite}>
        {isFavorite ? 'Remove from' : 'Add to'}
        <svg className={css.heart} width="24" height="24">
          <use href={icon + '#heart'}></use>
        </svg>
      </button>

      <div className="contactBtnContainer">
        {phone === '' ? (
          <button type="button" className="contactBtn" onClick={onContactBtnClick}>
            Contact
          </button>
        ) : (
          <Link className="contactLink" to={phoneNumber}>
            Contact
          </Link>
        )}
      </div>
      </div>

      {isAdditionModalOpen && (
        <Modal isOpen={isAdditionModalOpen} onClose={close}>
          <AttentionModal />
        </Modal>
      )}
    </>

  );
};
