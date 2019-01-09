import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Passionné d 'informatique depuis les années 90, je me suis formé pour approfondir mes connaissances et compétences dans le langage JavaScript :  <span className="highlight">React.js / Node.js / React.native</span> dans une formation intensive "La Capsule bootcamp" à Lyon.
            </p>
            <p>
              En reconversion professionnelle, j'ai travaillé dans l'hotellerie de luxe durant 15 années dans le domaine du Bar. {' '}
              <span className="highlight"> Cannes, Londres, Paris, Genève, Marrakech</span>. Des établissements comme : {' '}
              <span className="highlight">Hotel Martinez Cannes, Mandarin Oriental Paris / Genève et le Royal Mansour Marrakech</span>.
            </p>
            <p>
              A la recherche d'une entreprise pour une 1er experience en tant que developpeur web react.js / react.native <span className="highlight">à Lyon</span>.
              Passionné et curieux, j'aime découvrir et tester de nouveaux concepts, de nouvelles technologie. Voici les differents langages que j'utilise actuellement : <div> <i>React-Redux, Node.js, React.native, Express.js, MongoDB.</i></div>
            </p>
            <p>
              Actuellement disponible pour des futurs entretiens.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
            PS : Merci à Noël, Benjamin et Alexis @ La Capsule academy
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
