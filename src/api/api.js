import instance from './instance';


export default {
    loadAllBreeds() {
        return instance.get('/breeds/list/all');
    },
    loadRandomImageByBreed(breed, subBreed, count) {
        const requestAddressBreedPart = [breed, subBreed].filter(Boolean).join('/');
        const requestAddressCountPart = count
            ? `/${count}`
            : '';
        return instance.get(`/breed/${requestAddressBreedPart}/images/random${requestAddressCountPart}`);
    },
    loadRandomImage(count) {
        return instance.get('/breeds/image/random' + (count ? '/' + count : ''));
    },
}