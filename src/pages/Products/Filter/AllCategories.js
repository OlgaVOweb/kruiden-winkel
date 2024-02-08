import Filter from "./Filter";

const AllCategories = () => {
    return (<div className="container__category">
        {['KRUIDEN', 'GROEN THEE', 'THEE', 'NOOT', 'ZWARTE THEE', 'THEE MIX', 'HONEY', 'INCENCE', 'ANDER','ALL'].map(category => <Filter category={category}/>)}  
    </div>
    )
}

export default AllCategories;