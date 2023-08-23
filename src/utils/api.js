import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =/* import.meta.env.VITE_APP_TMDB_TOKEN*/
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWEyNmQ1ODk2MWIwMWVkNWY4NzVlNmE0MmZlODk2OCIsInN1YiI6IjY0ZTQ5ZDE5YzNjODkxMDExZDljYWNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abR7EjFgkQ7-isT1HxoDcggA9oNC7baSSTMs1u719A0"
const headers = {
    Authorization: "bearer "+ TMDB_TOKEN,
}

export const fetchDataFromApi = async(url,params) =>{
    try{
        const {data} =   await axios.get(
            BASE_URL + url , {
                headers,
                params
            }
        )
        return data;
    }
    catch (err){
        console.log(err);
        return err;
    }
}