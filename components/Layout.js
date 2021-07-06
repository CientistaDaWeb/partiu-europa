import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
            <div>
                <Header title={props.title}/>
                {props.children}
                <Footer/>
            </div>
    )
}
