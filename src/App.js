import BatScreen from "./components/BatScreen";
import WebFont from 'webfontloader';

function App() {
    WebFont.load({
        google: {
            families: ['Anton:400', 'sans-serif']
        }
    });

    return (
        <div className="app">
            <BatScreen />
        </div>
    );
}

export default App;
