import { DateIdentifiers } from 'common/enums';
import { Column } from 'common/interfaces';

const checkIdentifierType = (identifier:string):Column =>{
    return {
      Header: identifier,
      accessor: identifier,
      Cell : ({value}:any)=>{
        const dates:string[] = [DateIdentifiers.BIRTHDATE,DateIdentifiers.CREATED_AT,DateIdentifiers.UPDATED_AT];
        if(dates.includes(identifier)){
          return value.toString().slice(0,10).replaceAll('-', '/')
        }else{
          return value ? value.toString() : ''
        }
      }
    };
}

export {checkIdentifierType}
