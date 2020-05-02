import { groupBy } from 'lodash'

export default function (matches, { accountId, id: playerSummonerId }, { participants: liveMatchParticipants }) {
    if (!matches.map) {
        return
    }

    const mapped = matches.map(({ participants, participantIdentities }) => {
        const participantsWithTeams = participantIdentities.map(p => {
            const { championId, teamId, stats } = participants.filter(it => it.participantId == p.participantId)[0]
            const { kills, deaths, assists, win } = stats
            return {
                ...p.player, championId, teamId, kills, deaths, assists, win
            }
        })

        return groupBy(Object.values(participantsWithTeams), (n) => n.win ? 'victory' : 'defeat')
    }).map(match => {
        let win = match.victory.some(it => it.accountId == accountId || it.currentAccountId == accountId)
        return {
            ...match,
            win
        }
    }).reduce((result, match) => {
        if (match.win) {
            result.victory.push(match.victory.filter(it => it.currentAccountId != accountId))
        } else {
            result.defeat.push(match.defeat.filter(it => it.currentAccountId != accountId))
        }

        return { victory: result.victory.flat(), defeat: result.defeat.flat() }
    }, { victory: [], defeat: [] })

    const player = liveMatchParticipants.filter(it => it.summonerId == playerSummonerId)[0]
    const liveMatchParticipantsInfo = liveMatchParticipants
        .filter(it => it.summonerId != playerSummonerId)
        .map(({ profileIconId, summonerId, summonerName, teamId }) => {
            let victories = mapped.victory.filter(it => it.summonerId == summonerId)
            let defeats = mapped.defeat.filter(it => it.summonerId == summonerId)
            let enemy = player && teamId != player.teamId

            return {
                summonerId, profileIconId, summonerName, victories, defeats, enemy
            }
        })

    return groupBy(liveMatchParticipantsInfo, (n) => {
        return n.enemy ? 'enemy' : 'allied'
    })
}