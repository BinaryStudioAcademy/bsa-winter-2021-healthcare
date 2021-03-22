import * as React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { IDocument } from 'common/interfaces';
import { Button } from 'components/common';
import { ButtonColor, ButtonStyleType } from 'common/enums';
import { ProfileActionCreator } from 'store/slices';
import { documentStatusToReadable } from '../../common';
import EditDocumentPopup from '../edit-document-popup/edit-document-popup';
import styles from './styles.module.scss';

type Props = {
  document: IDocument;
};

const Documents: React.FC<Props> = ({ document }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleEditDocument = (update: IDocument) => {
    dispatch(ProfileActionCreator.editUserDocument(update));
    handleToggleModal();
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.documentContainer}>
      <span>Document status: </span>
      <span className={clsx(styles[document.status], styles.label)}>
        {documentStatusToReadable[document.status]}
      </span>
      <div className={styles.checkButton}>
        <Button
          label="Check document"
          color={ButtonColor.GRAY_LIGHT}
          styleType={ButtonStyleType.WITHOUT_BORDER}
          hasHiddenLabel={false}
          onClick={handleToggleModal}
        />
        <EditDocumentPopup
          document={document}
          isShow={isModalOpen}
          onToggleModal={handleToggleModal}
          onEditDocument={handleEditDocument}
        />
      </div>
    </div>
  );
};

export default Documents;
