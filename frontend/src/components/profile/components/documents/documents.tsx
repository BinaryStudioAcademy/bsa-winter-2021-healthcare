import * as React from "react";
import { IDocument } from 'common/interfaces';
import { Modal, Button, Radio } from 'components/common';
import { ButtonColor, ButtonStyleType, DocumentStatus, ButtonType } from 'common/enums';
import { InputChangeEvent } from 'common/types'
import styles from './styles.module.scss';
import { UsersActionCreator } from 'store/slices';
import { useDispatch } from 'react-redux';

type Props = {
  document: IDocument
}

const Documents: React.FC<Props> = ({document}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState<DocumentStatus>(document.status);
  const dispatch = useDispatch();
  const handleChangeRadio = (event:InputChangeEvent) => {
    setRadioValue(event.target.value as DocumentStatus)
  }
  const handleSubmit = () => {
    const update:IDocument = {...document, status: radioValue}        
    dispatch(UsersActionCreator.editUserDocument(document.id, update))
    setIsModalOpen(false)    
  }
  return (
    <div className={styles.documentContainer}>
      <span>Document status: </span><span>{document.status}</span>
      <div className={styles.checkButton}>
        <Button
          label="Check document"
          color={ButtonColor.GRAY_LIGHT}
          styleType={ButtonStyleType.WITHOUT_BORDER}
          hasHiddenLabel={false}
          onClick={()=>setIsModalOpen(true)}
        />
      </div>     
      <Modal isShow={isModalOpen}>
        <div className={styles.formContainer}>
          <button className={styles.closeButton} onClick={()=>setIsModalOpen(false)} type="button">
              &#10060;
          </button>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.radio}>
              <Radio
                options={[
                  {
                    label:'verified',
                    value: DocumentStatus.VERIFIED
                  },
                  {
                    label:'in rewiew',
                    value: DocumentStatus.IN_REVIEW
                  }
                ]}
                value={radioValue}
                name="document status"
                onChange={handleChangeRadio}
              />
            </div>          
            <div className={styles.confirmButton}>
              <Button
                label="Confirm"
                color={ButtonColor.PRIMARY_DARK}
                styleType={ButtonStyleType.WITHOUT_BORDER}
                type={ButtonType.SUBMIT}
                hasHiddenLabel={false}                
              />
            </div>          
          </form>
          <div className={styles.imgContainer}>
            <img src={document.imagePath}/>
          </div>        
        </div>     
      </Modal>
    </div>
  );
};

export default Documents;

