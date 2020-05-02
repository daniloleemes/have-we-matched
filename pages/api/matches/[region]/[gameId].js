import axios from 'axios'

const apiKey = 'RGAPI-85d7c6cc-b5b3-40f2-8a1d-b2062780338b'

export default async (req, res) => {
    const { gameId, region } = req.query
    if (gameId == 'undefined' && region == 'undefined') {
        return
    }

    const { data } = await axios.get(`https://${region}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${apiKey}`)
    return res.send(data)
}