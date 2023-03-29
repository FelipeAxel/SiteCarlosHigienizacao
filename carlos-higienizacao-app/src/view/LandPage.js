import React from "react";
import eren from '../assets/eren.jpg'
import bleach from '../assets/bleach.jpg'
import naruto from '../assets/naruto.jpg'
import skyrim from '../assets/skyrim.jpg'


class LandPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="cards">
                    <div className="card1 col-md-4">
                        <h5>Higienização Interna</h5>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" alt="eren yeger [100%x225]" src={eren} />
                            <div className="card-body">
                                <p className="card-text">Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.sadsadasdsdasddasdsdsadsadsd</p>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card2 col-md-4">
                        <h5>Martelinho de ouro</h5>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" alt="Imagem ichigo kurosak [100%x225]" src={bleach} />
                            <div className="card-body">
                                <p className="card-text">Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Quem num gosta di mim que vai caçá sua turmis!Manduma pindureta quium dia nois paga.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card3 col-md-4">
                        <h5>Polimento tecnico</h5>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" alt="Skyrim [100%x225]" src={skyrim} />
                            <div className="card-body">
                                <p className="card-text">Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Aenean aliquam molestie leo, vitae iaculis nisl.Cevadis im ampola pa arma uma pindureta.Per aumento de cachacis, eu reclamis.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card4 col-md-4">
                        <h5>Vetrificação</h5>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" alt="jiraya [100%x225]" src={naruto} />
                            <div className="card-body">
                                <p className="card-text">Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Casamentiss faiz malandris se pirulitá.Delegadis gente finis, bibendum egestas augue arcu ut est.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="card-img-top" alt="Imagem ichigo kurosak [100%x225]" src={bleach} />
            </div>

        )
    }
}

export default LandPage;