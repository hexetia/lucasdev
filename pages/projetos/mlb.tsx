import { Page } from '../../components/Page'
import Image from 'next/image'
import React from 'react'
import { StyledLink } from '../../components/StyledLink'

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
            <a href='https://www.mlbbrasil.org/' target='_blank'>
              <i>Movimento de Luta nos Bairros, Vilas e Favelas - MLB</i>
            </a>{' '}
            um App SPA para digitalizar as fichas de cadastro dos ocupantes.
          </p>
          <br />
          <p>Next.js no Firebase Hosting - O problema</p>
          <br />
          <p>
            O Firebase Hosting funciona de forma muito diferente da solução da Vercel, na Vercel por padrão você tem Servidor Next.js sendo
            executado em cada rota para que o SSR possa funcionar, já no Firebase Hosting não há nenhum servidor, só o hosting de arquivos
            estáticos.
          </p>
          <p>
            O caminho sugerido via exemplos e artigos de Firebase + Next.js envolviam ter uma Firebase Function responsável por todas as
            requisições, o que acabaria por ser algo deveras custoso, pois renderizar uma página SSR seria segundo meus cálculos na época
            proibitivo. Não segui por esse caminho, pois me pareceu ser possível encontrar outra solução.
          </p>
          <br />
          <div className='text-center'>
            <Image src='/mlb4k.png' width={736} height={736} quality='95' />
          </div>
          <br />

          <p>
            Após me aprofundar um pouco sobre como o Next.js funciona internamente, o que eu aprendi é que há uma forte acoplação do Router
            e Servidor no Next.js, tanto que parece proposital para forçar o uso do SSR, não me pareceu uma limitação técnica e muitas das
            issues que encontrei sobre o assunto não tinham respostas esclarecedoras da Vercel, até encontrei um artigo com o título{' '}
            <StyledLink href='https://colinhacks.com/essays/vercel-nextjs-spa' target='_blank'>
              "Vercel, Next.js, and the war on SPAs"
            </StyledLink>{' '}
            de um cara que passou por problemas parecidos e notou que a Vercel parece estar travando uma guerra nas sombras contra os SPA's
            para favorecer sua própria plataforma, com a qual eles fazem o verdadeiro dinheiro. Essa dificuldade em lidar com o acoplamento
            me fez escrever uma{' '}
            <a href='https://www.npmjs.com/package/use-client-router' target='_blank'>
              Hook de código aberto que melhora o Router no Client-side.
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
              <a href='https://github.com/morhogg/use-client-router'>useClientRouter</a>
            </li>
          </ul>
        </main>
      </header>
    </Page>
  )
}
