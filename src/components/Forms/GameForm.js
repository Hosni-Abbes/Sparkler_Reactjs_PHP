import React from 'react'
import ValidAndSubmit from './ValidAndSubmit'

class GameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      confirmId: '',
      file: ['Choisir une capture (preuve) de paiement'],
      numbrDiamonds: '',
      game: this.props.gameName,
      submitForValid: false,
      successMsg: false,
      loading: false,
      isSended: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.calculeAmmount = this.calculeAmmount.bind(this)
    this.dissmissSubmitForm = this.dissmissSubmitForm.bind(this)
    this.confirmSubmit = this.confirmSubmit.bind(this)
    this.successMsg = this.successMsg.bind(this)
  }

  //function handleChange
  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  //function handleSubmit
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      submitForValid: true
    })
  }

  //function calculeAmmount
  calculeAmmount = () => {
    return (this.state.numbrDiamonds * 40) / 1000
  }

  //function dissmissSubmitForm
  dissmissSubmitForm = () => {
    this.setState({
      id: '',
      confirmId: '',
      file: ['Choisir une capture (preuve) de paiement'],
      numbrDiamonds: '',
      game: this.props.gameName,
      submitForValid: false,
      successMsg: false,
      loading: false,
      isSended: false
    })
  }

  //function confirmSubmit
  confirmSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    const formElement = document.querySelector('.formElement')
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost/AchatForm/AchatForm.php', true)
    xhr.onload = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response
          var msg = null
          var successMsg = 'Nous avons reçu votre demande, nous rechargerons votre compte dans une heure.'
          if (data === 'success') {
            msg = successMsg
          } else {
            msg = data
          }
        }
      }
      document.querySelector('.data-msg').textContent = msg
      if (msg === successMsg) {
        document.querySelector('.data-msg').style.color = '#1b5e20'
      } else {
        document.querySelector('.data-msg').style.color = '#b71c1c'
      }
    }
    const Form = new FormData(formElement)
    Form.append('game', this.state.game)
    xhr.send(Form)

    this.setState({
      submitForValid: false,
      successMsg: true,
      loading: false,
      isSended: true,
    })
  }

  //function render successMsg
  successMsg = () => {
    if (this.state.loading) {
      return <p className="loading">Loading...</p>
    } else if (this.state.isSended) {
      return <div className='success'>
        <p className="data-msg"></p>
        <span onClick={() => { this.setState({ successMsg: false, isSended: false }) }} className="close-res-msg">x</span>
      </div>
    }
  }

  render() {
    return (
      <div className="achat-form">
        <span className="close-div" onClick={() => { this.props.closeForm() }}>x</span>
        <div className="game-name">{this.state.game}</div>
        <div className="achat-msg">Enter votre ID en jeu et continuez</div>
        <div className="form-group">
          <form onSubmit={e => { this.handleSubmit(e) }} className="formElement">
            <input onChange={e => { this.handleChange(e) }} value={this.state.id} type="text" placeholder="Votre ID en jeu" name="id" />
            <input onChange={e => { this.handleChange(e) }} value={this.state.confirmId} type="text" placeholder="Confirmé Votre ID en jeu" name="confirmId" />
            <div className="upload-div" htmlFor='file'>
              <input onChange={e => { this.handleChange(e) }} type="file" id="file" name="file" /> <label htmlFor="file">{this.state.file[0] !== '' ? this.state.file[0] : 'Choisir une capture (preuve) de paiement'}<i className="fa fa-upload upload-icon"></i></label>
            </div>
            <input onChange={e => { this.handleChange(e) }} value={this.state.numbrDiamonds} type="number" min="1" name="numbrDiamonds" placeholder="Nombre des diamons a acheter" />
            <div className="montant-total">Montant total : <span className="montant-calculer">{this.calculeAmmount()} DT</span></div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        {this.state.submitForValid ? <ValidAndSubmit confirmSubmit={this.confirmSubmit} dissmissSubmitForm={this.dissmissSubmitForm} /> : ''}
        {this.state.successMsg ? this.successMsg() : ''}
      </div>
    )
  }
}

export default GameForm