import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}
