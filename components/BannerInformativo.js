/* eslint-disable react/prop-types */
import styles from '@/css/BannerInformativo.module.css';

const BannerInformativo = ({ children, titulo }) => {
  return (
    <section className={styles.banner}>
      <div className='container'>
        <div className={styles.banner_container}>
          <div className={styles.banner_covid}>
            <h2>Covid-19</h2>
            <p>{ titulo }</p>
          </div>

          <div className={styles.banner_info}>
            <p>Mais informações em:</p>
            
            <ul>
              { children }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInformativo;