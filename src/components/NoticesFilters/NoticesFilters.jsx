import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateGenderFilters, updateAgeFilters } from '../../redux/notices/noticesSlice';
import useNotices from "hooks/useNotices";
import styles from './NoticesFilters.module.css';

export default function NoticesFilters() {
  const dispatch = useDispatch();
  const { filters } = useNotices();

  const [showFilters, setShowFilters] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showAgeOptions, setShowAgeOptions] = useState(false);
  const [selectedGenderFilters, setSelectedGenderFilters] = useState(filters.gender);
  const [selectedAgeFilters, setSelectedAgeFilters] = useState(filters.age);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleGenderOptions = () => {
    setShowGenderOptions(!showGenderOptions);
  };

  const toggleAgeOptions = () => {
    setShowAgeOptions(!showAgeOptions);
  };

  const handleGenderFilterChange = gender => {
    const updatedFilters = selectedGenderFilters.includes(gender)
      ? selectedGenderFilters.filter(item => item !== gender)
      : [...selectedGenderFilters, gender];
    setSelectedGenderFilters(updatedFilters);
    dispatch(updateGenderFilters(updatedFilters));
  };

  const handleAgeFilterChange = age => {
    const updatedFilters = selectedAgeFilters.includes(age)
      ? selectedAgeFilters.filter(item => item !== age)
      : [...selectedAgeFilters, age];
    setSelectedAgeFilters(updatedFilters);
    dispatch(updateAgeFilters(updatedFilters));
  };

  return (
  <div className={styles.filtersContainer}>
    <div className={styles.filtersLeftContainer}>
      {(selectedGenderFilters.length > 0 || selectedAgeFilters.length > 0) && (
        <div className={styles.selectedFilters}>
          {selectedGenderFilters.map(gender => (
            <button key={gender} className={styles.filterButtonSelected}
              onClick={() => handleGenderFilterChange(gender)}>
            {gender}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.6664 5.33325L5.33301 10.6666M5.33302 5.33325L10.6664 10.6666" 
              className={styles.icon}/></svg>
          </button>))}

          {selectedAgeFilters.map(age => (
            <button key={age} className={styles.filterButtonSelected}
                onClick={() => handleAgeFilterChange(age)}>
            {age}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.6664 5.33325L5.33301 10.6666M5.33302 5.33325L10.6664 10.6666" 
                className={styles.icon}/></svg>
              </button>))}
            </div>)}

      <button className={`${styles.mainButton} ${selectedGenderFilters.length > 0 || selectedAgeFilters.length > 0 ? styles.activeFilter : ''}`}
      onClick={toggleFilters}>
        Filter
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4L9 12V18L15 21V12L20 4H4Z"
          className={`${styles.icon} ${selectedGenderFilters.length > 0 || selectedAgeFilters.length > 0 ? styles.active : ''}`}
          /> </svg>
      </button>
      </div>

      {showFilters && (
        <div className={`${styles.dropdown} ${showGenderOptions && showAgeOptions ? styles.open : styles.close}`}>
        <h3 className={styles.title}>Filters</h3>
          <div className={styles.filterGroup}>
            <button className={styles.filterSubButton} onClick={toggleGenderOptions}>
              {!showGenderOptions? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 9L12 17L20 9" className={styles.icon}/></svg> : ''}
              By Gender
            </button>
            {showGenderOptions && (
              <div className={styles.filterOptions}>
  <label className={styles.label}>
    {selectedGenderFilters.includes('male') ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" 
        className={styles.icon}/></svg>) : 
        (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
       className={styles.icon}/></svg>)}
    <input
      type="checkbox"
      checked={selectedGenderFilters.includes('male')}
      onChange={() => handleGenderFilterChange('male')}/>
    male
  </label>

  <label className={styles.label}>
    {selectedGenderFilters.includes('female') ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" 
        className={styles.icon}/></svg>) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
        className={styles.icon}/></svg>)}
    <input
      type="checkbox"
      checked={selectedGenderFilters.includes('female')}
      onChange={() => handleGenderFilterChange('female')}/>
    female
  </label>
    </div>)}
  </div>
  <div className={styles.filterGroup}>
    <button className={styles.filterSubButton} onClick={toggleAgeOptions}>
        {!showAgeOptions? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 9L12 17L20 9" 
          className={styles.icon}/></svg> : ''}
          By Age
          </button>

        {showAgeOptions && (
      <div className={styles.filterOptions}>
          <label className={styles.label}>
            {selectedAgeFilters.includes('up to 1 year') ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" 
        className={styles.icon}/></svg>) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
        className={styles.icon}/></svg>)}
    <input
      type="checkbox"
      checked={selectedAgeFilters.includes('up to 1 year')}
      onChange={() => handleAgeFilterChange('up to 1 year')}/>
    up to 1 year
            </label>

  <label className={styles.label}>
    {selectedAgeFilters.includes('up to 2 years') ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" 
        className={styles.icon}/></svg>) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
        className={styles.icon}
        />
      </svg>
    )}
    <input
      type="checkbox"
      checked={selectedAgeFilters.includes('up to 2 years')}
      onChange={() => handleAgeFilterChange('up to 2 years')}
    />
    up to 2 years
    </label>

    <label className={styles.label}>
    {selectedAgeFilters.includes('from 2 years') ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" 
        className={styles.icon}/></svg>) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
        className={styles.icon}/></svg>)}
    <input
      type="checkbox"
      checked={selectedAgeFilters.includes('from 2 years')}
      onChange={() => handleAgeFilterChange('from 2 years')}/>
    from 2 years
  </label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}