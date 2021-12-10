import './App.scss';
import {Header} from "./fetuares/header";
import {TopNote} from "./fetuares/top-note";
import {Offer} from "./fetuares/offer";
import {Subscribe} from "./fetuares/subscribe";
import {Footer} from "./fetuares/footer";
import {useSelector} from "react-redux";

function App() {
    //Login status - auth or not
    const {header: {loginStatus}} = useSelector(store => store)  // default false

    return (
        <div className={'App'}>
            <TopNote/>
            <div className={!loginStatus ? 'main-bg-wrap' : ''}>
                <Header/>
                <Offer/>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
