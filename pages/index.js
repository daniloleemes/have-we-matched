import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Content from '../components/content'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {
  const regions = [
    'RU1',
    'KR',
    'BR1',
    'OC1',
    'JP1',
    'NA1',
    'EUN1',
    'EUW1',
    'TR1',
    'LA1',
    'LA2'
  ]
  const [summonerRegion, setSummonerRegion] = useState(regions[0]);
  const [summonerName, setSummonerName] = useState('');

  const handleSummonerRegionChange = event => {
    setSummonerRegion(event.target.value);
  }

  const handleSummonerNameChange = event => {
    setSummonerName(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Have We Matched?</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"></link>
      </Head>

      <Layout>
        <Navbar />
        <Header>
          <h1 className="text-white">Welcome to <br />Have We Matched!</h1>
          <p className="text-lead text-white">We'll lookup your last 100 matches and tell if you have ever matched with any of the current team-mates or adversaries</p>
        </Header>
        <Content>
          <div className="col-lg-5 col-md-7">
            <div className="card bg-secondary border-0 mb-0">
              <div className="card-body px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Please tell us your Summoner Name and your Region</small>
                </div>
                <form role="form">
                  <div className="form-group mb-3">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-circle-08"></i></span>
                      </div>
                      <input className="form-control" placeholder="Summoner name" type="text" onChange={handleSummonerNameChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-world"></i></span>
                      </div>
                      <select className="form-control" id="summonerRegion" value={summonerRegion} onChange={handleSummonerRegionChange}>
                        {regions.map((region, index) => <option key={index}>{region}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href="/summoner/[region]/[summonerName]" as={`/summoner/${summonerRegion}/${summonerName}`}>
                      <button type="button" className="btn btn-primary my-4">Have we matched?</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <a href="#" className="text-light"><small>Forgot password?</small></a>
              </div>
              <div className="col-6 text-right">
                <a href="#" className="text-light"><small>Create new account</small></a>
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}
