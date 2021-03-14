import { CellValue } from 'react-table';
import { Column } from 'common/interfaces';
import { EditUserPayloadKey } from 'common/enums';

const checkIdentifierType = (identifier:string):Column =>{
    return {
      Header: identifier,
      accessor: identifier,
      Cell : ({value}:CellValue)=>{
        const dates:string[] = [EditUserPayloadKey.BIRTHDATE,EditUserPayloadKey.CREATED_AT,EditUserPayloadKey.UPDATED_AT];
        if(dates.includes(identifier)){
          return value.toString().slice(0,10).replaceAll('-', '.')
        }else{
          return value ? value.toString() : ''
        }
      }
    };
}

export {checkIdentifierType}
