import { Page } from '../../components/Page'
import Image from 'next/image'
import React from 'react'
import { StyledLink } from '../../components/StyledLink'

export default function MinhaCarteirinhaPage() {
  return (
    <Page>
      <header>
        <div className='text-center py-12'>
          <h2 className='text-2xl font-bold'>MinhaCarteirinha.com</h2>
        </div>

        <div className='text-center'>
          <Image src='/mcHome.png' width={852} height={479} objectFit='cover' />
        </div>
      </header>

      <main className='text'>
        <p>
          Para a União dos Estudantes de Pernambuco trabalhei na construção do{' '}
          <StyledLink href='https://minhacarteirinha.com'>MinhaCarteirinha.com</StyledLink>, um sistema para o gerenciamento e validação de
          carteirinhas de dezenas de milhares de estudantes todos os anos. Em produção desde 2017.
        </p>

        <br />

        <p>
          Um dos grandes desafios no desenvolvimento do software foi arquitetar uma estrutura genérica de impressão na estrutura da entidade
          e entrega para as gráficas nas cidades em que a impressão era terceirizada. Nas cidades em que a própria entidade fazia a
          impressão havia ainda diversos tipos de máquinas usadas, umas que imprimiam com cartões com o layout da carteirinha pré-impresso,
          outras que imprimiam em cartões em branco, e até impressoras com hardware modificado.
        </p>

        <br />

        <p className='text-xl'>App Desktop com Electron</p>
        <br />

        <p>
          Após o primeiro ano em produção a UEP verificou que em algumas universidades onde fazia-se carteirinha presencialmente era
          necessário acesso Offline-first devido a pontos das universidades que não cobertos por wifi. Esse não foi um problema fácil de
          resolver, pois, a necessidade de flexibilidade no sistema de impressão impossibilitava tornar o WebApp offline-first (e também por
          limitações na plataforma web).
        </p>

        <br />
        <p>
          Para resolver esse problema desenvolvi então um app de desktop em Electron, pois com um App de desktop tive liberdade para
          compartilhar a resolução da complexidade do sistema de impressão já disponível no backend.
        </p>

        <br />

        <p>
          A entidade precisava de uma solução que fosse fácil encontrar profissionais capazes de manter a aplicação, pensando nisso escolhi
          Desenvolver em Kotlin por ser uma linguagem acessível por ser uma evolução do Java, usando o framework Spring Boot que é o
          framework mais popular da JVM.
        </p>

        <br />

        <p>O Front-End do site e do Desktop foi escrito em React.js, compartilhando vários componentes.</p>

        <br />

        <p className='text-xl'>Tecnologias & recursos</p>
        <ul className='list-disc pl-8'>
          <li>Kotlin</li>
          <li>Spring Boot, Spring Data, Spring Security</li>
          <li>Jooq</li>
          <li>React</li>
          <li>Electron</li>
          <li>Node.js</li>
          <li>Mysql</li>
        </ul>
      </main>
    </Page>
  )
}
