/* eslint-disable react/no-unescaped-entities */
import { PublicLayout } from '@/components/public-layout'

export default function Page() {
  return (
    <PublicLayout>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-2">
        <h1 className=" text-lg font-bold">Política de Privacidade</h1>

        <p className="text-base ">
          A DocGuard, operando o website e os serviços relacionados, leva a
          sério a proteção da sua privacidade. Esta Política de Privacidade
          descreve como coletamos, usamos, divulgamos e protegemos as
          informações pessoais dos usuários ("você" ou "usuário") do nosso
          serviço de autenticação de documentos na blockchain chamado DocGuard
          ("serviço").
        </p>

        <p className="text-base ">
          Por favor, leia atentamente esta política para entender como tratamos
          seus dados pessoais.
        </p>

        <h2 className="mt-2 font-semibold">
          1. Coleta de Informações Pessoais
        </h2>
        <p className="text-base ">
          Coletamos informações pessoais de diversas formas, incluindo, mas não
          se limitando a:
        </p>

        <h3 className="mt-2 font-semibold">
          1.1 Informações Fornecidas por Você:
        </h3>
        <p className="text-base ">
          Ao utilizar nossos serviços, você pode fornecer informações pessoais,
          como nome, endereço de e-mail, informações de contato e documentos
          para autenticação na blockchain. Estas informações são coletadas para
          a execução do serviço.
        </p>

        <h3 className="mt-2 font-semibold">
          1.2 Informações Coletadas Automaticamente:
        </h3>
        <p className="text-base ">
          Podemos coletar informações automaticamente quando você visita nosso
          website, incluindo seu endereço IP, informações de cookies,
          informações sobre o dispositivo e o navegador que você está usando,
          bem como outras informações de uso.
        </p>

        <h2 className="mt-2 font-semibold">2. Uso das Informações Pessoais</h2>
        <p className="text-base ">Utilizamos suas informações pessoais para:</p>

        <h3 className="mt-2 font-semibold">2.1. Prestar os Serviços:</h3>
        <p className="text-base ">
          Utilizamos suas informações para autenticar documentos na blockchain e
          fornecer o serviço de acordo com sua solicitação.
        </p>

        <h3 className="mt-2 font-semibold">
          2.2. Comunicações e Notificações:
        </h3>
        <p className="text-base ">
          Podemos entrar em contato com você por e-mail ou outros meios para
          fornecer informações relevantes sobre nossos serviços, atualizações,
          notificações ou informações relacionadas.
        </p>

        <h2 className="mt-2 font-semibold">
          3. Compartilhamento de Informações Pessoais
        </h2>
        <p className="text-base ">
          Não compartilhamos suas informações pessoais com terceiros, a menos
          que seja necessário para fornecer os serviços que você solicitou ou
          quando exigido por lei.
        </p>

        <h2 className="mt-2 font-semibold">
          4. Segurança das Informações Pessoais
        </h2>
        <p className="text-base ">
          Implementamos medidas de segurança técnicas e organizacionais para
          proteger suas informações pessoais contra acesso não autorizado, uso
          indevido, alteração, divulgação ou destruição.
        </p>

        <h2 className="mt-2 font-semibold">
          5. Cookies e Tecnologias Semelhantes
        </h2>
        <p className="text-base ">
          Utilizamos cookies e tecnologias semelhantes para melhorar a
          experiência do usuário. Você pode gerenciar as configurações de
          cookies através do seu navegador.
        </p>

        <h2 className="mt-2 font-semibold">6. Seus Direitos</h2>
        <p className="text-base ">
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais. Para exercer esses direitos ou fazer perguntas sobre nossas
          práticas de privacidade, entre em contato conosco por meio das
          informações de contato fornecidas no final desta política.
        </p>

        <h2 className="mt-2 font-semibold">
          7. Mudanças na Política de Privacidade
        </h2>
        <p className="text-base ">
          Reservamo-nos o direito de atualizar esta Política de Privacidade de
          tempos em tempos. Recomendamos que você verifique regularmente a
          política para se manter informado sobre nossas práticas de
          privacidade.
        </p>

        <h2 className="mt-2 font-semibold">8. Contato</h2>
        <p className="text-base ">
          Se você tiver alguma dúvida sobre esta Política de Privacidade ou
          sobre nossas práticas de privacidade, entre em contato conosco pelo
          e-mail:{' '}
          <a
            className="text-blue-600 underline"
            href="mailto:lecirics@gmail.com"
          >
            lecirics@gmail.com
          </a>
        </p>
      </main>
    </PublicLayout>
  )
}
