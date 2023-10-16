import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import Container from '../components/UI/Container/Container';

const ErrorPage = () => {
  return (
    <div className='page-wrapper'>
      <Header />

      <Container className='error-content'>
        <h1>404 - цієї сторінки не існує :(</h1>
      </Container>

      <Footer />
    </div>
  );
};

export default ErrorPage;
