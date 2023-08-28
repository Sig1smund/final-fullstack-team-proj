export const calculateAge = birthdateString => {
  const [day, month, year] = birthdateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const birthdate = new Date(year, monthIndex, day);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;
  const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
  const ageInYears = ageInMilliseconds / millisecondsInYear;
  const age = Math.floor(ageInYears);
  return age;
};

export const cutSity = location => {
  if (location.length > 5) {
    const city = location.slice(0, 4) + '...';
    return city;
  } else return location;
};
