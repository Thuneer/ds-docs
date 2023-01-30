import 'bootstrap/dist/css/bootstrap.css'
import '../globals.css';
import { Inter } from '@next/font/google'
import Image from 'next/image'

import type { AppProps } from 'next/app';
import {Container} from "react-bootstrap";

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
            <footer>
                <Container>
                    <Image src="/logo-white.png" alt="Logo"/> Felles Designsystem © 2023
                </Container>
            </footer>
        </main>
    );
}

export default MyApp;
