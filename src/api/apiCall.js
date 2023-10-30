import axios from "axios";

const GetApiLogin = async () => {
  try {
    const response = await axios.get("http://localhost:8000/userLoginHistory");
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      return "Chyba 404: Stránka nenalezena";
    } else {
      return error.message;
    }
  }
};
const GetApiPayments = async () => {
  try {
    const response = await axios.get("http://localhost:8001/userPayments");
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      return "Chyba 404: Stránka nenalezena";
    } else {
      return error.message;
    }
  }
};

export { GetApiLogin, GetApiPayments };
