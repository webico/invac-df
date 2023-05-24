/* eslint-disable react/prop-types */
const ProgressBtns = (props) => {
  let styles = props.styles;

  return (
    <section className={styles.form_progresso}>
      {props.back ? <button onClick={props.back} className={`btn_principal ${styles.progresso_btn} ${styles.voltar}`}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.802063 15.5938C0.59373 15.3854 0.489563 15.1387 0.489563 14.8537C0.489563 14.5687 0.59373 14.3224 0.802063 14.1146L6.90623 8.01042L0.78123 1.88542C0.586785 1.69097 0.489563 1.44792 0.489563 1.15625C0.489563 0.864583 0.59373 0.614583 0.802063 0.40625C1.0104 0.197917 1.25706 0.09375 1.54206 0.09375C1.82706 0.09375 2.07345 0.197917 2.28123 0.40625L9.28123 7.42708C9.36456 7.51042 9.42373 7.60069 9.45873 7.69792C9.49373 7.79514 9.51095 7.89931 9.5104 8.01042C9.5104 8.12153 9.4929 8.22569 9.4579 8.32292C9.4229 8.42014 9.36401 8.51042 9.28123 8.59375L2.2604 15.6146C2.06595 15.809 1.82623 15.9062 1.54123 15.9062C1.25623 15.9062 1.00984 15.8021 0.802063 15.5938Z" fill="#2561D3" />
        </svg>

        Voltar
      </button> : ''}

      {props.continue ? <button onClick={props.continue} className={`btn_principal ${styles.progresso_btn}`}>
        {!props.final ? 'Próximo' : 'Agendar'}

        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.802063 15.5938C0.59373 15.3854 0.489563 15.1387 0.489563 14.8537C0.489563 14.5687 0.59373 14.3224 0.802063 14.1146L6.90623 8.01042L0.78123 1.88542C0.586785 1.69097 0.489563 1.44792 0.489563 1.15625C0.489563 0.864583 0.59373 0.614583 0.802063 0.40625C1.0104 0.197917 1.25706 0.09375 1.54206 0.09375C1.82706 0.09375 2.07345 0.197917 2.28123 0.40625L9.28123 7.42708C9.36456 7.51042 9.42373 7.60069 9.45873 7.69792C9.49373 7.79514 9.51095 7.89931 9.5104 8.01042C9.5104 8.12153 9.4929 8.22569 9.4579 8.32292C9.4229 8.42014 9.36401 8.51042 9.28123 8.59375L2.2604 15.6146C2.06595 15.809 1.82623 15.9062 1.54123 15.9062C1.25623 15.9062 1.00984 15.8021 0.802063 15.5938Z" fill="#fff" />
        </svg>
      </button> : ''}
    </section>
  );
};

export default ProgressBtns;