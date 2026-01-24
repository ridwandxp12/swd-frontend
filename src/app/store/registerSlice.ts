import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {
  RegisterState,
  FormData,
  DataListItem,
} from "../types/register.interface";
const initialState: RegisterState = {
  formData: {
    title: "",
    firstname: "",
    lastname: "",
    birthday: null,
    nationality: "",
    citizenId: ["", "", "", "", ""],
    gender: "",
    mobileCode: "+66",
    mobile: "",
    passport: "",
    salary: "",
    id: 0,
  },
  dataList: [],
  isEdit: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFormData<K extends keyof FormData>(
      state: RegisterState,
      action: PayloadAction<{ key: K; value: FormData[K] }>,
    ) {
      state.formData[action.payload.key] = action.payload.value;
    },

    resetForm(state) {
      state.formData = initialState.formData;
      state.isEdit = false;
    },

    setDataList(state, action: PayloadAction<any[]>) {
      state.dataList = action.payload;
      localStorage.setItem("values", JSON.stringify(action.payload));
    },
    submitForm(state) {
      const submitData: DataListItem = {
        ...state.formData,
        birthday: state.formData.birthday
          ? state.formData.birthday.toISOString()
          : "",
        citizenId: state.formData.citizenId.join("-"),
      };

      if (state.isEdit) {
        state.dataList = state.dataList.map((item) =>
          item.id === submitData.id ? submitData : item,
        );
      } else {
        state.dataList.push({
          ...submitData,
          id: state.dataList.length + 1,
        });
      }

      state.isEdit = false;
      state.formData = initialState.formData;
    },

    editRow(state, action: PayloadAction<any>) {
      state.formData = {
        ...action.payload,
        birthday: dayjs(action.payload.birthday),
        citizenId: action.payload.citizenId.split("-"),
      };
      state.isEdit = true;
    },

    deleteRow(state, action: PayloadAction<number>) {
      state.dataList.splice(action.payload, 1);
      localStorage.setItem("values", JSON.stringify(state.dataList));
    },

    deleteAll(state) {
      state.dataList = [];
      localStorage.removeItem("values");
    },

    initFromStorage(state) {
      const values = localStorage.getItem("values");
      if (values) {
        state.dataList = JSON.parse(values);
      }
    },
  },
});

export const {
  setFormData,
  resetForm,
  submitForm,
  editRow,
  deleteRow,
  deleteAll,
  initFromStorage,
} = registerSlice.actions;

export default registerSlice.reducer;
