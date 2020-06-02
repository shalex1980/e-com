import React from 'react';
import Preview from '../../components/includes/Preview';


const Category = (props) => {
	const { articles } = props;
	console.log(articles);
	return (
		<>
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
		articles: query.articles
	}
}

export default Category;