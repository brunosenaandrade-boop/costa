import Link from "next/link";
import { siteData } from "@/content/site-data";

export const metadata = {
  title: "Politica de Privacidade | Cinthia Costa Beauty Studio",
  description:
    "Politica de Privacidade do Cinthia Costa Beauty Studio. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <header className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-10 pt-20 md:px-10">
        <nav className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
          <Link
            href="/"
            className="font-semibold text-zinc-900 dark:text-white"
          >
            {siteData.brand.name}
          </Link>
          <div className="flex gap-4">
            <Link href="/agendar" className="transition hover:text-rose-500">
              Agenda
            </Link>
            <Link href="/termos" className="transition hover:text-rose-500">
              Termos de Uso
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <article className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:mt-8 prose-p:text-zinc-600 dark:prose-p:text-zinc-300">
          <h1>Politica de Privacidade</h1>
          <p className="text-sm text-zinc-500">
            Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <p>
            A <strong>{siteData.business.nomeFantasia}</strong> (
            {siteData.business.razaoSocial}), inscrita no CNPJ sob o n.{" "}
            {siteData.business.cnpj}, com sede em{" "}
            {siteData.business.endereco.logradouro},{" "}
            {siteData.business.endereco.numero}
            {siteData.business.endereco.complemento && ` - ${siteData.business.endereco.complemento}`},{" "}
            {siteData.business.endereco.bairro},{" "}
            {siteData.business.endereco.cidade} -{" "}
            {siteData.business.endereco.uf}, CEP{" "}
            {siteData.business.endereco.cep}, esta comprometida com a
            privacidade e a protecao dos dados pessoais de seus clientes,
            visitantes e usuarios.
          </p>

          <p>
            Esta Politica de Privacidade descreve como coletamos, utilizamos,
            armazenamos e protegemos suas informacoes pessoais em conformidade
            com a Lei Geral de Protecao de Dados (LGPD - Lei n. 13.709/2018) e
            demais legislacoes aplicaveis.
          </p>

          <h2>1. Dados que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
          <ul>
            <li>
              <strong>Dados de identificacao:</strong> nome completo, CPF, data
              de nascimento.
            </li>
            <li>
              <strong>Dados de contato:</strong> telefone, e-mail, endereco.
            </li>
            <li>
              <strong>Dados de agendamento:</strong> historico de servicos,
              preferencias de horario, observacoes sobre procedimentos.
            </li>
            <li>
              <strong>Dados de pagamento:</strong> informacoes de cartao de
              credito ou PIX processados por plataformas seguras de terceiros.
            </li>
            <li>
              <strong>Dados de navegacao:</strong> cookies, endereco IP, tipo de
              navegador e paginas visitadas.
            </li>
            <li>
              <strong>Dados de saude:</strong> informacoes sobre alergias ou
              sensibilidades relevantes para a prestacao dos servicos de beleza.
            </li>
          </ul>

          <h2>2. Finalidade do Tratamento de Dados</h2>
          <p>Utilizamos seus dados pessoais para:</p>
          <ul>
            <li>Realizar agendamentos e prestar servicos de beleza;</li>
            <li>Enviar confirmacoes, lembretes e comunicacoes sobre seus agendamentos;</li>
            <li>Processar pagamentos de forma segura;</li>
            <li>Personalizar sua experiencia e oferecer servicos adequados ao seu perfil;</li>
            <li>Enviar novidades, promocoes e conteudos relevantes (mediante seu consentimento);</li>
            <li>Cumprir obrigacoes legais e regulatorias;</li>
            <li>Melhorar nossos servicos e a experiencia do usuario no site.</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            Seus dados pessoais podem ser compartilhados com terceiros apenas
            nas seguintes situacoes:
          </p>
          <ul>
            <li>
              <strong>Processadores de pagamento:</strong> para efetuar
              transacoes financeiras de forma segura.
            </li>
            <li>
              <strong>Plataformas de agendamento:</strong> para gerenciar sua
              agenda de servicos.
            </li>
            <li>
              <strong>Autoridades competentes:</strong> quando exigido por lei
              ou ordem judicial.
            </li>
          </ul>
          <p>
            Nao vendemos, alugamos ou comercializamos seus dados pessoais com
            terceiros para fins de marketing.
          </p>

          <h2>4. Armazenamento e Seguranca</h2>
          <p>
            Seus dados sao armazenados em servidores seguros e protegidos por
            medidas tecnicas e organizacionais adequadas, incluindo:
          </p>
          <ul>
            <li>Criptografia de dados sensiveis;</li>
            <li>Controle de acesso restrito;</li>
            <li>Monitoramento continuo de seguranca;</li>
            <li>Backups regulares.</li>
          </ul>
          <p>
            Mantemos seus dados apenas pelo tempo necessario para cumprir as
            finalidades descritas nesta politica ou conforme exigido por lei.
          </p>

          <h2>5. Seus Direitos</h2>
          <p>
            De acordo com a LGPD, voce tem direito a:
          </p>
          <ul>
            <li>Confirmar a existencia de tratamento de seus dados;</li>
            <li>Acessar seus dados pessoais;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimizacao, bloqueio ou eliminacao de dados desnecessarios;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Revogar seu consentimento a qualquer momento;</li>
            <li>Obter informacoes sobre o compartilhamento de seus dados.</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato conosco pelo e-mail{" "}
            <a href={`mailto:${siteData.contact.email}`}>
              {siteData.contact.email}
            </a>{" "}
            ou pelo WhatsApp{" "}
            <a href={siteData.contact.whatsapp}>{siteData.contact.phone}</a>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiencia de navegacao. Os
            cookies sao pequenos arquivos armazenados em seu dispositivo que nos
            ajudam a:
          </p>
          <ul>
            <li>Lembrar suas preferencias;</li>
            <li>Analisar o trafego do site;</li>
            <li>Personalizar conteudo e anuncios.</li>
          </ul>
          <p>
            Voce pode configurar seu navegador para recusar cookies, mas isso
            pode afetar algumas funcionalidades do site.
          </p>

          <h2>7. Alteracoes nesta Politica</h2>
          <p>
            Podemos atualizar esta Politica de Privacidade periodicamente. As
            alteracoes serao publicadas nesta pagina com a data de atualizacao.
            Recomendamos que voce revise esta politica regularmente.
          </p>

          <h2>8. Contato</h2>
          <p>
            Para duvidas, solicitacoes ou reclamacoes relacionadas a esta
            Politica de Privacidade ou ao tratamento de seus dados pessoais,
            entre em contato:
          </p>
          <ul>
            <li>
              <strong>Empresa:</strong> {siteData.business.nomeFantasia}
            </li>
            <li>
              <strong>CNPJ:</strong> {siteData.business.cnpj}
            </li>
            <li>
              <strong>Endereco:</strong> {siteData.business.endereco.logradouro}
              , {siteData.business.endereco.numero}
              {siteData.business.endereco.complemento && ` - ${siteData.business.endereco.complemento}`},{" "}
              {siteData.business.endereco.bairro},{" "}
              {siteData.business.endereco.cidade} -{" "}
              {siteData.business.endereco.uf}, CEP{" "}
              {siteData.business.endereco.cep}
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
            </li>
            <li>
              <strong>Telefone:</strong> {siteData.contact.phone}
            </li>
          </ul>
        </article>
      </main>

      <footer className="relative z-10 border-t border-white/30 bg-white/60 py-6 text-center text-sm text-zinc-500 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-400">
        <p>
          {"\u00A9"} {new Date().getFullYear()} {siteData.brand.name}. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
