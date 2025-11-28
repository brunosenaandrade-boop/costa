import Link from "next/link";
import { siteData } from "@/content/site-data";

export const metadata = {
  title: "Termos de Uso | Cinthia Costa Beauty Studio",
  description:
    "Termos de Uso do Cinthia Costa Beauty Studio. Conheca as regras e condicoes para uso dos nossos servicos.",
};

export default function TermosPage() {
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
            <Link href="/privacidade" className="transition hover:text-rose-500">
              Privacidade
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <article className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:mt-8 prose-p:text-zinc-600 dark:prose-p:text-zinc-300">
          <h1>Termos de Uso</h1>
          <p className="text-sm text-zinc-500">
            Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <p>
            Bem-vindo ao site da <strong>{siteData.business.nomeFantasia}</strong> (
            {siteData.business.razaoSocial}), inscrita no CNPJ sob o n.{" "}
            {siteData.business.cnpj}. Ao acessar e utilizar nosso site e
            servicos, voce concorda com os termos e condicoes descritos abaixo.
          </p>

          <h2>1. Aceitacao dos Termos</h2>
          <p>
            Ao acessar este site, voce declara ter lido, compreendido e aceito
            estes Termos de Uso em sua totalidade. Caso nao concorde com
            qualquer disposicao, por favor, nao utilize nossos servicos.
          </p>

          <h2>2. Descricao dos Servicos</h2>
          <p>
            O {siteData.business.nomeFantasia} oferece servicos profissionais de
            beleza, incluindo:
          </p>
          <ul>
            <li>Extensao de cilios (fio a fio, hibrido, volume russo e mega volume);</li>
            <li>Design de sobrancelhas com henna e tintura;</li>
            <li>Lash lifting e tratamentos para cilios naturais;</li>
            <li>Brow lamination;</li>
            <li>Mentoria e cursos profissionais para lash artists (CCosta Academy);</li>
            <li>Comercializacao de produtos home care para manutencao dos procedimentos.</li>
          </ul>

          <h2>3. Agendamentos</h2>
          <h3>3.1 Reservas</h3>
          <p>
            Os agendamentos podem ser realizados atraves do nosso site, WhatsApp
            ou Instagram. A confirmacao do agendamento esta sujeita a
            disponibilidade de horarios.
          </p>

          <h3>3.2 Sinal e Confirmacao</h3>
          <p>
            Para garantir sua reserva, pode ser solicitado um sinal antecipado.
            O valor do sinal sera descontado do valor total do servico.
          </p>

          <h3>3.3 Cancelamentos e Reagendamentos</h3>
          <ul>
            <li>
              Cancelamentos devem ser comunicados com antecedencia minima de 24
              horas.
            </li>
            <li>
              Cancelamentos fora do prazo ou nao comparecimento (no-show) podem
              resultar na perda do sinal pago.
            </li>
            <li>
              Reagendamentos estao sujeitos a disponibilidade e devem ser
              solicitados com antecedencia.
            </li>
          </ul>

          <h3>3.4 Atrasos</h3>
          <p>
            Em caso de atraso superior a 15 minutos, o atendimento podera ser
            reagendado ou realizado parcialmente, dependendo da disponibilidade
            da agenda.
          </p>

          <h2>4. Pagamentos</h2>
          <ul>
            <li>
              Aceitamos pagamentos via PIX, cartao de credito e debito.
            </li>
            <li>
              Os precos dos servicos estao disponiveis no site e podem ser
              alterados sem aviso previo.
            </li>
            <li>
              O pagamento deve ser realizado integralmente apos a conclusao do
              servico, salvo acordo previo.
            </li>
          </ul>

          <h2>5. Produtos</h2>
          <p>
            Os produtos comercializados em nosso site sao destinados ao cuidado
            e manutencao dos procedimentos esteticos realizados.
          </p>
          <ul>
            <li>
              As imagens dos produtos sao meramente ilustrativas e podem sofrer
              pequenas variacoes.
            </li>
            <li>
              A entrega dos produtos pode ser realizada no studio ou via
              Correios, conforme opcao selecionada no checkout.
            </li>
            <li>
              Trocas e devolucoes seguem o Codigo de Defesa do Consumidor.
            </li>
          </ul>

          <h2>6. Mentoria e Cursos (CCosta Academy)</h2>
          <ul>
            <li>
              A matricula nos cursos esta sujeita a disponibilidade de vagas.
            </li>
            <li>
              O conteudo dos cursos e materiais sao de propriedade exclusiva do
              {siteData.business.nomeFantasia} e nao podem ser reproduzidos sem
              autorizacao.
            </li>
            <li>
              Certificados sao emitidos mediante conclusao satisfatoria do
              programa.
            </li>
          </ul>

          <h2>7. Responsabilidades do Cliente</h2>
          <p>O cliente se compromete a:</p>
          <ul>
            <li>
              Fornecer informacoes verdadeiras e completas durante o cadastro e
              agendamento;
            </li>
            <li>
              Informar sobre quaisquer alergias, sensibilidades ou condicoes de
              saude relevantes antes do procedimento;
            </li>
            <li>
              Seguir as orientacoes de cuidados pos-procedimento fornecidas pela
              profissional;
            </li>
            <li>
              Comparecer aos agendamentos no horario marcado.
            </li>
          </ul>

          <h2>8. Limitacao de Responsabilidade</h2>
          <p>
            O {siteData.business.nomeFantasia} nao se responsabiliza por:
          </p>
          <ul>
            <li>
              Reacoes adversas nao informadas previamente pelo cliente;
            </li>
            <li>
              Danos causados pelo nao cumprimento das orientacoes pos-procedimento;
            </li>
            <li>
              Resultados que variem de acordo com as caracteristicas individuais
              de cada cliente.
            </li>
          </ul>

          <h2>9. Propriedade Intelectual</h2>
          <p>
            Todo o conteudo deste site, incluindo textos, imagens, logotipos,
            videos e design, e de propriedade exclusiva do{" "}
            {siteData.business.nomeFantasia} e esta protegido pelas leis de
            direitos autorais. E proibida a reproducao, distribuicao ou uso sem
            autorizacao previa.
          </p>

          <h2>10. Uso de Imagens</h2>
          <p>
            Ao realizar procedimentos em nosso studio, o cliente autoriza o uso
            de fotos e videos do resultado para fins de divulgacao em redes
            sociais e materiais promocionais, salvo manifestacao contraria
            expressa.
          </p>

          <h2>11. Privacidade</h2>
          <p>
            O tratamento de seus dados pessoais e regido por nossa{" "}
            <Link href="/privacidade" className="text-rose-500 hover:underline">
              Politica de Privacidade
            </Link>
            , que faz parte integrante destes Termos de Uso.
          </p>

          <h2>12. Alteracoes nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
            momento. As alteracoes entram em vigor imediatamente apos sua
            publicacao nesta pagina. Recomendamos a revisao periodica deste
            documento.
          </p>

          <h2>13. Legislacao Aplicavel</h2>
          <p>
            Estes Termos de Uso sao regidos pelas leis da Republica Federativa
            do Brasil. Quaisquer disputas serao resolvidas no foro da comarca de{" "}
            {siteData.business.endereco.cidade} -{" "}
            {siteData.business.endereco.uf}.
          </p>

          <h2>14. Contato</h2>
          <p>
            Para duvidas sobre estes Termos de Uso, entre em contato:
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
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a href={siteData.contact.whatsapp}>{siteData.contact.phone}</a>
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
