import './itemStyle.css'


function Item(prop){
    return <div className={'item'}>
        <img src={prop.itemImg} alt=""/>
        <p>{prop.itemDescription}</p>

    </div>


}
export default Item;