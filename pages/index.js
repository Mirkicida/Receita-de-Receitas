
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import RecipeCard from '../components/RecipeCard/RecipeCard'

export default function Index(){
  return(

    <div>

      <Header title="Receita de Receitas" />

      <RecipeCard 
      imge="/img/pudim.png" 
      category="Doces" 
      name="Pudim"
      link="/receitas/doces/pudim"
      />

      <RecipeCard 
      imge="/img/cookie.jpg" 
      category="Doces" 
      name="Cookie"
      link="/receitas/doces/cookie"
      />

      <RecipeCard 
      imge="/img/brigadeirao-gourmet.jpeg" 
      category="Doces" 
      name="Brigadeiro"
      link="/receitas/doces/brigadeirao-gourmet"
      />


      <Footer />

    </div>

  ) // retorna todos os dados dentro de um html
} // quando não existe o que chamar dentrop do codigo é chamado a funcao colocada como default