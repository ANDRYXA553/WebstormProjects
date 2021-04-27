import './MainContentStyle.css'

function MainContent(props) {
    return <div>
        <div className={'mainContent'}>
            <img src={props.mainPhoto} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt officia omnis quisquam tempora
                voluptatem. Accusantium commodi, consequatur, debitis distinctio eligendi error, expedita ipsam itaque
                quis repellat reprehenderit similique velit. Aliquid dicta facilis quis quo ratione recusandae! Alias
                aspernatur autem, beatae cumque delectus error incidunt iure laboriosam quis reprehenderit sequi
                sit. </p></div>
    </div>

}

export default MainContent;

