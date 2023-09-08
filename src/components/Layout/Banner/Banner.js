import banner1300 from '../../../assets/img/main-img-1300.jpg';
import banner1020 from '../../../assets/img/main-img-1020.jpg';
import banner680 from '../../../assets/img/main-img-680.jpg';
import banner340 from '../../../assets/img/main-img-340.jpg';
import Container from '../../UI/Container/Container';

const Banner = () => {
  return (
    <Container>
      {/* <img src={banner1300} alt='Nutritive cosmetics' /> */}
      <img
        srcSet={`${banner340} 340w, ${banner680} 680w, ${banner1020} 1020w, ${banner1300} 1300w`}
        // srcSet='main-img-340.jpg 340w, /assets/img/main-img-680.jpg 680w, /assets/img/main-img-1020.jpg 1020w, /assets/img/main-img-1300.jpg 1300w'
        sizes='(max-width: 1320px) calc(100vw - 20px), 1300px'
        src={banner1300}
        alt='Nutritive cosmetics'
      />
    </Container>
  );
};

export default Banner;
