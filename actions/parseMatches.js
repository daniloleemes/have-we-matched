import { groupBy } from 'lodash'

export default function (matches, accountId) {
    debugger
    const mapped = matches.map(({ teams, participants, participantIdentities }) => {
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
            result.victory.push(match.victory.filter(it => it.accountId != accountId || it.currentAccountId != accountId))
        } else {
            result.defeat.push(match.defeat.filter(it => it.accountId != accountId || it.currentAccountId != accountId))
        }

        return result
    }, { victory: [], defeat: []})

    return mapped
}