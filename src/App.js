import ReactDOM from "react-dom";

import Pet from "./Pet"
import SearchParams from "./SearchParams"

const App = () => {
    return (
        <div>
            <h1>Adopt Me</h1>
            <SearchParams />
            <Pet name="Paşa" breed="Golden" animal="Dog"/>
            <Pet name="Pepper" breed="Cockatiel" animal="Bird"/>
            <Pet name="Beam" breed="Terrier" animal="Dog"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));