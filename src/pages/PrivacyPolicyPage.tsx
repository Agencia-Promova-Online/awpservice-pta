import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/data/site';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Política de Privacidade | AWP Service"
        description="Política de privacidade da AWP Service. Saiba como tratamos seus dados pessoais coletados através do site."
        canonical="https://awpservicepta.com.br/politica-de-privacidade"
      />

      <PageHero
        label="Legal"
        title="Política de Privacidade"
        subtitle="Esta política descreve como a AWP Service coleta, usa e protege seus dados pessoais."
        breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Política de Privacidade' }]}
      />

      <section className="py-16">
        <div className="container-wide max-w-3xl">
          <div className="prose-awp space-y-8">
            <div>
              <h2>1. Informações que coletamos</h2>
              <p>
                A AWP Service coleta informações fornecidas voluntariamente por você através do formulário
                de contato em nosso site, incluindo: nome, empresa, cidade, marca da máquina, tipo de
                equipamento e mensagem. Não coletamos informações de navegação através de cookies de
                terceiros além dos necessários para funcionamento básico do site.
              </p>
            </div>

            <div>
              <h2>2. Como usamos suas informações</h2>
              <p>
                As informações fornecidas no formulário de contato são utilizadas exclusivamente para:
              </p>
              <ul>
                <li>Responder à sua solicitação de orçamento ou informação técnica</li>
                <li>Encaminhar a mensagem para nossa equipe técnica via WhatsApp</li>
                <li>Manter registro de atendimento para fins de qualidade e melhoria contínua</li>
              </ul>
            </div>

            <div>
              <h2>3. Compartilhamento de dados</h2>
              <p>
                Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros. As informações
                são utilizadas internamente pela {siteConfig.legalName} para os fins descritos acima.
              </p>
            </div>

            <div>
              <h2>4. Armazenamento e segurança</h2>
              <p>
                Seus dados são armazenados de forma segura e acessíveis apenas por pessoal autorizado
                dentro da empresa. Adotamos medidas técnicas e organizacionais para proteger seus dados
                contra acesso não autorizado, alteração ou divulgação.
              </p>
            </div>

            <div>
              <h2>5. Seus direitos (LGPD)</h2>
              <p>
                Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul>
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar os dados que possuímos sobre você</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor</li>
                <li>Revogar o consentimento para tratamento dos dados</li>
              </ul>
              <p>
                Para exercer qualquer desses direitos, entre em contato pelo e-mail {siteConfig.email}.
              </p>
            </div>

            <div>
              <h2>6. Retenção de dados</h2>
              <p>
                Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta
                política, ou conforme exigido por obrigações legais. Após esse período, os dados são
                eliminados ou anonimizados.
              </p>
            </div>

            <div>
              <h2>7. Alterações desta política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta
                página regularmente para se manter informado sobre quaisquer alterações.
              </p>
            </div>

            <div>
              <h2>8. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em
                contato:
              </p>
              <ul>
                <li><strong>E-mail:</strong> {siteConfig.email}</li>
                <li><strong>Telefone:</strong> {siteConfig.phone}</li>
                <li><strong>Endereço:</strong> {siteConfig.address.street}, {siteConfig.address.city} — {siteConfig.address.state}</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: Agosto de 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
