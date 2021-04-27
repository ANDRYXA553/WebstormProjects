import './headerStyle.css'

function HeaderCreate(props) {
    return <div className={'header'}>
        <div className={'content'}>
            <img src={props.logo} alt=""/>
            <h2>{props.tittle}</h2>
        </div>
        <hr/>

    </div>

}

export default HeaderCreate;