import React from 'react';
import Link from 'next/link';
/*
class Article extends React.Component {
    static async getInitialProps ({query}) {
        return {
            article: query.article
        }
    }

    render() { 
        const { article } = this.props;

        return (
            <article className="card">
							<div className="card-header">
								<h4 className="card-title">{article.title}</h4>
							</div>
							<div className="card-body">
								<p className="card-text">
									{article.fullContent}
								</p>
							</div>
							<div className="card-footer">
								<p>Author {article.author}</p>
								<p>Data create: {article.dataCreate}</p>
								<p>Category: {article.category}</p>
							</div>
						</article>
        )
    }
}
*/

const Article = (props) => {
	const { article } = props;
	return (
		<article className="card">
			<div className="card-header">
				<h4 className="card-title">{article.title}</h4>
			</div>
			<div className="card-body">
				<p className="card-text">
					{article.fullContent}
				</p>
			</div>
			<div className="card-footer">
				<p>Author {article.author}</p>
				<p>Data create: {article.dataCreate}</p>
				<p>Category: <Link href={`/category/${article.category.toLowerCase()}`}><a>{article.category}</a></Link></p>
			</div>
		</article>
)
}

Article.getInitialProps = async({query}) => {
	return {
		article: query.article
	}
}

export default Article;