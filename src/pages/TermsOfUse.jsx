import '../styles/termsOfUse.scss'

import LogoNavbarDark from '../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../assets/images/Logo-Navbar-Lightmode.svg'

export function TermsOfUse() {
    document.title = 'Termos e Condições de Uso'

    return (
        <div id="tandc">
            <img
                src={LogoNavbarDark}
                alt="MundoWeb"
                className="logoNavbar"
                id="logoDarkmode"
            />
            <img
                src={LogoNavbarLight}
                alt="MundoWeb"
                className="logoNavbar"
                id="logoLightmode"
            />
            <main>
                <h1>Termos e Condições de Uso</h1>
                <hr />
                <p>
                    O presente instrumento trata dos Termos e Condições Gerais aplicáveis ao uso por parte dos usuários (fornecedores e compradores) dos serviços de representação prestados pelo MundoWeb.
                </p>
                <p>
                    É CONDIÇÃO ABSOLUTAMENTE INDISPENSÁVEL, A ACEITAÇÃO DESSES TERMOS E CONDIÇÕES GERAIS PARA A UTILIZAÇÃO DO SITE E DE SEUS SERVIÇOS.
                </p>
                <p>
                    O usuário deverá ler, certificar-se de haver entendido, aceitar e cumprir todas as condições estabelecidas nos Termos e Condições Gerais e nas Políticas de Privacidade, assim como nos demais documentos incorporados aos mesmos por referência, antes de seu cadastro como usuário do MundoWeb.
                </p>
                <p>
                    <strong>1. Aceitação dos Termos de Uso: </strong>
                    Ao se cadastrar no nosso marketplace, você concorda em seguir os termos e condições descritos abaixo. Se você não concorda com qualquer parte destes termos de uso, por favor, não se cadastre ou use o nosso marketplace.
                </p>
                <p>
                    <strong>2. Cadastro de Usuário: </strong>
                    Para se cadastrar no nosso marketplace, você deve fornecer informações precisas e completas sobre você mesmo. Você é responsável por manter a confidencialidade da sua conta e senha e por restringir o acesso ao seu computador. Você concorda em aceitar a responsabilidade por todas as atividades que ocorrem sob a sua conta e senha.
                </p>
                <p>
                    <strong>3. Produtos e Serviços: </strong>
                    O nosso marketplace fornece uma plataforma para vendedores e compradores se conectarem e realizarem transações comerciais. Nós não somos responsáveis por qualquer dano ou perda decorrente de qualquer transação realizada através do nosso marketplace.
                </p>
                <p>
                    <strong>4. Preços e Pagamentos: </strong>
                    Os preços dos produtos e serviços oferecidos no nosso marketplace são determinados pelos vendedores e podem ser sujeitos a mudanças sem aviso prévio. O pagamento deve ser feito diretamente ao vendedor, e nós não somos responsáveis por qualquer problema relacionado a pagamentos.
                </p>
                <p>
                    <strong>5. Conteúdo: </strong>
                    Nós não somos responsáveis pelo conteúdo disponibilizado pelos usuários do nosso marketplace. Cada usuário é responsável pelo conteúdo que posta ou envia através do nosso marketplace.
                </p>
                <p>
                    <strong>6. Indenização: </strong>
                    Você concorda em indenizar e isentar o nosso marketplace, nossos funcionários, diretores, agentes e outros parceiros, de qualquer responsabilidade, dano, perda, custo ou despesa, incluindo honorários de advogados, decorrentes do seu uso do nosso marketplace ou violação destes termos de uso.
                </p>
                <p>
                    <strong>7. Rescisão: </strong>
                    Nós reservamos o direito de rescindir ou suspender o seu acesso ao nosso marketplace a qualquer momento, sem aviso prévio e sem motivo.
                </p>
                <p>
                    <strong>8. Alteração dos Termos de Uso: </strong>
                    Nós reservamos o direito de alterar estes termos de uso a qualquer momento. Sua continuação no uso do nosso marketplace após tais alterações constituirá sua aceitação de tais alterações.
                </p>
                <p>
                    <strong>9. Lei aplicável: </strong>
                    Estes termos de uso serão regidos e interpretados de acordo com as leis do país em que o site é operado, independentemente de conflitos de normas legais.
                </p>
                <p>
                    Ao utilizar este site, você concorda com os termos de uso acima. Se você não concorda com qualquer um dos termos estabelecidos, não utilize este site.
                </p>
            </main>
        </div>
    )
}