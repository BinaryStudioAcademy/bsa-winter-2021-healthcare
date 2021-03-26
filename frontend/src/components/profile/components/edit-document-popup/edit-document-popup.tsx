import * as React from 'react';
import { IDocument } from 'common/interfaces';
import { Modal, Button, Radio } from 'components/common';
import {
  ButtonColor,
  ButtonStyleType,
  DocumentStatus,
  ButtonType,
  DocumentKey,
} from 'common/enums';
import { BindingCb } from 'common/types';
import { useForm } from 'react-hook-form';
import {
  documentStatusToReadable,
  EditDocumentCb,
  DocumentFormData,
} from '../../common';
import { createOptions } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  document: IDocument;
  isShow: boolean;
  onToggleModal: BindingCb;
  onEditDocument: EditDocumentCb;
};

const verifyDocumentOptions = createOptions<string>(
  Object.values(DocumentStatus),
  (documentStatus) => ({
    value: documentStatus,
    label: documentStatusToReadable[documentStatus as DocumentStatus],
  }),
);

const EditDocumentPopup: React.FC<Props> = ({
  document,
  isShow,
  onToggleModal,
  onEditDocument,
}) => {
  const { register, handleSubmit, watch, errors } = useForm<DocumentFormData>({
    defaultValues: {
      [DocumentKey.STATUS]: document.status,
    },
  });
  const status = watch(DocumentKey.STATUS, document.status);

  const handleSubmitForm = (formData: DocumentFormData) => {
    const updatedDocument: IDocument = {
      ...document,
      status: formData.status,
    };

    onEditDocument(updatedDocument);
  };
  return (
    <Modal isShow={isShow}>
      <div className={styles.formContainer}>
        <button
          className={styles.closeButton}
          onClick={onToggleModal}
          type="button"
        >
          &#10060;
          <span className="visually-hidden">Close edit document popup</span>
        </button>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.radio}>
            <Radio
              options={verifyDocumentOptions}
              register={register}
              value={status}
              name={DocumentKey.STATUS}
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
          <img className={styles.documentImg} src={document.imagePath} />
        </div>
      </div>
    </Modal>
  );
};

export default EditDocumentPopup;
