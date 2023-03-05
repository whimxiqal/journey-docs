import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Introduction',
    Svg: require('@site/static/img/undraw_biking.svg').default,
    link: '/docs/intro',
    description: (
      <>
        Start navigating the server in minutes
      </>
    ),
  },
  {
    title: 'Administrators',
    Svg: require('@site/static/img/undraw_circuit.svg').default,
    link: '/docs/category/administrators',
    description: (
      <>
        Make adjustments to fit your server's needs
      </>
    ),
  },
  {
    title: 'Developers',
    Svg: require('@site/static/img/undraw_programmer.svg').default,
    link: '/docs/category/developers',
    description: (
      <>
        Integrate navigation into your latest projects
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
