import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux/es/exports';

import { useEffect, useState, Fragment } from 'react';

import { selectCategoriesMap } from '../../Store/Categories/CategorySelector';

import ProductCard from '../../Components/ComponentCard/ProductCard.Component';

import './Category.Styles.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  return (
    <Fragment>
    <h2 className='category-title'>{category}</h2>
    <div className='category-container'>
      {products &&
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
    </Fragment>
  )
};

export default Category;