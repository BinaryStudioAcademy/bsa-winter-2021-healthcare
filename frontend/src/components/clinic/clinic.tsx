import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'components/common'
import AddClinic from './components/add-clinic/add-clinic'
import { RootState } from 'common/types';

const Clinic: React.FC = () => {
  const [showPopUp,setShowPopUp] = React.useState<boolean>(false)
  const { clinics } = useSelector(({ clinic }: RootState) => ({
    clinics: clinic.clinics,
  }));

  const showPopUpHandler = () => setShowPopUp(true);
  const hidePopUpHandler = () => setShowPopUp(false);
  return (
    <div>
      <button onClick={showPopUpHandler}>Add clinic</button>
      <ul>
        {clinics.map((clinic)=><li key={clinic.id}>{clinic.name}</li>)}
      </ul>
      <Modal isShow={showPopUp}>
        <AddClinic onFormHide={hidePopUpHandler}/>
      </Modal>
    </div>
  );
};

export default Clinic;
