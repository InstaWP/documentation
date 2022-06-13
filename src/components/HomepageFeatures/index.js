import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Skateboarding.svg').default,
    description: (
      <>
        InstaWP was designed to launch WordPress instances in less than a second without installing any softwares.
      </>
    ),
  },
  {
    title: 'Built on Open Source',
    Svg: require('@site/static/img/Open source.svg').default,
    description: (
      <>
        InstaWP is powered by Open Source technologies such as PHP, WordPress, Laravel and VueJS.
      </>
    ),
  },
  {
    title: 'Ideal for Builders and Devs',
    Svg: require('@site/static/img/Video game developer.svg').default,
    description: (
      <>
        Ideal for delivering a site to the client, testing a new idea, or setting up a full blown CI/CI pipeline.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
