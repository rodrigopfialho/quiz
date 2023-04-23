import { embaralhar } from "../../../functions/arrays"
import questoes from "../bancoDeQuestoes"

// eslint-disable-next-line import/no-anonymous-default-export
export default function questionario (req, res) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}