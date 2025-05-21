import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query){

    const params = {
        key: "50422817-e50accda15a7155d4d1bff625",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };
    return axios.get("https://pixabay.com/api/", { params }).then(response => response.data);
}