import * as React from 'react';
import { IUserTypeDoctor } from 'common/interfaces';
import { Card } from 'components/common';
import { ButtonType, ButtonColor, ButtonStyleType, CardIcon, FieldsStyleTypes } from 'common/enums';

type Props = {
  user:IUserTypeDoctor
}

const DoctorItem: React.FC<Props> = ({user}) => {

  return (
    <Card
      imagePath={user.imagePath}
      headerFields={[
        {
          label: user.doctor.department,
          fieldType:FieldsStyleTypes.TERTIARY
        },
        {
          label: `${user.name} ${user.surname}`,
          fieldType:FieldsStyleTypes.PRIMARY
        },
        {
          label: user.doctor.clinic.name,
          fieldType:FieldsStyleTypes.SECONDARY
        },
        {
          label: user.doctor.clinic.clinicType,
          fieldType:FieldsStyleTypes.WITH_LABEL
        }
      ]}
      infoBlocks={[
        {icon:CardIcon.LOCATION, label:user.doctor.clinic.address},
        {icon:CardIcon.PHONE, label:user.phone}
      ]}
      mainButton={{
        label:"Make an appointment",
        hasHiddenLabel:false,
        type: ButtonType.SUBMIT,
        color: ButtonColor.PRIMARY_DARK,
        styleType: ButtonStyleType.WITHOUT_BORDER
      }}
      secButton={{
        icon:CardIcon.CHAT
      }}
    />
  );
};

export default DoctorItem;
