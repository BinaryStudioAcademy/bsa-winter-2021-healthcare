import { CellValue } from 'react-table';
import { DateIdentifier } from 'common/enums';
import { Column } from 'common/interfaces';

const checkIdentifierType = (identifier:string):Column =>{
    return {
      Header: identifier,
      accessor: identifier,
      Cell : ({value}:CellValue)=>{
        const dates:string[] = [DateIdentifier.BIRTHDATE,DateIdentifier.CREATED_AT,DateIdentifier.UPDATED_AT];
        if(dates.includes(identifier)){
          return value.toString().slice(0,10).replaceAll('-', '/')
        }else{
          return value ? value.toString() : ''
        }
      }
    };
}

export {checkIdentifierType}
