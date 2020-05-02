export default function (matches) {
    debugger
    const mapped = matches.map(({ teams, participants, participantIdentities }) => {
        const winnerTeam = teams.filter(it => it.win == "Win")[0].teamId
        const participantsWithTeams = participantIdentities.map(p => {
            const { championId, teamId, stats } = participants.filter(it => it.participantId == p.participantId)[0]
            const { kills, deaths, assists, win } = stats
            return {
                ...p, stats: { championId, teamId, kills, deaths, assists, win }
            }
        })

        return {
            ...participantsWithTeams
        }
    })

    return mapped
}