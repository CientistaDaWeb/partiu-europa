import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from "react-bootstrap";


export default function Home() {
    return (
            <div>
                <Head>
                    <title>Home - Partiu Europa Bru e Nand0</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header/>
                <Container>
                    <main className="pt-4 pb-4">
                        <h1>
                            Bem-vindo(a) a nossa venda de garagem virtual
                        </h1>
                        <p>Você pode navegar pelas categorias no menu e demonstrar interesse pelos itens clicando no
                            botão de negociar.</p>
                        <p>Será feita a reserva para a primeira pessoa que nos oferecer o valor sugerido, Se ninguém
                            oferecer esse valor será aceita a melhor oferta.</p>
                    </main>
                </Container>
                <Footer/>
            </div>
    )
}
