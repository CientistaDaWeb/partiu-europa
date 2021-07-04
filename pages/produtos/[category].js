import Head from 'next/head'
import {useRouter} from 'next/router'
import stock from '../../stock.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import _ from 'lodash'
import NegociarBruna from "../../components/negociar/Bruna"
import NegociarFernando from "../../components/negociar/Fernando"
import {Card, CardColumns, Carousel, Container} from "react-bootstrap"

export default function Category() {
    const router = useRouter()
    const {category} = router.query
    const categoryItems = stock.filter(function (item) {
        return item.slug===category
    })
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    if (!categoryItems[0] || typeof categoryItems[0].items==='undefined' || categoryItems[0].items.length===0) {
        return (
                <div>
                    <Head>
                        <title>Partiu Europa Bru e Nand0 - {categoryItems.name}</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    <Header/>
                    <main className="container mx-auto">
                        <div className="bg-white dark:bg-gray-800">
                            Nenhum item encontrado
                        </div>
                    </main>
                    <Footer/>
                </div>
        )
    } else {
        const items = _.orderBy(categoryItems[0].items, ['name'])
        return (
                <div>
                    <Head>
                        <title>Partiu Europa Bru e Nand0 - {categoryItems[0].name}</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    <Header/>
                    <Container>
                        <main className="pt-4 pb-4">
                            <h1 className="text-amethyst">Items da Categoria > {categoryItems[0].name}</h1>
                            <CardColumns>
                                {items.map(function (item, index) {
                                    if (!item.available)
                                        return false
                                    return (
                                            <Card key={index}>
                                                <Card.Body className="bg-turquoise text-white">
                                                    <Carousel fade className="mb-3">
                                                        {item.photos.map(function (photo, index) {
                                                            return (
                                                                    <Carousel.Item key={index}>
                                                                        <img
                                                                                className="d-block w-100"
                                                                                src={photo}
                                                                                alt="{item.name}"
                                                                        />
                                                                    </Carousel.Item>
                                                            )
                                                        })}
                                                    </Carousel>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text dangerouslySetInnerHTML={{__html: item.description}}>
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer className="bg-amethyst text-white pl-4 pr-4">
                                                    <p>{formatter.format(item.price)} (Disponibilidade {item.disponibility})</p>
                                                    {/*<NegociarBruna item={item} />*/}
                                                    {/*<NegociarFernando item={item} />*/}
                                                </Card.Footer>
                                            </Card>
                                    )
                                })}
                            </CardColumns>
                        </main>
                    </Container>
                    <Footer/>
                </div>
        )
    }
}
