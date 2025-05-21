import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
const form = document.querySelector(".form")
const input = form.elements["search-text"]
form.addEventListener("submit", e => {
    e.preventDefault();
    const query = input.value.trim()
    if (!query) {
        iziToast.warning({
            message: 'Please enter a search query!',
            
        })
        return;
    }
    clearGallery()
    showLoader()

    getImagesByQuery(query).then(
        data => {
            if (data.hits.length === 0) {
                iziToast.warning({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                })
            } else {
                createGallery(data.hits)
            }
        }
    ).catch(err => {
        console.error(err);
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        })
    }).finally(() => {
        hideLoader();
    });
});