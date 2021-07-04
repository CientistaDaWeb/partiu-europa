import stock from '../stock.json'
import _ from 'lodash'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"

let categories = _.filter(stock, ['available', true])
categories = _.orderBy(categories, ['name', 'ASC'])

export default function Header() {
    return (
            <header>
                <Container>
                    <Navbar bg="turquoise" variant="dark" fixed="top" className="text-center" expand="md">
                        <Navbar.Brand href="/">Partiu Europa Bru e Nand0</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                    {categories.map(function (category, index) {
                                        return (
                                                <NavDropdown.Item key={index}
                                                                  href={`/produtos/${encodeURIComponent(category.slug)}`}
                                                                  title={`Categoria ${category.name}`}
                                                >{category.name}
                                                </NavDropdown.Item>
                                        )
                                    })}
                                </NavDropdown>
                                <Nav.Link href="/sobre">Sobre</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
    )
}
