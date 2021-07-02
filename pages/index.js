import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home() {
    return (
            <div>
                <Head>
                    <title>Home - Partiu Europa Bru e Nand0</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Header />
                <main>
                    <h1>
                        Bem-vindo(a) a nossa venda de garagem virtual
                    </h1>
                    <p>Você pode navegar pelas categorias no menu e demonstrar interesse pelos itens clicando no botão
                        de negociar.</p>
                </main>
                <Footer />
            </div>
    )
}
