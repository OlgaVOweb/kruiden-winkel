import { Data } from "./Data";

function Button({filteredKruiden, setKruiden}) {
    return(
        <div className="container__buttons">
            <button className="container__buttons-item" onClick={() => setKruiden(Data)}>x All</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("blackTea")}>x Black tea</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("greenTea")}>x Green tea</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("herbTea")}>x Herb tea</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("teaMixes")}>x Tea mixes</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("teaAccessories")}>x Tea accessories</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("spices")}>x Spices</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("spiceMixes")}>x Spice mixes</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("honey")}>x Honey</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("insence")}>x Incense</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("aromaOil")}>x Aroma oil</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("salt")}>x Salt</button>
            <button className="container__buttons-item" onClick={() => filteredKruiden("another")}>x Another</button>
        </div>
    )
}

export default Button;