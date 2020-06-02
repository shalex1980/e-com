//import { useState } from 'react';
import React from 'react';
import PageTitle from '../components/includes/PageTitle';
import Preview from '../components/includes/Preview';

class News extends React.Component {

  static async getInitialProps(ctx) {
    /*let articles ;
    fetch('http://localhost:3000/api/articles')
      .then(response => {
        articles =  response.json();
        console.log('Data Articles ', articles);
        this.setState({loading: false});
      })
      .catch(err => {
        console.log('Error')
      })*/

    let articles;

      try {
        let res = await fetch('http://localhost:3000/api/articles');
        //console.log(res);
        articles = await res.json();
        //
        //console.log(articles)

      } catch (e) {
        console.error('Try later');
      }
      //this.setState({loading: false});
      return {
        articles: articles,
        loading: false
      }
  }

  state = {
    loading: true
  }

  render() {
      const articles = this.props.articles || false;
      //const loading = this.props.article ? false : true;
      //console.log(articles)
    return (
        <>
          <PageTitle pageTitle='News' />
    
          <h1 className="text-center"> News Page</h1>
    
          { 
            !articles ? <h3>Loading ...</h3>
            : articles.map((item) => {
              return <Preview {...item} key={item.id} />
            })
          }
    
        </>
      )
  }
}

// const News = (props) => {

//   const [loading, setLoading ] = useState(true);
//   const  articles = props.articles;
//   const loading = props.loading || true;


//   return (
//     <>
//       <PageTitle pageTitle='News' />

//       <h1 className="text-center"> News Page</h1>

//       { 
//         loading ? <h3>Loading ...</h3>
//         : articles.map((item) => {
//           return <Preview {...item} key={item.id} />
//         })
//       }

//     </>
//   )
// }

// News.getInitialProps = async (ctx) => {

//   /*const res = await fetch('http://localhost:3000/api/articles');

//   const articles = await res.json();*/

//   fetch('http://localhost:3000/api/articles')
  

//   return { 
//     articles: articles,
//     loading: false
//     }

// }

// export async function getStaticProps () {
//   const res = await fetch('http://localhost:3000/api/articles');
//   const articles = await res.json();

//   return {
//     props: {
//       articles: articles
//     }
//   }
// }

export default News;

