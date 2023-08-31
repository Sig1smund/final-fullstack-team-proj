import {
  FormikStepper,
  FormikStep,
  InputField,
  RadioField,
} from 'formik-stepper';
import * as Yup from 'yup';
import { addNotice } from 'redux/notices/operations';
import { createPet } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

// import "formik-stepper/dist/style.css";

// import { IoArrowBackCircleSharp } from 'react-icons/io5';
import './AddPetForm.css';
import css from './AddPetForm.module.css';
import icon from '../../images/sprite.svg';
import DefaultImage from '../../images/default_image.png';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Enter a name'),
  // date: Yup.date().required('Required').format('DD-MM-YYYY', true),
  date: Yup.date()
    .typeError('The value must be a date (DD-MM-YYYY)')
    .required('Enter a date of birth'),
  type: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Enter a type'),
  // title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Enter a type name pet'),
  title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
  location: Yup.string(),
  // location: Yup.string().required('Enter a location'),
  price: Yup.number().integer().min(1),
  // price: Yup.number().integer().min(1).required('Enter the price'),
  comments: Yup.string().max(120, 'Too Long!'),
});

// const initialState = {
//   category: "",
//   file: null,

// };

const initialValues = {
  //Personal details
  category: '',
  name: '',
  date: '',
  type: '',
  title: 'title',
  //  More info
  sex: 'male',
  location: 'city',
  price: 1,
  comments: '',
  // isYourPet: true,
};

export default function AddPetForm() {
  const dispatch = useDispatch();
 
  // const [state, setState] = useState(initialValues);
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [imageFile, setFile] = useState('');

  const inputPhotoRef = useRef();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const onChange = e => {
    // const { name, value } = e.target;
    // const isYourPet = (value === "your-pet");
    // console.log('e', e.target);
    // setState(state => ({ ...state, [name]: value }));
    setCategory(e.target.value);
    // setValue(e.target.value);

    // console.log(name, value);
    // console.log('category', state.category);
    // console.log('dds', imageURL);
  };

  const onChangeFile = event => {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024 * 3) {
      alert('Wrong size');
      return;
    }
    const newImage = URL.createObjectURL(file);
    setImageURL(newImage);
    setFile(file);
    console.log('file', file);
    console.log('newImage', newImage);
  };

    const onLoadNewPhoto = () => {
    inputPhotoRef.current.click();
  };

  const onSubmit = values => {
    console.log('values', values);
    // setState(state => ({ ...state, ...values }));
    // console.log('state', state);

    const {
      name,
      date,
      type,
      title,
      location,
      sex,
      price,
      comments = '',
    } = values;

    const formData = new FormData();

    if (category === 'your-pet') {
      // add pet
      formData.append('name', name);
      // formData.append("category", category);
      formData.append('date', date);
      formData.append('type', type);
      // formData.append("title", title);
      // formData.append("location", location);
      // formData.append("sex", sex);
      // formData.append("price", price);
      formData.append('comments', comments);
      formData.append('image', imageFile);

      dispatch(createPet(formData));
    } else {
      // add notice
      formData.append('name', name);
      formData.append('category', category);
      formData.append('date', date);
      formData.append('type', type);
      formData.append('title', title);
      formData.append('location', location);
      formData.append('sex', sex);
      formData.append('price', price);
      formData.append('comments', comments);
      formData.append('image', imageFile);

      dispatch(addNotice(formData));
    }
  };

  // const { category } = state;
  // console.log("isYourPet", isYourPet);
  return (
    <FormikStepper
      /// Accept all Formik props
      onSubmit={onSubmit} /// onSubmit Function
      initialValues={initialValues}
      validationSchema={validationSchema}
      withStepperLine /// false as default and If it is false, it hides stepper line
      nextButton={{
        label: 'Next',
        style: {backgroundColor: 'var(--blue-color)'}
      }}
      prevButton={{
        label: 'Back',
        style: { color: '#54ADFF', background: 'transparent' },
      }}
      submitButton={{ label: 'Done' }}
    >
      {/*  First Step */}
      <FormikStep
        label="Choose option" /// The text label of Step
        labelColor="#00C3AD"
        circleColor="#00C3AD"
      >
        <div className={css.form_radio}>

          <div className={css.form_radio_btn}>
            <input
              className={css.form_radio_btn_input}
              id="your-pet"
              type="radio"
              name="category"
              value="your-pet"
              onChange={onChange}
              checked={category==="your-pet"? true: false}
            ></input>
            <label
              className={
                category === 'your-pet'
                  ? [css.button, css.active].join(' ')
                  : css.button
              }
              htmlFor="your-pet"
            >
              your pet
            </label>
          </div>
          <div className={css.form_radio_btn}>
            <input
              className={css.form_radio_btn_input}
              id="sell"
              type="radio"
              name="category"
              value="sell"
              onChange={onChange}
              checked={category==="sell"? true: false}
            ></input>
            <label
              className={
                category==="sell"
                  ? [css.button, css.active].join(' ')
                  : css.button
              }
              htmlFor="sell"
            >
              sell
            </label>
           
          </div>
          <div className={css.form_radio_btn}>
            <input
              className={css.form_radio_btn_input}
              id="lost-found"
              type="radio"
              name="category"
              value="lost-found"
              onChange={onChange}
              checked={category==="lost-found"? true: false}
            ></input>
            <label
              className={
                category==="lost-found"
                  ? [css.button, css.active].join(' ')
                  : css.button
              }
              htmlFor="lost-found"
            >
              lost/found
            </label>
          </div>
          <div className={css.form_radio_btn}>
            <input
              className={css.form_radio_btn_input}
              id="in-good-hands"
              type="radio"
              name="category"
              value="in-good-hands"
              onChange={onChange}
              checked={category==="in-good-hands"? true: false}
            ></input>
            <label
              className={
                category==="in-good-hands"
                  ? [css.button, css.active].join(' ')
                  : css.button
              }
              htmlFor="in-good-hands"
            >
              in good hands
            </label>
          </div>
        </div>

         <Link className={css.backLink} to={backLink.current}>
            <svg className={css.logo} width="24" height="24">
            <use href={icon + '#arrow-left'}></use> 
            {/* <use href={icon + '#pawprint-1'}></use> */}
          	{/* <path d="M5.333 16h21.333M5.333 16l8-8m-8 8 8 8" /> */}
          </svg>
          Сancel
        </Link>
        
      </FormikStep>
      {/* Second Step */}
      <FormikStep label="Personal details" circleColor="#54ADFF">
        {!(category === 'your-pet') && (
          <InputField
            name="title"
            label="Title of add"
            placeholder="Type name pet"
            type="text"
          />
        )}

        <InputField
          name="name"
          label="Pet’s name"
          type="text"
          placeholder="Type name pet"
        />
        <InputField
          name="date"
          label="Date of birth"
          placeholder="Type date of birth"
          type="text"
        />
        <InputField
          name="type"
          label="Type"
          placeholder="Type of pet"
          type="text"
        />
      </FormikStep>
      {/* Third Step */}
      <FormikStep label="More info" circleColor="#CCE4FB">
        {!(category === 'your-pet') &&
          <RadioField
            name="sex"
            labelColor="#000"
            options={[
              { label: 'Female', value: 'female' },
              { label: 'Male', value: 'male' },
            ]}
          />}
        {/* Image */}
        <div>
          <p className={css.image_title}>Load the pet’s image:</p>
          <button type='button'
            className={css.image_button}
          onClick={onLoadNewPhoto}> 
             {imageURL ? (           
            <img
              src={imageURL}
              className={css.image}
              alt="pet"
            />
          ) : (
            <img
              src={DefaultImage}
              className={css.image}
              alt="pet"
            />
          )} 
          </button>
          

          <input
            type="file"
            accept="image/*, .png, .jpg, .gif, .web"
             ref={inputPhotoRef}
            onChange={onChangeFile}
            style={{ display: 'none' }}
          />
        </div>


        {/* for caterory = your pet */}
        {!(category === 'your-pet') && (
          <>
           
            <InputField
              name="location"
              label="Location"
              placeholder="Type of location"
              type="text"
            />
            {category === 'sell' && (
              <InputField
                name="price"
                label="Price"
                placeholder="Type of price"
                type="text"
              />
            )}
          </>
        )}
        <InputField
          name="comments"
          label="Comments"
          placeholder="Type of pet"
          type="text"
        />
      </FormikStep>
    </FormikStepper>
  );
}
