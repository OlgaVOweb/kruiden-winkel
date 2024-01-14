import { Data } from "./Data";

function Button({filteredKruiden, setKruiden}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => setKruiden(Data)}>All</button>
            <button className="change" onClick={() => filteredKruiden("blackTea")}>Black tea</button>
            <button className="change" onClick={() => filteredKruiden("greenTea")}>Green tea</button>
            <button className="change" onClick={() => filteredKruiden("herbTea")}>Herb tea</button>
            <button className="change" onClick={() => filteredKruiden("teaMixes")}>Tea mixes</button>
            <button className="change" onClick={() => filteredKruiden("teaAccessories")}>Tea accessories</button>
            <button className="change" onClick={() => filteredKruiden("spices")}>Spices</button>
            <button className="change" onClick={() => filteredKruiden("spiceMixes")}>Spice mixes</button>
            <button className="change" onClick={() => filteredKruiden("honey")}>Honey</button>
            <button className="change" onClick={() => filteredKruiden("insence")}>Incense</button>
            <button className="change" onClick={() => filteredKruiden("aromaOil")}>Aroma oil</button>
            <button className="change" onClick={() => filteredKruiden("salt")}>Salt</button>
            <button className="change" onClick={() => filteredKruiden("another")}>Another</button>
        </div>
    )
}

export default Button;