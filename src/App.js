import './App.scss';
import {Header} from "./fetures/header";
import {TopNote} from "./fetures/top-note";
import {Offer} from "./fetures/offer";

function App() {
    return (
        <div className={'App'}>
            <TopNote/>
            <div className={'main-bg-wrap'}>
                <Header/>
                <Offer/>
            </div>
        </div>
    );
}

export default App;
