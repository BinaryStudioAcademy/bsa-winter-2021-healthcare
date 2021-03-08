import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';

const doctors = [
  {
    id: 'fhfjgfhjfjh',
    name: 'Rick Lowk',
    imagePath: "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    department: 'Ginecologist',
    clinic: 'Privacy hospital',
    adress: 'Lviv',
    phone: '555-888'
  },
  {
    id: 'hhgjghjg',
    name: 'Alisa Vovk',
    imagePath: "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    department: 'Pediatrician',
    clinic: 'Public hospital',
    adress: 'Kyiv',
    phone: '838'
  }
]

type Doctor = {
  id:string
  name:string
  imagePath:string
  department: string
  clinic: string
  adress: string
  phone: string
}

type DoctorsState = {
  doctors: Doctor[];
};

const initialState: DoctorsState = {
  doctors
};

const { reducer, actions } = createSlice({
  name: ReducerName.DOCTORS,
  initialState,
  reducers: {
    setDocors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
    },
  },
});

/*const getDoctorsAsync = (): AppThunk => (dispatch) => {

};*/

const DoctorsActionCreator = {
  ...actions,
  //getDoctorsAsync
};

export { DoctorsActionCreator, reducer };
