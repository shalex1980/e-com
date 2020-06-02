import Head from 'next/head';

const PageTitle = ({pageTitle}) => {

  return (

    <Head>

      <title>{pageTitle || 'E-commerce'}</title>
      
    </Head>

  )
} 

export default PageTitle;