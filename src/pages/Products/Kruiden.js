function Kruiden({itemKruiden}) {
    return(<div className="container__products">
        {itemKruiden.map((element => {
            const {id, kruidenName, price, units, image, compound} = element;
            return (
                <div key={id} className="product__card">
                    <img className="product__card-image" src={image} width="180px" height="180px" alt="prod"/>
                    <div className="product__card-content">
                        <h3 className="card__content-name">{kruidenName}</h3>
                        <h4 className="card__content-compound">{compound}</h4>
                        <h4 className="card__content-price">$ {price} {units}</h4>
                    </div>
                    <div className="product__card-buttons">
                        <button className="card__buttons-item1">-</button>
                        <button className="card__buttons-item2">0</button>
                        <button className="card__buttons-item3">+</button>
                        <button className="card__buttons-item4">ADD</button>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Kruiden;