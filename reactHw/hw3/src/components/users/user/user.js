

export default function User({item,address}){

    return (<div className={'user'}>
        {item.id}-
        {item.name}
        <button onClick={()=>address(item)}>Address</button>
    </div>)
}