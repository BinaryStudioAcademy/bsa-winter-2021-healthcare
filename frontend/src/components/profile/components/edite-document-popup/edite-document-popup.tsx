import * as React from 'react';
import { IDocument } from 'common/interfaces';
import { Modal, Button, Radio } from 'components/common';
import { ButtonColor, ButtonStyleType, DocumentStatus, ButtonType } from 'common/enums';
import { BindingCb } from 'common/types';
import { useForm } from 'react-hook-form';
import { documentStatusToReadable, EditeDocumentCb, DocumentFormData } from '../../common';
import styles from './styles.module.scss';

type Props = {
  document: IDocument;
  isShow:boolean;
  onToggleModal:BindingCb;
  onEditeDocument:EditeDocumentCb;
};

const verifyDocumentOptions = [
  {
    label: documentStatusToReadable[DocumentStatus.VERIFIED],
    value: DocumentStatus.VERIFIED,
  },
  {
    label: documentStatusToReadable[DocumentStatus.IN_REVIEW],
    value: DocumentStatus.IN_REVIEW,
  },
];

const EditeDocumentPopup: React.FC<Props> = ({ document, isShow, onToggleModal, onEditeDocument }) => {
  const [radioValue, setRadioValue] = React.useState<DocumentStatus>(document.status);
  const { register, handleSubmit, watch } = useForm<DocumentFormData>();

  const handleChangeRadio = () => {
    const { status } = watch();
    setRadioValue(status);
  };
  const handleSubmitForm = (formData:DocumentFormData) => {
    const update:IDocument = { ...document, status: formData.status };
    onEditeDocument(update);
  };
  return (
    <Modal isShow={isShow}>
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={onToggleModal} type="button">
          &#10060;
        </button>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.radio}>
            <Radio
              options={verifyDocumentOptions}
              register={register}
              value={radioValue}
              name="status"
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
  );
};

export default EditeDocumentPopup;
