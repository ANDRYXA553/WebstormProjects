import './App.css';
import HeaderCreate from "./components/header/header";
import MainContent from "./components/mainContent/MainContent";
import Item from "./components/item/item";
import AboutItem from "./components/aboutItem/aboutItem";
import Footer from "./components/footer/footer";

function App() {
    let items = [
        {
            itemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg',
            itemDescription: 'Lorem ipsum dolor sit amet.'
        },
        {
            itemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg',
            itemDescription: 'Lorem ipsum dolor sit amet.'
        },
        {
            itemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg',
            itemDescription: 'Lorem ipsum dolor sit amet.'
        },
        {
            itemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg',
            itemDescription: 'Lorem ipsum dolor sit amet.'
        },
        {
            itemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg',
            itemDescription: 'Lorem ipsum dolor sit amet.'
        }
    ]

    let aboutItem = [
        {
            aboutItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
            figure: 'triangle',
            aboutItemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg'
        },
        {
            aboutItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
            figure: 'triangle',
            aboutItemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg'
        },
        {
            aboutItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
            figure: 'triangle',
            aboutItemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg'
        },
        {
            aboutItemText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ',
            figure: 'triangle',
            aboutItemImg: 'https://www.graphis.com/media/uploads/cache/97/3d/973d50266c11ac40bc99761c89e74ec7.jpg'
        }
    ]


    return (
        <div className="App">
            <HeaderCreate tittle={'B&W'}
                          logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbsc-KYAL-ZHw0ci1x5bJYTGPSAq2u_o-iw&usqp=CAU'}/>
            <MainContent mainPhoto={'https://trendsandmanagement.com/wp-content/uploads/2020/10/trust_vs_forest.jpg'}/>
            <div className={'items'}>

                {items.map((value, index)=><Item key={index} {...value}
                />)
                }
            </div>
            <hr/>
            <div className={'aboutItems'}>
                {aboutItem.map((value, index) => <AboutItem
                key={index} {...value}
                />)}
            </div>
            <Footer footerText={'Footer'}/>

        </div>
    );
}

export default App;
