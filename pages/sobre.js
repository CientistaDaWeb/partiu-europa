import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from "react-bootstrap"

export default function Sobre() {
    return (
            <div>
                <Head>
                    <title>Sobre - Partiu Europa Bru e Nand0</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header/>
                <Container>
                    <main className="pt-4 pb-4">
                        <h1 className="text-amethyst">Sobre</h1>
                        <p>Estamos inseguros sobre o futuro do Brasil, então resolvemos meter o pé daqui. O Fernando
                            conseguiu uma vaga de emprego em Portugal, então estamos indo para lá tentar recuperar o
                            ouro que nos levaram :P ora pois.</p>
                        <p>Os itens já estão com um preço abaixo de mercado, mas também estamos abertos à negociações,
                            então gostou de algo, senta o dedo no botão de negociar e vamos conversar.</p>
                        <p>Não pagamos frete e nem enviamos, todos os itens devem ser retirados aqui no nosso APTO
                            quando o mesmo estiver disponível (alguns a disponibilidade é imediata).</p>
                        <p>Como estamos indo embora, parcelamento fica difícil.</p>
                    </main>
                </Container>
                <Footer/>
            </div>
    )
}
