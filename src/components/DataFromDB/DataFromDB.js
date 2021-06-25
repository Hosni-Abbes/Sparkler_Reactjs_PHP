import React, { useEffect, useState } from 'react'

import Cpanel from './Cpanel';

import axios from 'axios'
import './DataFromDB.css'

function Achat() {
  const [data, setData] = useState([]) //state
  const imageSrc = 'http://localhost/AchatForm/uploaded/'
  const allData = []

  //function to fetch data from database aand change the state  with this data
  useEffect(() => {
    let isMounted = true
    axios('http://localhost/AchatForm/FetchData.php')
      .then(response => {
        if (isMounted) setData(response.data)
      })
      .catch(error => console.log(error))
    return () => { isMounted = false }
  }, [data])

  //function to chaange the status of the clicked request (when click on finish the staatus will change to finished)
  function sendStatusToDB(index) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost/AchatForm/ChangeStatus.php', true)
    const Form = new FormData()
    Form.append('user_id', data[index].user_id)
    Form.append('status', 'Finished')
    Form.append('isFinished', 'Finished')
    xhr.send(Form)
    if (data[index].status !== 'Finished') {
      data.splice(index, 1)
      const z = allData.concat(data)
      setData(z)
    }
  }

  //function to delete the clicked request
  function sendDeleteToDB(index) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost/AchatForm/Delete.php', true)
    const Form = new FormData()
    Form.append('user_id', data[index].user_id)
    xhr.send(Form)
  }

  //show the data in the table
  const output = data.map((dat, index) => {
    return <React.Fragment key={index}>
      <tr className={dat.status === "Finished" ? 'bred' : 'bgreen'}>
        <td>{dat.user_id}</td>
        <td>{dat.game}</td>
        <td>{dat.his_game_id}</td>
        <td>{dat.num_diamonds}</td>
        <td><a href={imageSrc + dat.proof_img} target="_blank" rel="noreferrer" >{dat.proof_img}</a></td>
        <td className={dat.status === "Finished" ? 'red' : 'green'}>{dat.status}</td>
        <td className={dat.status === "Finished" ? 'red click-me' : 'click-me'}
          onClick={() => { sendStatusToDB(index) }}>{dat.isFinished}
        </td>
        <td className='click-me' onClick={() => { sendDeleteToDB(index) }}>Delete</td>
      </tr>
    </React.Fragment>
  })

  return (
    <div className="data-from-db-container">
      <Cpanel />

      <table>
        <tbody>
          <tr className="tab">
            <th>Users</th>
            <th>Jeu a recharger</th>
            <th>ID en Jeu</th>
            <th>Coins Demander</th>
            <th>Preuve de paiement</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
          {data.length ? output : <tr><td className="no-data-msg" colSpan="8">No Data Available</td></tr>}
        </tbody>
      </table>
    </div>
  )
}

export default Achat