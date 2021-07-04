export default function NegociarFernando(item) {
    if(!item.owner || !item.owner.includes('N')){
        return false
    }
    return (
            <a className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
               href={`https://api.whatsapp.com/send?phone=5554996051020&text=Opa, estou interessado nesse item: "${item.name}", bora negociar?`}
               target="_blank"
            >Negociar com o Nand0
            </a>
    )
}
