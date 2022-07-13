import {Container} from "react-bootstrap"
import Layout from "../components/Layout"

export default function Home() {
    return (
            <Layout title="Home - Partiu Europa Bru e Nand0">
                <Container>
                    <main>
                        <h1 className="text-amethyst h4">Home</h1>
                        <hr className="my-2"/>
                        <div className="jumbotron pt-4 pb-4">
                            <h1 className="h2">Venda de garagem da Bru e do Nand0 - VENDAS ENCERRADAS</h1>
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
                                <li>Os itens devem ser retirados em nosso apartamento, não enviamos.</li>
                            </ol>
                            <p>Mais informações em <b><a href="/sobre" className="text-amethyst">sobre</a></b></p>
                        </div>
                    </main>
                </Container>
            </Layout>
    )
}
