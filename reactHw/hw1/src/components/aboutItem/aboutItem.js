import './aboutItemStyle.css'


function AboutItem(props){



    return <div className={'aboutItem'}>
        <div className={'imgItem'} >
            <img src={props.aboutItemImg} alt=""/>
        </div>
        <p>{props.aboutItemText}</p>

    </div>

}
export default AboutItem;

