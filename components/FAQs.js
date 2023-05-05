/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const FAQs = ({ styles }) => {
  const [ativo, setAtivo] = useState('');
  const activeClass = `${styles.ativo}`;

  useEffect(() => {
    if (ativo) {
      document.querySelectorAll(activeClass).forEach(each => {
        each.classList.remove(activeClass);
      });
    } 
  }, [ativo]);

  const toggleClass = (item) => {
    if (item !== ativo){
      setAtivo(item);
    }
    else {
      setAtivo('');
    }
  };

  return (
    <section className={styles.faq_section}>
      <div className="container">
        <ul className={styles.faq}>
          <li onClick={() => toggleClass('item1')} className={`${styles.faq_item} ${ativo === 'item1' ? activeClass : ''}`} >
            <button className={styles.faq_item__btn}><h2>Entenda o que é a Covid-19</h2></button>
            <p className={styles.faq_item__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, nibh in varius blandit, enim arcu aliquet metus, et vehicula ligula tellus sit amet sem. Ut vel blandit enim. Integer in egestas tortor. Maecenas turpis sem, ultrices quis nisi nec, viverra dapibus neque. Curabitur placerat consectetur turpis quis mattis. Sed nec felis vitae purus laoreet consectetur.</p>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item2' ? activeClass : ''}`} onClick={() => toggleClass('item2')}>
            <button className={styles.faq_item__btn}><h2>Como o vírus se espalha?</h2></button>
            <p className={styles.faq_item__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, nibh in varius blandit, enim arcu aliquet metus, et vehicula ligula tellus sit amet sem. Ut vel blandit enim. Integer in egestas tortor. Maecenas turpis sem, ultrices quis nisi nec, viverra dapibus neque. Curabitur placerat consectetur turpis quis mattis. Sed nec felis vitae purus laoreet consectetur.</p>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item3' ? activeClass : ''}`} onClick={() => toggleClass('item3')}>
            <button className={styles.faq_item__btn}><h2>Reações de Vacina</h2></button>
            <p className={styles.faq_item__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, nibh in varius blandit, enim arcu aliquet metus, et vehicula ligula tellus sit amet sem. Ut vel blandit enim. Integer in egestas tortor. Maecenas turpis sem, ultrices quis nisi nec, viverra dapibus neque. Curabitur placerat consectetur turpis quis mattis. Sed nec felis vitae purus laoreet consectetur.</p>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item4' ? activeClass : ''}`} onClick={() => toggleClass('item4')}>
            <button className={styles.faq_item__btn}><h2>Testes prévios da Vacina</h2></button>
            <p className={styles.faq_item__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, nibh in varius blandit, enim arcu aliquet metus, et vehicula ligula tellus sit amet sem. Ut vel blandit enim. Integer in egestas tortor. Maecenas turpis sem, ultrices quis nisi nec, viverra dapibus neque. Curabitur placerat consectetur turpis quis mattis. Sed nec felis vitae purus laoreet consectetur.</p>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item5' ? activeClass : ''}`} onClick={() => toggleClass('item5')}>
            <button className={styles.faq_item__btn}><h2>Reação a dose da Vacina</h2></button>
            <p className={styles.faq_item__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, nibh in varius blandit, enim arcu aliquet metus, et vehicula ligula tellus sit amet sem. Ut vel blandit enim. Integer in egestas tortor. Maecenas turpis sem, ultrices quis nisi nec, viverra dapibus neque. Curabitur placerat consectetur turpis quis mattis. Sed nec felis vitae purus laoreet consectetur.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQs;