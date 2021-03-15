
const getDateFormat = (value:string):string => {
  const date = new Date(value);
  const calDate = date.getDate();
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  return `${calDate} ${month} ${year}`
}

export { getDateFormat };
