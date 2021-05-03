import './post.css'


export  default function  Post({item,postDetail}){
    return(
        <div className={'post'}>
            {item.id} --
            {item.title}--
            <button onClick={()=>postDetail(item)}>Detail</button>

        </div>
    )
}