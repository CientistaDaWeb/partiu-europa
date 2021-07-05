import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"

export default function NegociarFernando(props) {
    if (!props.item.owner || !props.item.owner.includes('N')) {
        return false
    }
    return (
            <a className="btn btn-nando text-white m-2 align-middle"
               href={`https://api.whatsapp.com/send?phone=5554996051020&text=Opa, estou interessado nesse item: "${props.item.name}", bora negociar?`}
               target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} size="xs" fixedWidth/> Nand0
            </a>
    )
}
