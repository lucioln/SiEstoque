import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-12">
                    <h1>O sistema de estoque mais fácil de usar.</h1>
                    <h4>Gerencie o estoque de sua empresa em qualquer lugar e dispositivo</h4>
                    <a href="/app/login" className="btn btn-light btn-lg btn-banner">Fazer Login</a>
                </div>
            </div>
        </div>
    </section>;
  }

export default Banner;