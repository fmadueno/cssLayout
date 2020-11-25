import './maquetacion.css';
import React from "react";

function App() {
    return (
        <div>
            <div className="navbar">
                <a href="http://" className="nav-el">CSS Layout</a>
                <a href="http://" className="nav-el">CSS Layout</a>
                <a href="http://" className="nav-el">CSS</a>
                <a href="http://" className="nav-el">CSS Layout</a>
                <a href="http://" className="nav-el">CSS Layout</a>
            </div>
            <div className ="content">
                <div className="card">
                    <div className="card-title">
                        Card1
                    </div>
                    <div className="card-body">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        Card2
                    </div>
                    <div className="card-body">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        Card3
                    </div>
                    <div className="card-body">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
            </div>

            <footer className="footer">footer</footer>
        </div>
    );
}

export default App;
