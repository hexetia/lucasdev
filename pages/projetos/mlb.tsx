import { Page } from '../../components/Page'
import Image from 'next/image'
import React from 'react'

export default function MLBPage() {
  return (
    <Page>
      <header>
        <div className='text-center py-12'>
          <h2 className='text-2xl font-bold'>MLB Admin</h2>
        </div>

        <div className='text-center'>
          <Image src='/mlb.png' width={852} height={479} objectFit='cover' quality='95' />
        </div>

        <main className='text'>
          <p>
            Desenvolvi para o{' '}
            <a
              className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 inline-flex text-sm no-underline'
              href='https://www.mlbbrasil.org/'
              target='_blank'
            >
              <i>Movimento de Luta nos Bairros, Vilas e Favelas - MLB</i>
            </a>{' '}
            um App SPA para digitalizar as fichas de cadastro dos ocupantes.
          </p>
          <p>
            Aproveitei que o projeto foi algo sem fins lucrativos, para estudar e implementar Continous Development e Continuous Deployment.
            Usei o Github Actions para fazer vários testes de Unidade e Integração e ao passar, fazer o deploy de uma nova versão do Backend
            e do Frontend do App.
          </p>
          <br />
          <p>Next.js no Firebase Hosting - O problema</p>
          <br />
          <p>
            O Firebase Hosting funciona de forma muito diferente da solução da Vercel, na Vercel por padrão você tem Servidor Next.js sendo
            executado, para que cada rota para que precise de SSR possa funcionar, já no Firebase Hosting não há nenhum servidor, existe
            apenas o hosting de arquivos estáticos.
          </p>
          <p>
            O caminho sugerido via exemplos e artigos de Firebase + Next.js envolviam ter uma <i>Firebase Function</i> responsável por todas
            as requisições, o que acabaria por ser algo deveras custoso, pois renderizar uma página SSR seria proibitivo financeiramente.
            Não segui por esse caminho, pois me pareceu ser possível encontrar outra solução.
          </p>
          <br />
          <div className='text-center'>
            <Image src='/mlb4k.png' width={736} height={736} quality='95' />
          </div>
          <br />

          <p>
            Desenvolvi uma solução que possibilitou que o app fosse integralmente enviado ao Firebase Hosting, consegui mapear dinamicamente
            as rotas do Next.js após o build, e transformar os arquivos de rotas gerados pelo manifest do Next.js (algo que me pareceu ter
            um contrato de design estável) em rewrites do Firebase Hosting, é um pequno script, que assume que o site não usará rotas SSR ou
            ISR, o{' '}
            <a
              className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 inline-flex text-sm no-underline'
              target='_blank'
              href='https://github.com/hexetia/mlbadmin/blob/main/scripts/useNextRewritesInFirebase.js'
            >
              script pode visto aqui.
            </a>
          </p>
          <br />

          <p className='text-xl'>Tecnologias & recursos</p>
          <ul className='list-disc pl-8'>
            <li>Firebase: Auth, Functions, Firestore e Hosting</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Material-UI</li>
            <li>Mobx</li>
            <li>
              <a
                className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 inline-flex text-sm no-underline'
                target='_blank'
                href='https://github.com/hexetia/use-client-router'
              >
                useClientRouter
              </a>
            </li>
          </ul>
        </main>
      </header>
    </Page>
  )
}
