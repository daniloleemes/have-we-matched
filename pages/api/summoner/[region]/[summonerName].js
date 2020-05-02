import axios from 'axios'

const apiKey = 'RGAPI-85d7c6cc-b5b3-40f2-8a1d-b2062780338b'

export default async (req, res) => {
    const { summonerName, region } = req.query
    if (summonerName == 'undefined' && region == 'undefined') {
        return
    }
    
    const { data } = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`)
    const { data: matches } = await axios.get(`https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.accountId}?api_key=${apiKey}&queue=420`)
    return res.send(matches)
}