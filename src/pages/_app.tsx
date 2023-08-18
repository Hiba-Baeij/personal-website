import { AppProps } from 'next/app';
import { BrowserRouter } from "react-router-dom"
import '@/src/style/globals.css';
import '@/src/style/about.css';

import Layout from '../components/layout/Layout';


// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately


/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */


function MyApp({ Component, pageProps }: AppProps) {
    return (

        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}

export default MyApp;