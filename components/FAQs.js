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
    item !== ativo ? setAtivo(item) : setAtivo('');
  };

  return (
    <section className={styles.faq_section}>
      <div className="container">
        <ul className={styles.faq}>
          <li onClick={() => toggleClass('item7')} className={`${styles.faq_item} ${ativo === 'item7' ? activeClass : ''}`} >
            <button className={styles.faq_item__btn}><h2>Entenda o que é a Covid-19</h2></button>
            <div className={styles.faq_item__texto}>
              <p>A Covid-19 é uma doença infecciosa causada pelo coronavírus <strong>(Sars-CoV-2)</strong> e tem como principais sintomas febre, cansaço e tosse seca. Alguns pacientes podem apresentar dores, congestão nasal, dor de cabeça, conjuntivite, dor de garganta, diarreia, perda de paladar ou olfato, erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés. Esses sintomas geralmente são leves e começam gradualmente. Algumas pessoas são infectadas, mas apresentam apenas sintomas muito leves.</p>

              <p><strong>A maioria das pessoas (cerca de 80%) se recupera da doença sem precisar de tratamento hospitalar</strong>. Uma em cada seis pessoas infectadas por Covid-19 fica gravemente doente e desenvolve dificuldade de respirar. As pessoas idosas e as que têm outras condições de saúde como pressão alta, problemas cardíacos e do pulmão, diabetes ou câncer, têm maior risco de ficarem gravemente doentes. <strong>No entanto, qualquer pessoa pode pegar a Covid-19 e ficar gravemente doente</strong>.</p>

              <p>O SARS-CoV-2 é um betacoronavírus descoberto em amostras de lavado broncoalveolar obtidas de pacientes com pneumonia de causa desconhecida na cidade de Wuhan, província de Hubei, China, em dezembro de 2019. Pertence ao subgênero Sarbecovírus da família Coronaviridae e é o sétimo coronavírus conhecido a infectar seres humanos.</p>

              <p>Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, incluindo o homem, camelos, gado, gatos e morcegos. Raramente os coronavírus de animais podem infectar pessoas e depois se espalhar entre seres humanos como já ocorreu com o MERS-CoV e o SARS-CoV-2. Até o momento, não foi definido o reservatório silvestre do SARS-CoV-2.</p>
            </div>
          </li>

          <li onClick={() => toggleClass('item1')} className={`${styles.faq_item} ${ativo === 'item1' ? activeClass : ''}`} >
            <button className={styles.faq_item__btn}><h2>Importância da Vacinação</h2></button>
            <div className={styles.faq_item__texto}>
              <p>É importante controlar a disseminação do vírus. Se cada vez mais pessoas se protegerem por meio da <strong>vacinação</strong>, o coronavírus perde a capacidade de infectar tantas pessoas ao mesmo tempo, o que pode tornar a doença cada vez menos frequente. A Organização Mundial da Saúde considera que a pandemia da Covid-19 ainda é uma realidade e está em ponto de transição. A OMS só deve mudar o status da doença quando a maioria dos países avançarem na vacinação (incluindo as doses de reforço), quando melhorar a notificação de dados, e quando aumentar o uso e a disponibilidade a longo prazo dos imunizantes.</p>

              <p><strong>A vacina protege a saúde de quem se imunizou e também das pessoas à sua volta</strong>, especialmente as mais vulneráveis ou que possuam alguma comorbidade, como diabetes e hipertensão. “Vacinação é uma estratégia coletiva. Precisamos do maior número de vacinados em todos os lugares”, frisa a secretária de Vigilância em Saúde e Ambiente, Ethel Maciel.</p>

              <p>O Ministério da Saúde iniciou, recentemente, o Movimento Nacional pela Vacinação. A série de ações visa o aumento das coberturas vacinais contra diversas doenças, entre elas, a Covid-19. No caso da imunização contra o coronavírus, estão sendo utilizadas também as vacinas bivalentes, que protegem contra o vírus original, a variante Ômicron e suas subvariantes. É importante lembrar que as vacinas bivalentes e monovalentes são igualmente eficazes e protegem contra a Covid-19.</p>

              <p>Neste primeiro momento, serão vacinadas pessoas com maior risco de desenvolver formas graves da doença: idosos acima de 70 anos, pessoas imunocomprometidas, funcionários e pessoas que vivem em instituições permanentes, indígenas, ribeirinhos e quilombolas. Em seguida, conforme o avanço da campanha, outros grupos prioritários serão imunizados e devem ficar atentos às informações de seus municípios para saber o momento de procurar uma unidade de saúde.</p>
            </div>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item2' ? activeClass : ''}`} onClick={() => toggleClass('item2')}>
            <button className={styles.faq_item__btn}><h2>Testes prévios da vacina</h2></button>
            <div className={styles.faq_item__texto}>
              <p><strong>Todos os imunizantes ofertados à população são testados e aprovados pela Agência Nacional de Vigilância Sanitária (Anvisa) antes de serem disponibilizados</strong>. Na fabricação, depois de feitos todos os testes, a empresa precisa apresentar a documentação referente aos resultados das pesquisas. Assim, técnicos da Anvisa verificam os dados de segurança, eficácia e qualidade do imunizante para, então, liberar a comercialização. Os imunizantes disponíveis nos postos de saúde passaram por todo esse processo e tem segurança garantida.</p>
            </div>
          </li>

          

          <li className={`${styles.faq_item} ${ativo === 'item3' ? activeClass : ''}`} onClick={() => toggleClass('item3')}>
            <button className={styles.faq_item__btn}><h2>Doses de reforço</h2></button>
            <div className={styles.faq_item__texto}>
              <p>Mesmo que você já tenha tomado as duas doses do esquema primário, <strong>é necessário tomar a dose de reforço</strong>, conforme recomendação para sua faixa etária. <strong>Com o tempo, o organismo pode perder a memória imunológica contra o vírus</strong>. Estudo realizado pela Fundação Oswaldo Cruz (Fiocruz) com mais de 1,5 mil pessoas revelou que seis meses depois da segunda dose, os anticorpos haviam caído entre os pesquisados. Com o reforço na imunização, eles voltaram a subir consideravelmente.</p>
            </div>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item4' ? activeClass : ''}`} onClick={() => toggleClass('item4')}>
            <button className={styles.faq_item__btn}><h2>Doses em jovens e adultos</h2></button>
            <div className={styles.faq_item__texto}>
              <p>A recomendação do Ministério da Saúde é que todas as pessoas acima de 12 anos que completaram o ciclo vacinal com AstraZeneca, CoronaVac ou Pfizer-BioNTech devem receber uma dose de reforço após quatro meses da segunda dose.</p>

              <p>Já pessoas com 40 anos ou mais e trabalhadores da saúde, de todas as idades, devem tomar a segunda dose de reforço contra a Covid-19. Para receber esse novo reforço, é preciso ter tomado o primeiro reforço (terceira dose) há pelo menos quatro meses. A medida vale ainda para pessoas com 12 anos ou mais que tenham condições ou doenças que comprometem o sistema imunológico (encarregado de nos proteger contra vírus e bactérias). Entram nesse grupo os transplantados, pessoas que vivem com HIV, em tratamento para câncer ou que usam medicamentos imunossupressores (remédios que baixam a imunidade).</p>
            </div>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item5' ? activeClass : ''}`} onClick={() => toggleClass('item5')}>
            <button className={styles.faq_item__btn}><h2>Doses em crianças</h2></button>
            <div className={styles.faq_item__texto}>
              <p>As vacinas aprovadas pela Anvisa para uso em crianças passaram por vários <strong>testes internacionais</strong> antes de serem liberadas no Brasil. Essas vacinas são consideradas seguras e fornecem boa proteção contra a Covid-19 para o público infantil.</p>

              <p><strong>A vacinação infantil contra a covid-19 é dividida por faixa etária</strong>.</p>

              <p><strong>Crianças de 6 meses a 4 anos e 11 meses</strong> recebem a <strong>Pfizer Baby</strong>. Neste caso, são três doses, com intervalo de 4 semanas entre as 2 primeiras e de oito semanas entre a segunda e a terceira. As crianças de 3 e 4 anos que tomaram duas doses de CoronaVac devem receber uma dose de reforço, com o imunizante Pfizer Baby, quatro meses após a segunda dose.</p>

              <p><strong>Crianças de 5 anos a 11 anos</strong> recebem a vacina <strong>Pfizer Pediátrica</strong>. O esquema básico é de duas doses, com intervalo de 21 dias. Já o reforço (terceira dose) deve ser aplicado quatro meses após a segunda dose.</p>

              <p>A vacina <strong>CoronaVac</strong> está disponível para segunda dose de <strong>crianças que tomaram a primeira dose desse imunizante</strong>. São duas doses, com intervalo de 28 dias. Todas as crianças devem estar acompanhadas dos pais ou responsáveis, cartão de vacina e documento de identificação.</p>

              <p>Após a criança tomar a vacina contra a Covid-19, deve-se esperar 15 dias até que ele possa tomar qualquer outra vacina.</p>
            </div>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item6' ? activeClass : ''}`} onClick={() => toggleClass('item6')}>
            <button className={styles.faq_item__btn}><h2>Sintomas graves em crianças</h2></button>
            <div className={styles.faq_item__texto}>
              <p>Não é verdade que as crianças não desenvolvem casos graves da Covid-19. Apesar de, em geral, ficarem menos doentes em comparação aos adultos, <strong>é muito importante que as crianças se vacinem</strong>. As vacinas podem não impedir que a criança contraia o vírus que causa a Covid-19, mas ela protege contra quadros graves da doença.</p>
            </div>
          </li>

          <li className={`${styles.faq_item} ${ativo === 'item7' ? activeClass : ''}`} onClick={() => toggleClass('item7')}>
            <button className={styles.faq_item__btn}><h2>Reação a dose da vacina</h2></button>
            <div className={styles.faq_item__texto}>
              <p>As vacinas estimulam o nosso sistema imunológico a produzir uma defesa específica contra aquela doença; o que pode provocar algumas reações pontuais. As reações adversas mais comuns associadas a todas essas vacinas estão relacionadas à dor local.</p>
              <p>Os casos leves, como <strong>vermelhidão, dor no local da aplicação e febre</strong> podem ser cuidados e orientados nos postos de saúde. <strong>Já os casos mais complicados, que incluem alergia grave aos componentes da vacina devem ser levados para a unidade de saúde mais próxima</strong>. As bases do Samu estão preparadas para oferecer apoio a todos os pontos de vacinação.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQs;