/* eslint-disable react/prop-types */
const ProgressBtns = (props) => {
  let styles = props.styles;

  return (
    <section className={styles.form_progresso}>
      {props.back ? <button onClick={props.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>Voltar</button> : ''}

      {props.continue ? <button onClick={props.continue} className={`btn_principal ${styles.progresso_btn}`}>{!props.final ? 'Próximo' : 'Agendar'}</button> : ''}
    </section>
  );
};

export default ProgressBtns;