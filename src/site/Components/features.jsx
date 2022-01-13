import React from 'react';

function Features(){
    return <section id="features">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-address-card fa-5x"></i>
                    <h3>Gerencie o acesso</h3>                    
                    <p>Controle quem pode acessar seu sistema.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe-americas fa-5x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu negócio onde quer que você esteja.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-columns fa-5x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua controle total do estoque do seu produto.</p>
                </div>
                       
            </div>
        </div>
    </section>;
  }

export default Features;