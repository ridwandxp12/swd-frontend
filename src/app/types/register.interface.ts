import { Dayjs } from "dayjs";

/** ===== Form State ===== */
export interface FormData {
  title: "mr" | "ms" | "mrs" | "";
  firstname: string;
  lastname: string;
  birthday: Dayjs | null;
  nationality: "thai" | "other" | "";
  citizenId: string[]; // 5 ช่อง
  gender: "male" | "female" | "unisex" | "";
  mobileCode: "+66" | "+1";
  mobile: string;
  passport: string;
  salary: string;
  id: number;
}

/** ===== Table Data ===== */
export interface DataListItem {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  birthday: string;
  nationality: string;
  citizenId: string;
  gender: string;
  mobileCode: string;
  mobile: string;
  passport: string;
  salary: string;
}

export interface RegisterState {
  formData: FormData;
  dataList: DataListItem[];
  isEdit: boolean;
}
