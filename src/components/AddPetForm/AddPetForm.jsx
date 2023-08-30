import {
    FormikStepper,
    FormikStep,
    InputField,
    RadioField,  
  } from "formik-stepper";
import * as Yup from "yup";  
import { addNotice } from "redux/notices/operations";
import { useDispatch } from 'react-redux';
import { useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
 
  // import "formik-stepper/dist/style.css";

// import { IoArrowBackCircleSharp } from 'react-icons/io5';
import "./AddPetForm.css";
import { BackLink } from "./AddPetForm.styled";
// import css from "./AddPetForm.module.css";




  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Enter a name'),
    // date: Yup.date().required('Required').format('DD-MM-YYYY', true),
    date: Yup.date().typeError('The value must be a date (DD-MM-YYYY)')
      .required('Enter a date of birth'),
    type: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Enter a type'),
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
  category: "",
  name: "",
  date: "",
  type: "",
  title: "",
  //  More info
  sex: "male",
  location: "",
  price: 0,
  comments: "",
  // isYourPet: true,
};

export default function AddPetForm() {
  
    
  const dispatch = useDispatch(); 
   const location = useLocation();
   const backLink = useRef(location.state?.from ?? '/');
  const [state, setState] = useState(initialValues);
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setFile] = useState("");
    
  const onChange = (e) => {
    const { name, value } = e.target;
    // const isYourPet = (value === "your-pet");
    console.log("e",e.target);
    setState(state => ({ ...state, [name]: value }));
    setCategory(value);
    
      console.log(name, value);
    console.log("category", state.category);
    console.log("dds", imageURL);
  }
  
  const onChangeFile = event => {
      const file = event.target.files[0];
      if (file.size > 1024 * 1024 * 3) {
        alert("Wrong size")
        return;
  }  
      const newImage = URL.createObjectURL(file);
      setImageURL(newImage);
    setFile(file);
    console.log("file", file);
     console.log("newImage", newImage);
   };  
  
  const onSubmit = (values) => {
    console.log("values", values);
    setState(state =>({...state, ...values}));
    console.log("state",state);
      
      const { name, date, type, title, location, sex, price, comments = "" } = values;
      
    const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("date", date);
      formData.append("type", type);
      formData.append("title", title);
      formData.append("location", location);
      formData.append("sex", sex);
      formData.append("price", price);
      formData.append("comments", comments);
      formData.append("image", imageFile);
      dispatch(addNotice(formData));
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
      nextButton={{ label: "Next" }}
      prevButton={{ label: "Back", style: { color: "#54ADFF", background: "transparent"  }  }}  
      submitButton={{ label: "Done"}}
      >
        {/*  First Step */}
        <FormikStep
          label="Choose option" /// The text label of Step
          labelColor="#00C3AD" 
          circleColor="#00C3AD" 
      >

        <div className="form_radio_btn">
        <input  id="your-pet" type="radio" name="category" value="your-pet" defaultChecked></input>
	      <label htmlFor="your-pet">your pet</label>
        </div>
          <div className="form_radio_btn">
        <input id="sell" type="radio" name="category" value="sell" onClick={onChange}></input>
	      <label htmlFor="sell">sell</label>
        </div>
        <div className="form_radio_btn">
        <input id="lost-found" type="radio" name="category" value="lost-found" onClick={onChange} ></input>
	      <label htmlFor="lost-found">lost/found</label>
        </div>
        <div className="form_radio_btn">
        <input id="in-good-hands" type="radio" name="category" value="in-good-hands" onClick={onChange} ></input>
	      <label htmlFor="in-good-hands">in good hands</label>
        </div>
           
        {/* /> */}
        <BackLink to={backLink.current}>
        {/* <IoArrowBackCircleSharp
          style={{ marginRight: 8, width: '20', height: '20' }}
        /> */}
        Go back
      </BackLink>

        </FormikStep>
        {/* Second Step */}
        <FormikStep label="Personal details" circleColor="#54ADFF">
         {!(category === "your-pet") &&  <InputField
            name="title"
            label="Title of add"
            placeholder="Type name pet"
            type="text"
        />}
        
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
        <input
          type="file"
          // name="file"
          accept='image/*, .png, .jpg, .gif, .web'
              // ref={inputPhotoRef}

                onChange={onChangeFile}
             
            //  style={{ display: 'none' }}
            />

          {/* for caterory = your pet */}
        {!(category === "your-pet") && (
          <>
            <RadioField
            name="sex"
            labelColor="#000"
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" }              
            ]}
            />
          <InputField
            name="location"
            label="Location"
            placeholder="Type of location"
            type="text"
            /> 
          <InputField
            name="price"
            label="Price"
            placeholder="Type of price"
            type="text"
            />
          
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
  };