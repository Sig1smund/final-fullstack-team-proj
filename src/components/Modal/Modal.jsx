import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, isOpen, onClose }) => {
// no scroling content
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);


  useEffect(() => {
    const closeESC = (e) => {
      if (e.code !== "Escape") {
        return;
      };

      onClose();
    };

    window.addEventListener('keydown', closeESC);

    return () => {
      window.removeEventListener('keydown', closeESC);
    };
  }, [onClose]);


  return (
    <>
      {isOpen && createPortal(
        <div className={css.overlay} onClick={onClose}>
          <div className={css.modalWrapper} onClick={e => e.stopPropagation()}>
            <button type="button" className={css.cross} onClick={onClose}>
              <RxCross1 />
            </button>
             {children}
          </div>
        </div>,
      modalRoot)}
    </>
  );
};
export default Modal;
