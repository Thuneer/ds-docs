import classes from './Header.module.css'
import { Container } from "react-bootstrap";
import Link from 'next/link'
import {useRouter} from "next/router";
import { Hamburger, Close } from "@navikt/ds-icons";
import {useState} from "react";
import cn from 'classnames'

const Header = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <header className={classes.header}>
            <Container className={classes.container}>
                <div className={classes.left}>
                    <Link href="/">
                        <img className={classes.logo} src="/logo.svg" alt="Logo"/>
                    </Link>
                </div>
                <div className={classes.right}>
                    <button className={classes.toggle} onClick={() => {setOpen(!open)}}>
                        {open && <Close fontSize={26} color='#1E2B3C' />}
                        {!open && <Hamburger fontSize={26} color='#1E2B3C' />}
                    </button>
                        <ul className={cn(classes.menu, {[classes.active]: open})}>
                            <li className={classes.item}>
                                <Link href="/god-praksis" className={router.pathname == '/god-praksis' ? classes.active : ''}>God praksis</Link>
                            </li>
                            <li className={classes.item}>
                                <Link href="/grunnleggende" className={router.pathname == '/grunnleggende' ? classes.active : ''}>Grunnleggende</Link>
                            </li>
                            <li className={classes.item}>
                                <a href="https://digdir.github.io/designsystem/">Komponenter</a>
                            </li>
                        </ul>
                </div>
            </Container>
        </header>
    )
}

export default Header