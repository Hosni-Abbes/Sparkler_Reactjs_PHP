import React from 'react'

export default function Footer(){
  return(
    <footer>
      <span>&copy; Garena Online. Les marques déposées appartiennent à leurs propriétaires respectifs. Tous les droits sont réservés.</span>
      <div className="footer-links">
        <a href="#">FAQ | </a>
        <a href="#">Termes et Conditions | </a>
        <a href="#">Politique de confidentialité</a>
      </div>
    </footer>
  )
}