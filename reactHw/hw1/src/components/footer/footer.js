import './footerStyle.css'


function Footer(props){

    return <div className={'footer'}>
        <hr/>
        <p>{props.footerText}</p>
    </div>
}
export default Footer;