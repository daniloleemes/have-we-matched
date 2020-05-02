import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Navbar from '../../../components/navbar'
import Content from '../../../components/content'
import Footer from '../../../components/footer'
import Spinner from '../../../components/spinner'
import ProgressBar from '../../../components/progressBar'
import parseMatches from '../../../actions/parseMatches'

const fetcher = async url => {
    const res = await fetch(url)
    const data = await res.json()

    return data
}

export default function SummonerInfo() {
    const { query } = useRouter()
    const { region, summonerName } = query
    const { data: matchesData, error } = useSWR(() => region && summonerName && `/api/summoner/${region}/${summonerName}`, fetcher)
    const [matches, setMatches] = useState([]);
    const [progress, setProgress] = useState(0);
    const [matchesSummary, setMatchesSummary] = useState(null);
    const [loadingMatchesSummary, setLoadingMatchesSummary] = useState(false)

    useEffect(() => {
        (async () => {
            if (region && matchesData && matchesData.matches.length > 0) {
                const array = matchesData.matches.slice(0, 3)
                for (let m of array) {
                    const res = await fetch(`/api/matches/${region}/${m.gameId}`)
                    const data = await res.json()
                    setMatches(matches.push(data));
                    setProgress(parseInt((matches.length / array.length) * 100))
                }
                setLoadingMatchesSummary(true)
                setMatchesSummary(parseMatches(matches))
            }
        })()
    }, [matchesData])

    useEffect(() => {
        if (matchesSummary) {

        }
    }, [matchesSummary])

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
                                {!matchesData && <Spinner label="Fetching basic info" />}
                                {matchesData && !loadingMatchesSummary && <ProgressBar label="Fetching matches" progress={progress} />}
                                {loadingMatchesSummary && <Spinner label="Doing some complicated calculations" />}
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer />
            </Layout>
        </>
    )
}