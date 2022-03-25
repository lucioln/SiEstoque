import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <p>Desenvolvido SiEstoque &copy; - {ano}</p>

    </section>;
  }

export default Footer;

