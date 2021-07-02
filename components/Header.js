import stock from '../stock.json'

export default function Header() {
    return (
            <header>
                <nav>
                    <ul>
                        <li><a href="/" title="Home">Home</a></li>
                        <li>Categorias de Produtos
                            <ul>
                                {stock.map(function (category, index) {
                                    return <li key={index}><a
                                            href={`/produtos/${encodeURIComponent(category.slug)}`}>{category.name}</a>
                                    </li>
                                })}
                            </ul>
                        </li>
                        <li><a href="/sobre" title="Sobre">Sobre</a></li>
                    </ul>
                </nav>
            </header>
    )
}
