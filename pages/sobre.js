import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Sobre() {
    return (
            <div>
                <Head>
                    <title>Sobre - Partiu Europa Bru e Nand0</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header />
                <main>
                    <h1>Sobre</h1>
                    <p>Estamos inseguros sobre o futuro do Brasil, então resolvemos meter o pé daqui. O Fernando
                        conseguiu uma
                        vaga
                        de emprego em Portugal, então estamos indo para lá tentar recuperar o ouro que nos levaram
                        :P</p>
                    <p>Os itens já estão com um preço abaixo de mercado, mas também estamos abertos à negociações, então
                        gostou
                        de
                        algo, senta o dedo no botão de negociar e vamos conversar.</p>
                    <p>Não pagamos frete e nem enviamos, todos os itens devem ser retirados aqui no nosso APTO quando
                        estiver
                        disponível.</p>
                    <p>Como estamos indo embora, parcelamento fica difícil.</p>
                </main>
                <Footer />
            </div>
    )
}
