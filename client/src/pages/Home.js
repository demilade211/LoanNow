
import ClickButton from "../Components/Button";
import Footer from "../Components/Footer";
import homedata from "../data/homeData";
import {
  homeContainer,
  container,
  image__container,
  container__text,
  section,
  container__inner,
  attention__draw,
  title,
  subtitle,
  image_inner_container,
} from "../stylesheets/home.module.css";


const Home = () => {
  const styles = [container, section].join(" ");
  return (
    <div className={homeContainer}>
      {homedata.map((data) => (
        <div className={styles} key={data.id}>
          <div className={image__container}>
            <div className={image_inner_container}>
              <img src={data.image} alt="loan now" />
            </div>
          </div>
          <div className={container__text}>
            <div className={container__inner}>
              <p className={attention__draw}>{data.attention_text}</p>
              <p className={title}>{data.title}</p>
              <p className={subtitle}>{data.subTitle}</p>
              <ClickButton text="Get Started" variant="secondary" extended />
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
