import {useRouter} from 'next/router'
import stock from '../../stock.json'
import _ from 'lodash'
import NegociarBruna from "../../components/negociar/Bruna"
import NegociarFernando from "../../components/negociar/Fernando"
import {Alert, Card, CardColumns, Carousel, Container} from "react-bootstrap"
import Layout from "../../components/Layout"

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
                <Layout title={`Partiu Europa Bru e Nand0 - ${categoryItems.name}`}>
                    <Container>
                        <main>
                            <h1 className="text-amethyst h4">Erro</h1>
                            <hr className="my-2"/>
                            <Alert variant="danger">
                                Categoria não encontrada!
                            </Alert>
                        </main>
                    </Container>
                </Layout>
        )
    } else {
        const items = _.orderBy(categoryItems[0].items, ['name'])
        return (
                <Layout title={`Partiu Europa Bru e Nand0 - ${categoryItems.name}`}>
                    <Container>
                        <main>
                            <h1 className="text-amethyst h4">Items da Categoria > {categoryItems[0].name}</h1>
                            <hr className="my-2"/>
                            <CardColumns>
                                {items.map(function (item, index) {
                                    if (!item.available)
                                        return false
                                    return (
                                            <Card key={index}>
                                                <Card.Body className="bg-turquoise text-white p-0">
                                                    <Carousel fade className="mb-2">
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
                                                    <Card.Title className="p-2">{item.name}</Card.Title>
                                                    <Card.Text className="p-2"
                                                               dangerouslySetInnerHTML={{__html: item.description}}/>
                                                    <Card.Text className="p-2">
                                                        <p>
                                                            {item.oldPrice > 0 &&
                                                            <s className="oldPrice">{formatter.format(item.oldPrice)}</s>} <b>{formatter.format(item.price)}</b>
                                                            <br/>(Disponibilidade {item.disponibility})
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer className="bg-amethyst text-white p-0">
                                                    <p className="text-center align-middle mb-0">Negociar com:
                                                        <NegociarBruna item={item}/>
                                                        <NegociarFernando item={item}/>
                                                    </p>
                                                </Card.Footer>
                                            </Card>
                                    )
                                })}
                            </CardColumns>
                        </main>
                    </Container>
                </Layout>
        )
    }
}
