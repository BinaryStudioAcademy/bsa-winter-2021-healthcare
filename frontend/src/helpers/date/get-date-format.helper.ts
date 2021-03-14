
export function getDateFormat(data:string){
    const date = new Date(data);    
    const calDate = date.getDate();
    const month = date.toLocaleString('en-EN', { month: 'long' });
    const year = date.getFullYear();
    return `${calDate} ${month} ${year}`
  }
