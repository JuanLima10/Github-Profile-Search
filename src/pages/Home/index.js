import React, { useState } from "react"

import * as Style from './styled'
import api from "../../components/api/api"
import Footer from "../../components/Footer"

export default function Home() {
  const [ user, setUser ] = useState('')
  const [ result, setResult ] = useState([])
  const [ showProfile, setShowProfile ] = useState(false)
  
  function handleSearch(e){
    e.preventDefault()
    api.get(`${ user }`)
      .then(response => {
        setResult(response.data)
        setShowProfile(true)
      })
      .catch(err => {setShowProfile(false)})
  }

  return (
    <>
      <Style.Home>
        <h1>GitHub Profiles</h1>
        <Style.Content>
            <form>
              <Style.Search 
                  className="userInput" 
                  placeholder="GitHub Username" 
                  value={ user } 
                  onChange={ e => setUser(e.target.value) }
              />
              <Style.Button type="submit" onClick={ handleSearch }>
                  Search
              </Style.Button>
            </form>
        </Style.Content>
        <Style.Content>
          { showProfile ?

            <Style.Profile>
              <img src={ result.avatar_url } alt="Avatar"/>
              <Style.Infos>
                <h1>{ result.login }</h1>
                <h3>{ result.name }</h3>
                <h3>{ result.bio }</h3>
                <h5>Following: { result.following }  ·  Followers: { result.followers }</h5>
                
                { result.company ? <p><i className="fas fa-briefcase"></i> { result.company }</p> : '' }
                { result.location ? <p><i className="fas fa-map-marker-alt"></i> { result.location }</p> : '' }
                {/* <p>Repositories: { result.public_repos }</p> */}
                <div className="redes">
                  { result.blog ? <a href={ result.blog } target="blank"><i className="fas fa-address-card"></i></a> : '' }
                  { result.html_url ? <a href={ result.html_url } target="blank"><i className="fab fa-github"></i></a> : '' }
                  { result.twitter_username ? <a href={ 'https://twitter.com/' + result.twitter_username } target="blank"><i className="fab fa-twitter"></i></a> : '' }
                </div>
              </Style.Infos>
            </Style.Profile>

            : <Style.Err>Pesquise um Usuário valido!</Style.Err>
          }
        </Style.Content>
      </Style.Home>
      <Footer/>
    </>
  )
}