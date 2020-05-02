import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Navbar from '../../../components/navbar'
import Content from '../../../components/content'
import Footer from '../../../components/footer'

const Comment = () => {
    const router = useRouter()
    const { region, summonerName } = router.query

    return (
        <>
            <Head>
                <title>Have We Matched?</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"></link>
            </Head>
            <Layout>
                <Navbar />
                <Header>
                    <h1 className="text-white">{summonerName} <br />{region}</h1>
                </Header>
                <Content>
                    <div className="col-lg-12 col-md-12">
                        <div className="card bg-secondary border-0 mb-0">
                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                                <div className="text-center text-muted mb-4">
                                    <small>Please tell us your Summoner Name and your Region</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer />
            </Layout>
        </>
    )
}

export default Comment