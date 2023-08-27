import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated, useTransition} from '@react-spring/web';

import exit from '../../images/sprite.svg';
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
      if (e.code === "Escape") {
        onClose();
      };
    };

    window.addEventListener('keydown', closeESC);

    return () => {
      window.removeEventListener('keydown', closeESC);
    };
  }, [onClose]);

  // animation
  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
    duration: 500,
    },
  });

  const springs = useSpring({
   opacity: isOpen ? 1 : 0,
    transform: 'translate(-100%,-100%)',
    config: {
   duration: 500,
    },
  });



  return modalTransition( (styles, isOpen) =>
      isOpen && createPortal(
        <div className={css.overlay} as={animated.div} styler={styles}  onClick={onClose}>
          <div className={css.modalWrapper} as={animated.div} style={springs} onClick={e => e.stopPropagation()}>

            <button type="button" className={css.crossBtn} onClick={onClose}>
              <svg className={css.exit} width="24" height="24">
                <use className={css.cross} href={exit + '#cross'}></use>
              </svg>
            </button>

              {children}

          </div>
        </div>,
      modalRoot)
  );

};


export default Modal;
