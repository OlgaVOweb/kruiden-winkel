function Kruiden({itemKruiden}) {
    return(<div className="products">
        {itemKruiden.map((element => {
            const {id, kruidenName, price, units, image, compound} = element;
            return (
                <div key={id} className="product-card">
                    <img src={image} width="300px" height="210px" alt="meal"/>
                    <div className="product-info">
                        <h3>{kruidenName}</h3>
                        <h4>$ {price} {units}</h4>
                        <h4>{compound}</h4>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Kruiden;