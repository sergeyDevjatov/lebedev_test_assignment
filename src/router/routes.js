const MainPage = () => import("@/pages/MainPage");
const BreedPage = () => import("@/pages/BreedPage");
const FavoritesPage = () => import("@/pages/FavoritesPage");

export default [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/breed/:breed',
        name: 'breed',
        component: BreedPage,
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesPage,
    },
];