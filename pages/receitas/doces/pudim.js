import Recipe from '../../../components/Recipe/Recipe'

export default function Pudim(){
    return(
        <div>
            <Recipe
                name="Pudim"
                picture="/img/pudim.png"
                time="30 minutos"
                servings="8 porções"
            >
                
                <h2>
                        Ingredientes
                    </h2>

                    <h3>
                        Calda
                    </h3>

                    <ul>
                        <li>
                        Meia xícara (chá) - Água quente
                        </li>
                        <li>
                            Açucar
                        </li>
                    </ul>

                    <h3>
                        Massa
                    </h3>

                    <ul>
                        <li>
                            1 cx - Leite condensado
                        </li>
                    </ul>

                    <h2>
                        Modo de Preparo
                    </h2>

                    <h3>
                        Massa
                    </h3>

                    <ol>
                        <li>
                            Em um liquidificador, bata todos os ingredientes do pudim e 
                            despeje na forma reservada.
                        </li>

                        <li>
                            Cubra com papel-alumínio e leve ao forno médio (180°C), 
                            em banho-maria, por cerca de 1 hora e 30 minutos.
                        </li>

                        <li>
                            Depois de frio, leve para gelar por cerca de 6 horas. Desenforme e sirva a seguir.
                        </li>
                    </ol>

                    <h3>
                        Cobertura
                    </h3>

                    <ol>
                        <li>
                            Em uma panela de fundo largo, derreta o açúcar até ficar dourado
                        </li>

                        <li>
                            Junte meia xícara (chá) de água quente e mexa com uma colher.
                        </li>

                        <li>
                        Deixe ferver até dissolver os torrões de açúcar e a calda engrossar.
                        </li>

                        <li>
                        Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve.
                        </li>
                    </ol>

            </Recipe>
        </div>
    )
}