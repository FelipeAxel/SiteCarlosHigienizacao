import React from "react";



class NavBar extends React.Component {
    render() {
        return (
            <header>
                <nav className="container">
                    <div className="dsmovie-nav-content">
                        <h1>Carlos Higienização</h1>
                        <div className="test">
                            <a href="/#" target="_blank" rel="noreferrer">
                                <div className="dsmovie-contact-container">
                                    <p className="inicio">Inicio</p>
                                </div>
                            </a>
                            <a href="/#" target="_blank" rel="noreferrer">
                                <div className="dsmovie-contact-container">
                                    <p className="dsmovie-contact-link">Contato</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar