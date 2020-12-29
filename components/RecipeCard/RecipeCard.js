import Link from 'next/link';

export default function RecipeCard(props){
    return(
        <div>

            <figure className="recipe-card"> 

            <Link href={props.link}>
            <a>
                <img classname="recipe-picture" src={props.imge} width="320" />
            </a>
            </Link>

            <div className="recipe-category">
                {props.category}
            </div>

            <figcaption className="recipe-name">
                {props.name}
            </figcaption>

            </figure>

        </div>
    )
}