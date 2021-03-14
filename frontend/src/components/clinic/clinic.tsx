import * as React from 'react';
import { Modal } from 'components/common'
import AddClinic from './components/add-clinic/add-clinic'

const Clinic: React.FC = () => {
  const [showPopUp,setShowPopUp] = React.useState<boolean>(false)

  const showPopUpHandler = () => setShowPopUp(true);
  const hidePopUpHandler = () => setShowPopUp(false);
  return (
    <div>
      <button onClick={showPopUpHandler}>Add clinic</button>
      <Modal isShow={showPopUp}>
        <AddClinic onFormHide={hidePopUpHandler}/>
      </Modal>
    </div>
  );
};

export default Clinic;
