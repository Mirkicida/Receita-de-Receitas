import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Linha 9 --- para utilizar uma variavel em um titulo é necessario seguir o mesmo modelo
// Linha 25 -- para criar um conteudo customizavél dentro de uma pagina, basta usar a propriedade 'children'
export default function Recipe(props){
    return(
        <div>
            <Header title={`Receita de Receitas - ${props.name}`}/> 

            <main>
                <article className="recipe-body">
                    
                    <h1 className="recipe-body-name">
                        {props.name}
                    </h1>

                    <img className="recipe-body-picture" alt="{props.name}" src={props.picture} />

                    <div>
                        <i className="fas fa-stopwatch fa-fw"></i>Preparo: {props.time} <br />
                        <i className="fas fa-utensils fa-fw"></i>Rendimento: {props.servings}
                    </div>

                    {props.children}

                </article>
            </main>

            <Footer />

        </div>
    )
}