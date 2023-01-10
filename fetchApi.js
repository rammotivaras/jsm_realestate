import axios from 'axios';

 export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), { 


        headers: {
            'X-RapidAPI-Key': '6936d42203msh00987eb21017650p17b94ajsn056991c31830',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}


