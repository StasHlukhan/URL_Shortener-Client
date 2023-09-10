import axios from "axios";

export const postUrl = async (url:string)=> {
    const response = await axios.post(
      'https://localhost:7134/api/shorten',
      {url:url}
      
    );
    console.log(response.data);
    return response.data;
  }
  export const deleteUrl  = async (id: string)=> {
    try {
      await axios.delete(`https://localhost:7134/api/shortenedurls/${id}`, {
      });
    } catch (e: unknown) {
      const err = e as Error;

      console.log(err);
    }
  }