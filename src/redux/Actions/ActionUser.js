import axios from 'axios';
import {getData } from '../ReducerSlicers/UserSlice';

export const getApi = () => async (dispatch) => {
    try {
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        dispatch(getData(data.results))
    } catch (error) {
        console.log(error);
    }
}