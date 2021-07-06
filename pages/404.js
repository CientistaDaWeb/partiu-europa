import Head from "next/head"
import Header from "../components/Header"
import {Alert, Container} from "react-bootstrap"
import Footer from "../components/Footer"

export default function Custom404() {
    return (
            <div>
                <Head>
                    <title>Página não encontrada - Partiu Europa Bru e Nand0</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header/>
                <Container>
                    <main>
                        <h1 className="text-amethyst h4">Erro</h1>
                        <hr className="my-2"/>
                        <Alert variant="danger">
                            Página não encontrada!
                        </Alert>
                    </main>
                </Container>
                <Footer/>
            </div>
    )
}
