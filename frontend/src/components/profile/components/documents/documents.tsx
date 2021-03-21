import * as React from 'react';
import { IDocument } from 'common/interfaces';
import { Button } from 'components/common';
import { ButtonColor, ButtonStyleType } from 'common/enums';
import { ProfileActionCreator } from 'store/slices';
import { useDispatch } from 'react-redux';
import { documentStatusToReadable } from '../../common';
import EditeDocumentPopup from '../edite-document-popup/edite-document-popup';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  document: IDocument;
};

const Documents: React.FC<Props> = ({ document }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleEditeDocument = (update:IDocument) => {
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
        <EditeDocumentPopup
          document={document}
          isShow={isModalOpen}
          onToggleModal={handleToggleModal}
          onEditeDocument={handleEditeDocument}
        />
      </div>
    </div>
  );
};

export default Documents;
