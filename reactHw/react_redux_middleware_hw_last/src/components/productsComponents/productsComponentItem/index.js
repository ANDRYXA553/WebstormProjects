




export default function ProductsItem({item}){



    return(<div>
        <h4>TITLE:{item.title}</h4>
        <h4>PRICE:{item.price}</h4>
        <img style={{
        width:'60%'}
        } src={`${item.image}`} alt="not found"/>

    </div>)
}
