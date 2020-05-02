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
    const { data: summonerData } = useSWR(() => region && summonerName && `/api/summoner/${region}/${summonerName}`, fetcher)
    const [matches, setMatches] = useState([])
    const [progress, setProgress] = useState(0)
    const [matchesSummary, setMatchesSummary] = useState(null)
    const [loadingMatchesSummary, setLoadingMatchesSummary] = useState(false)
    const [apiError, setApiError] = useState(null)

    useEffect(() => {
        (async () => {
            if (!summonerData || !summonerData.live) {
                setApiError({ message: "Looks like we've run into a problem. It might be because either the chosen summoner is not in a live game right now or anything else. Sorry about that." })
            }
            if (region && summonerData && summonerData.history.matches.length > 0) {
                const array = summonerData.history.matches.slice(0, 20)
                for (let m of array) {
                    const res = await fetch(`/api/matches/${region}/${m.gameId}`)
                    const data = await res.json()
                    setMatches(matches.push(data));
                    setProgress(parseInt((matches.length / array.length) * 100))
                }
                setLoadingMatchesSummary(true)
                setMatchesSummary(parseMatches(matches, summonerData.accountInfo.accountId))
            }
        })()
    }, [summonerData])

    useEffect(() => {
        if (matchesSummary) {
            setLoadingMatchesSummary(false)
        }
    }, [matchesSummary])

    const renderContent = () => {
        return (
            <>
                {!summonerData && <Spinner label="Fetching basic info" />}
                {summonerData && !loadingMatchesSummary && !matchesSummary && <ProgressBar label="Fetching matches" progress={progress} />}
                {loadingMatchesSummary && <Spinner label="Doing some complicated calculations" />}
            </>
        )
    }

    const renderError = () => {
        return (
            <>
                <div className="text-center text-muted mb-4">
                    <img height={120} src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loadouts/summoneremotes/flairs/mcat_sad_tear_inventory.png" />
                </div>
                <div className="text-center text-muted mb-4">
                    <h3>{apiError.message}</h3>
                </div>
            </>
        )
    }

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
                                {apiError ? renderError() : renderContent()}
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer />
            </Layout>
        </>
    )
}