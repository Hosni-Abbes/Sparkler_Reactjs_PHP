import React from 'react'

function ValidAndSubmit(props) {
  
  return(
    <form className='accept-form' onSubmit={props.confirmSubmit}>
      <label>Confirmer l'achat</label>
      <div className="accept-form-btns">
        <button type="submit">Confirmer</button>
        <button onClick={()=>{props.dissmissSubmitForm()}} type="button">Annuler</button>
      </div>
    </form>
  )
}

export default ValidAndSubmit