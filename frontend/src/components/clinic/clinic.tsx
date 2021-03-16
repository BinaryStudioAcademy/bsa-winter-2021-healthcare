import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'components/common'
import AddClinic from './components/add-clinic/add-clinic'
import { RootState } from 'common/types';
import { IClinic } from 'common/interfaces';
import { ClinicsActionCreator } from 'store/slices';
import { DEFAULT_CLINIC_VALUE } from './components/add-clinic/common';

const Clinic: React.FC = () => {
  const [showPopUp,setShowPopUp] = React.useState<boolean>(false);

  const { clinics } = useSelector(({ clinic }: RootState) => ({
    clinics: clinic.clinics,
  }));

  const dispatch = useDispatch();
  const handleCreateClinic = (clinicInfo:IClinic) => {
    dispatch(ClinicsActionCreator.addClinic({...DEFAULT_CLINIC_VALUE,...clinicInfo}));
    hidePopUpHandler();
  }

  const showPopUpHandler = () => setShowPopUp(true);
  const hidePopUpHandler = () => setShowPopUp(false);

  React.useEffect(()=> {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <div>
      <button onClick={showPopUpHandler}>Add clinic</button>
      <ul>
        {clinics.map((clinic)=><li key={clinic.id}>{clinic.name}</li>)}
      </ul>
      <Modal isShow={showPopUp}>
        <AddClinic onCreateClinic={handleCreateClinic} onFormHide={hidePopUpHandler}/>
      </Modal>
    </div>
  );
};

export default Clinic;
