import React from 'react';
import Link from 'next/link';


	class Article extends React.Component {
		static async getInitialProps ({query}) {
			return {
				article: query.article
			}
		}

		state = {
			loading: false,
			click: false,
			comments: [],
		}

		handleComment = (id) => {
			
			return async () => {
				this.setState({loading: true, click: true});

				try {
					let response = await fetch(`http://localhost:3000/api/comments/${id}`);
					let comments = await response.json();
					console.log(comments);
					this.setState({loading: false, click: false, comments: comments});

				} catch (e) {
					this.setState({loading: false, click: false});
					console.log('something wrong');
				}
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
									<p>Category: <Link href={`/category/${article.category.toLowerCase()}`}><a>{article.category}</a></Link></p>
									<div onClick={this.handleComment(article.id)}>
										Comments: {article.countComments}
										{
										 this.state.loading || this.state.click ? <h3> Loading...</h3>
										: this.state.comments ? <ul>
											{
											this.state.comments.map(item => {
												return (
													<li key={item.id}>
														<span>{item.text}</span>
														<span>{item.dataCreate}</span>
													</li>
												)
											})
											}
										</ul> : ''
										}
									
									</div>
								</div>
							</article>
			)
		}
	}

/*
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
					<p>Comments: {article.countComments}</p>
				</div>
			</article>
	)
}

Article.getInitialProps = async({query}) => {
	return {
		article: query.article
	}
}*/

export default Article;