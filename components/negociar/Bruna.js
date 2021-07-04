export default function NegociarBruna(item) {
    if(!item.owner || !item.owner.includes('B')){
        return
    }
    return (
            <a className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
               href={`https://api.whatsapp.com/send?phone=5554999126898&text=Oi, queria muito o(a) ${item.name}, que tal me vender?`}
               target="_blank"
            >Negociar com a Bru
            </a>
    )
}
