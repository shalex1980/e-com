import MainLayout from '../components/layouts/MainLayout';
import App from 'next/app';


class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
  
    return {
      pageProps: Component.getInitialProps ?
      await Component.getInitialProps(ctx)
      : {}
    }
  }

   
  render () {

    const { Component, pageProps } = this.props;
  
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
}

export default MyApp;
