import Recipe from '../../../components/Recipe/Recipe'

export default function Pudim(){
    return(
        <div>
            <Recipe
                name="Brigadeiro"
                picture="/img/brigadeirao-gourmet.jpeg"
                time="3 horas"
                servings="12 porções"
            >

                    <h2>
                        Ingredientes
                    </h2>

                    <ul>
                        <li>
                            4 - Ovos
                        </li>

                        <li>
                            1/2 xícara (chá) - Creme de leite fresco (120 ml)
                        </li>

                        <li>
                            1 xícara (chá) - Leite condensado (300 g)
                        </li>

                        <li>
                            3 xícaras (chá) - Chocolate meio amargo derretido e picado (400 g)
                        </li>

                    </ul>

                    <h2>
                        Modo de Preparo
                    </h2>

                    <ol>

                        <li>
                            Bata os ingredientes no liquidificador por 2 minutos.
                        </li>

                        <li>
                        Despeje em fôrma de cone central (17 cm de diâmetro x 6 cm de altura) 
                        untada com manteiga e polvilhada com açúcar.
                        </li>

                        <li>
                        Cubra com papel-alumínio e leve ao forno médio preaquecido (180 °C), 
                        em banho-maria, por 1 hora.
                        </li>

                        <li>
                        Leve à geladeira por no mínimo 2 horas antes de desenformar e servir, 
                        decorado, se desejar, com granulado ou splits de chocolate.
                        </li>

                    </ol>

            </Recipe>

        </div>
    )
}