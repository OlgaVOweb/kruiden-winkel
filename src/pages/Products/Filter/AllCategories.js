import Filter from "./Filter";

const AllCategories = () => {
    return (<div>

        {['KRUIDEN', 'GROEN THEE', 'THEE', 'ZWARTE THEE', 'THEE MIX', 'HONEY', 'INCENCE', 'ALL'].map(category => <Filter category={category}/>)}
        
    </div>)
}

export default AllCategories;