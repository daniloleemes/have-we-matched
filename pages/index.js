import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Content from '../components/content'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"></link>
      </Head>

      <Layout>
        <Navbar />
        <Header>
          <h1 className="text-white">Welcome to <br/>Have We Matched!</h1>
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
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                      </div>
                      <input className="form-control" placeholder="Summoner name" type="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                      </div>
                      <select className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-primary my-4">Have we matched?</button>
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
