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
                        <h1 className="text-amethyst">Home</h1>
                        <div className="jumbotron">
                            <h1 className="display-4">Venda de garagem da Bru e do Nand0</h1>
                            <p className="lead">Você pode navegar pelas categorias no menu e demonstrar interesse pelos
                                itens clicando no
                                botão de negociar.</p>
                            <hr className="my-4"/>
                            <ol>Algumas regras:
                                <li>Será feita a reserva para a primeira pessoa que nos oferecer o valor sugerido, Se
                                    ninguém oferecer esse valor será aceita a melhor oferta.</li>
                                <li>Estamos indo embora, então o pagamento deve ser feito em uma única parcela.</li>
                                <li>Alguns itens não estão disponíveis imediatamente, ainda usaremos até nossa
                                    partida.
                                </li>
                            </ol>
                            <p>Mais informações em <b><a href="/sobre" className="text-amethyst">sobre</a></b></p>
                        </div>
                    </main>
                </Container>
                <Footer/>
            </div>
    )
}
