import axios from 'axios';


export const fetchData = async () => {
  let corona_stat_url = 'https://covid19.mathdro.id/api/countries/india';
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(corona_stat_url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};


export const hospitalData = async () => {
  const url = `http://localhost:5000/api/hospital/info/getInfo`;
  try {
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
}


export const hospitalRegister = async(data) => {
  const url = `http://localhost:5000/auth/hospital/register`;
  try {
    const response = await axios.post(url,data)
    localStorage.setItem("Token", response.data.token)
  } catch (error) {
    console.log(error)
  }
}