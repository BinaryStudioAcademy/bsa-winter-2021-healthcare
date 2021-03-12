import * as React from 'react';
import { Clinic } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics())
    console.log(clinics);
  }, [])

  return (
    <>
      {clinics.map(clinic => <Clinic key={clinic.id} clinic={clinic} />)}
    </>
  )
}

export default Clinics;
