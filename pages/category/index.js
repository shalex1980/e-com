import React from 'react';
import Preview from '../../components/includes/Preview';


const Category = (props) => {
	const { articles, category } = props;

	return (
		<>
			<h3>Category: {category}</h3>
			{
			 articles.map((item) => {
				return <Preview {...item} key={item.id} />
				})
			}
		</>
)
}

Category.getInitialProps = async({query}) => {
	return {
		articles: query.articles,
		category: query.category
	}
}

export default Category;