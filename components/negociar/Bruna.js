import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function NegociarBruna(props) {
    if (!props.item.owner || !props.item.owner.includes('B')) {
        return false
    }
    return (
            <a className="btn btn-bru text-white m-2 align-middle"
               href={`https://api.whatsapp.com/send?phone=5554999126898&text=Oi, queria muito o(a) ${props.item.name}, que tal me vender?`}
               target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} size="xs"/> Bru
            </a>
    )
}
