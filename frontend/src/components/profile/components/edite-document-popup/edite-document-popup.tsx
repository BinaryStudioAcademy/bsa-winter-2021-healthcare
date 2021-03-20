import * as React from 'react';
import { IDocument } from 'common/interfaces';
import { Modal, Button, Radio } from 'components/common';
import { ButtonColor, ButtonStyleType, DocumentStatus, ButtonType } from 'common/enums';
import { BindingCb } from 'common/types';
import { useForm } from 'react-hook-form';
import {
  documentStatusToReadable,
  EditeDocumentCb,
  DocumentFormData,
  DocumentFormKey,
} from '../../common';
import { createOptions } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  document: IDocument;
  isShow:boolean;
  onToggleModal:BindingCb;
  onEditeDocument:EditeDocumentCb;
};

const verifyDocumentOptions = createOptions<string>(Object.values(DocumentStatus), (documentStatus) => ({
  value: documentStatus,
  label: documentStatusToReadable[(documentStatus as DocumentStatus)],
}));

const EditeDocumentPopup: React.FC<Props> = ({ document, isShow, onToggleModal, onEditeDocument }) => {
  const defaultValues = { [DocumentFormKey.STATUS]: document.status };
  const { register, handleSubmit, watch, errors } = useForm<DocumentFormData>({
    defaultValues: defaultValues,
  });
  const status = watch(DocumentFormKey.STATUS, document.status);

  const handleSubmitForm = (formData:DocumentFormData) => {
    const update = { ...document, status: formData.status };
    onEditeDocument(update);
  };
  return (
    <Modal isShow={isShow}>
      <div className={styles.visualyHidden}>
        <button className={styles.closeButton} onClick={onToggleModal} type="button">
          &#10060;
        </button>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.radio}>
            <Radio
              options={verifyDocumentOptions}
              register={register}
              value={status}
              name={DocumentFormKey.STATUS}
              errors={errors}
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
