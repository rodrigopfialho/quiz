import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';

const letras = [
    {valor: 'A', cor: '#f2c866'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85B4F2'},
    {valor: 'D', cor: '#BCE596'},
 
]

interface QuestaProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    key={i}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {renderizarRespostas()}
        </div>
    )
}