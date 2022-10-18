import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux/es/exports';

import { useEffect } from 'react';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.Component';
import Category from '../Category/Category.Component';
import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.Utils';
import { setCategories } from '../../Store/Categories/CategoryAction';

import './Shop.Styles.scss';

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    }, [dispatch])

    return(
        <Routes>
            <Route index element={ <CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;