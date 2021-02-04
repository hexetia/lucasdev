import React from 'react'
import { Page } from '../components/Page'
import { Project } from '../components/Project'
import Head from 'next/head'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Lucas Nascimento - Fullstack Developer</title>
      </Head>
      <div className='pt-24 pb-16 lg:pb-24'>
        <h1 className='text-5xl font-bold'>Olá, meu nome é Lucas.</h1>
        <p className='text-base'>
          Sou um desenvolvedor fullstack apaixonado por tecnologia e música, trabalho com tecnologias web desde 2014.
        </p>
        <p>
          Gosto bastante do feeling de resolver problemas da vida real com tecnologia e tenho desenvoltura pra buscar soluções pra qualquer
          problema. Desenvolvi sites que atenderam dezenas de milhares de usuários por dia, gerenciando por conta própria toda a estrutura.
        </p>
      </div>

      <p className='text-4xl font-bold pb-8'>Projetos</p>

      <div className='md:grid md:gap-10 md:grid-cols-2'>
        <Project
          href='/projetos/minhacarteirinha'
          name='MinhaCarteirinha'
          img='/mcHome.png'
          description={
            <>
              <div className='text-base'>
                <p>
                  Em produção desde 2017, arquitetei e criei o App e API para cadastro, validação e entrega de carteirinhas para gráficas de
                  dezenas de milhares de estudantes por ano em Pernambuco.
                </p>
                <p>
                  Meu objetivo principal foi prover uma aplicação flexível para que novas entidades estudantis, com outros formatos e
                  requisitos pudessem ser adicionadas posteriormente, sem comprometer a segurança e performance.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Kotlin</span>
                <span className='px-3 py-1'>Java</span>
                <span className='px-3 py-1'>Spring Boot</span>
                <span className='px-3 py-1 pr-0'>Jooq</span>
              </div>
            </>
          }
          link='https://minhacarteirinha.com'
        />

        <Project
          name='MLB Admin'
          href='/projetos/mlb'
          link='https://mlbadmin.web.app'
          githubLink='https://github.com/morhogg/mlbadmin'
          img='/mlb.png'
          description={
            <>
              <div className='text-base'>
                <p>WebApp nascido para digitalizar e acelerar o acesso a dados de membros do movimento.</p>
                <p>
                  Para segurança da ocupação e várias atividades, como reuniões dos membros e planejamento eram ativides custosas, pois eram
                  feitas buscas em fichas de registro de papel.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Firebase</span>
                <span className='px-3 py-1'>Next.js</span>
                <span className='px-3 py-1 pr-0'>React-Query</span>
              </div>
            </>
          }
        />

        <Project
          name='Telzir'
          img='/telzirWeb.png'
          href='/telzir'
          link='https://telzirx.netlify.app'
          githubLink='https://github.com/morhogg/telzir'
          description={
            <>
              <div className='text-base'>
                <p>Design e implementação de uma landing page responsiva, mobile-first de uma operadora de telefonia fictícia.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>React</span>
                <span className='px-3 py-1'>Typescript</span>
              </div>
            </>
          }
        />

        <Project
          name='React-Fitty'
          img='/react-fitty.png'
          href='https://github.com/morhogg/react-fitty'
          link='https://github.com/morhogg/react-fitty'
          description={
            <>
              <div className='text-base'>
                <p>Componente em react que escala textos ou frases para ocupar toda a largura do componente pai.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Component</span>
                <span className='px-3 py-1'>React</span>
              </div>
            </>
          }
        />

        <Project
          name='useClientRouter para Next.js'
          img='/use-client-router.png'
          href='https://github.com/morhogg/use-client-router'
          description={
            <>
              <div className='text-base'>
                <p>
                  React hook que melhora o router do next.js no frontend, basta subistituir no seu componente o router padrão do next.js e
                  voilà, você ganhou um router melhorado.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Component</span>
                <span className='px-3 py-1'>React</span>
                <span className='px-3 py-1'>Next.js</span>
              </div>
            </>
          }
        />
      </div>
    </Page>
  )
}
