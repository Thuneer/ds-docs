import React from "react";

import classes from './SidebarMenu.module.css'

interface SidebarMenuProps {
    title: string;
}

const SidebarMenu = ({title}: SidebarMenuProps) => {
    return (
        <div className={classes.menu}>
            <h3 className={classes.title}>{title}</h3>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <a className={classes.link} href="#">Accordion <span className={classes.tag}>Beta</span></a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#">Button</a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#">Link</a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#">Header <span className={classes.tag}>Beta</span></a>
                </li>
                <li className={classes.item}>
                    <a className={classes.link} href="#">Toolbar</a>
                </li>
            </ul>
        </div>
    )
}

export {SidebarMenu}