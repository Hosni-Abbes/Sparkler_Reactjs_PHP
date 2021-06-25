import React from 'react'
import './About.css'

export default function About(){
  return(
    <div className="about-container">
      <h1>About us</h1>
      <p>Qui sommes nous ?<br />
        Nous sommes une entreprise qui offre un service qui permet aux joueurs de recharger leurs comptes avec des diamants, de la manière la plus simple.</p>
      <p>Pour rejoindre notre service. <br />
        Dans la page d'accueil, vous devez cocher le jeu que vous souhaitez recharger et saisir vos données.</p>
        <span>Etapes a suivre:</span>
        <ol>
          <li>Le premier champ nécessite votre identifiant (ID) dans le jeu.</li>
          <li>Le deuxième champ nécessite de saisir à nouveau votre identifiant pour confirmer.</li>
          <li>Le troisième champ nécessite une preuve de paiement (une image du ticket de recharge).</li>
          <li>Le quatrième champ nécessite le nombre de diamants que vous souhaitez acheter.</li>
          <li>Envoyez votre demande.</li>
        </ol>
        <p>Nous étudierons votre demande et nous vérifions vos données. Nous verrons si votre paiement est vérifié, nous rechargerons votre compte dans le delai d'une heure.</p>
    </div>
  )
}
