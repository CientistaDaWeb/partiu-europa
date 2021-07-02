import Head from 'next/head'
import {useRouter} from 'next/router'
import stock from '../../stock.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Category() {
    const router = useRouter()
    const {category} = router.query
    const categoryItems = stock.filter(function (item) {
        return item.slug===category
    })
    if (!categoryItems[0] || typeof categoryItems[0].items==='undefined' || categoryItems[0].items.length===0) {
        return (
                <div>
                    <Head>
                        <title>Partiu Europa Bru e Nand0 - {categoryItems.name}</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    <Header/>
                    <main>
                        <div className="bg-white dark:bg-gray-800">
                            Nenhum item encontrado
                        </div>
                    </main>
                    <Footer/>
                </div>
        )
    } else {
        return (
                <div>
                    <Head>
                        <title>Partiu Europa Bru e Nand0 - {categoryItems[0].name}</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    <Header/>
                    <main>
                        <div className="bg-white dark:bg-gray-800">
                            Items da Categoria > {categoryItems[0].name}
                            {categoryItems[0].items.map(function (item, index) {
                                if (!item.available)
                                    return false
                                return <div className="flex" key={index}>
                                    <div className="flex-none w-48 relative">
                                        {item.photos.map(function (photo, index) {
                                            return <img src={photo}
                                                        alt="{item.name}"
                                                        key={index}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        })}
                                    </div>
                                    <div className="flex-auto p-6">
                                        <div className="flex flex-wrap">
                                            <h1 className="flex-auto text-xl font-semibold">
                                                {item.name}
                                            </h1>
                                            <div className="text-xl font-semibold text-gray-500">
                                                R$ {item.price} (Disponibilidade {item.disponibility})
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="flex space-x-3 mb-4 text-sm font-medium">
                                            <div className="flex-auto flex space-x-3">
                                                <a className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                                                   href={`https://api.whatsapp.com/send?phone=5554999126898&text=Oi, queria muito o(a) ${item.name}, que tal me vender?`}
                                                   target="_blank"
                                                >Negociar com a Bru
                                                </a>
                                                <a className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
                                                   href={`https://api.whatsapp.com/send?phone=5554996051020&text=Opa, estou interessado nesse item: "${item.name}", bora negociar?`}
                                                   target="_blank"
                                                >Negociar com o Nand0
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                            }
                        </div>
                    </main>
                    <Footer/>
                </div>
        )
    }
}
