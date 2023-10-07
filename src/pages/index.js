import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className="row"
          style={{ justifyContent: 'center', margin: '0 20%' }}
        >
          <Badge
            url="https://img.shields.io/modrinth/dt/journey?style=for-the-badge&color=D06262"
            a="https://modrinth.com/plugin/journey"
          />
          <Badge
            url="https://img.shields.io/modrinth/v/journey?style=for-the-badge&color=D06262"
            a="https://modrinth.com/plugin/journey"
          />
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Welcome`} description="A Minecraft GPS... Basically.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

function Badge(props) {
  return (
    <div className="padding-horiz--sm">
      <a href={props.a}>
        <img src={props.url} />
      </a>
    </div>
  )
}
