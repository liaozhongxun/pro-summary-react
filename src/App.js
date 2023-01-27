import { Link, useRoutes } from "react-router-dom";
import routes from "./router"

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/home">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/entire">更多</Link>
            </div>
            <div>
                <div>{useRoutes(routes)}</div>
            </div>
        </div>
    );
}

export default App;
