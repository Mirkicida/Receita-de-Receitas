import Head from 'next/head'; // importando a parte do 'head' do HTML
import Link from 'next/link';

export default function Header(props){ /* 'props' recebe uma informacao e a utiliza  dentro do trecho com {} */
    return(
        <div>
        <header className="header">

        <Head>

            <title> {props.title} </title>
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

        </Head>


        <Link href="/">
            <a>
                <img alt="Logo do site" src="/img/logo.svg" height="50" width="300"/>
            </a>
        </Link>
    </header>
        </div>
    )
}