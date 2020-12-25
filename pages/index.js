import Link from 'next/link';

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
      />

      <RecipeCard 
      imge="/img/cookie.jpg" 
      category="Doces" 
      name="Cookie"
      />

      <RecipeCard 
      imge="/img/brigadeirao-gourmet.jpeg" 
      category="Doces" 
      name="Brigadeiro"
      />


      <Footer />

    </div>

  ) // retorna todos os dados dentro de um html
} // quando não existe o que chamar dentrop do codigo é chamado a funcao colocada como default