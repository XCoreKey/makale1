import * as Yup from "yup"

const validations = Yup.object().shape({
  comment: Yup.string("Lütfet yazı yazınız").required("Bu alan zorunludur."),
  });

  export default validations;