import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

export function App(){
    return(
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <nav className="sidebar">
                <span>Watch<p>Me</p></span>

                <Sidebar></Sidebar>

            </nav>

            <div className="container">
                <Content></Content>
            </div>
        </div>
    );
}