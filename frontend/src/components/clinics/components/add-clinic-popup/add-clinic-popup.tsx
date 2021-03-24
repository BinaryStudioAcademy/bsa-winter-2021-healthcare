import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  ClinicKey,
  ClinicType,
  InputColor,
  InputType,
} from 'common/enums';
import { Button, Modal, Select, TextInput } from 'components/common';
import styles from './styles.module.scss';
import { IClinicPayload } from 'common/interfaces';
import { InputChangeEvent } from 'common/types';
import { createOptions } from 'helpers';
import { addClinic as validationClinicSchema } from 'validation-schemas';
import { DEFAULT_CLINIC_VALUE } from 'components/clinics/components/common/constants';
import { ClinicsActionCreator } from 'store/slices';

const DEFAULT_FILE_IDX = 0;

interface IProps {
  onFormHide: () => void;
  onCreateClinic: (clinicData: IClinicPayload) => void;
  isOpen: boolean;
}

const clinicTypeOptions = createOptions<string>(Object.values(ClinicType));

const AddClinicPopup: React.FC<IProps> = ({
  onFormHide,
  onCreateClinic,
  isOpen,
}) => {
  const [image, setImage] = React.useState<string>(DEFAULT_CLINIC_VALUE.imagePath);
  const { handleSubmit, errors, control } = useForm<IClinicPayload>({
    resolver: yupResolver(validationClinicSchema),
    defaultValues: DEFAULT_CLINIC_VALUE,
    mode: 'onChange',
  });

  const handleUploadFile = (event: InputChangeEvent) => {
    const file = event.target.files![DEFAULT_FILE_IDX];
    if (file){
      ClinicsActionCreator.uploadClinicImage(file).then(path => {
        setImage(path);
      });
    }
  };

  const handleSubmitForm = (clinicData: IClinicPayload) => {
    onCreateClinic({
      ...clinicData,
      [ClinicKey.IMAGE_PATH]: image,
    });
  };

  return (
    <Modal isShow={isOpen}>
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={styles.createForm}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Add clinic</h2>
            <button
              className={styles.closeButton}
              onClick={onFormHide}
              type="button"
            >
              &#10060;
              <span className="visually-hidden">Close edit user popup</span>
            </button>
          </div>

          <div className={styles.inputBlock}>
            <label className={styles.inputImage} style={{ backgroundImage: `url(${image})` }}>
              <div className={styles.blurBottom}>
                <div className={styles.cameraIcon}></div>
              </div>
              <span className="visually-hidden">Upload image input</span>
              <input type="file" className={styles.inputImageBtn} onChange={handleUploadFile} />
            </label>
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={ClinicKey.NAME}
              label="Name"
              hasHiddenLabel={false}
              placeholder="Name"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={ClinicKey.ADDRESS}
              label="Address"
              hasHiddenLabel={false}
              placeholder="Address"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <Select
              name={ClinicKey.CLINIC_TYPE}
              label="Status"
              hasHiddenLabel={false}
              placeholder="Status"
              options={clinicTypeOptions}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.submitBtn}>
            <Button
              label="Add"
              hasHiddenLabel={false}
              type={ButtonType.SUBMIT}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddClinicPopup;
