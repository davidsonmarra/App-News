import * as Yup from "yup";

export const schema = Yup.object().shape({
  search: Yup.string(),
});
