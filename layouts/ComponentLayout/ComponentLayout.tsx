import Header from '../../components/Header/Header';
import React from "react";
import Section from "../../components/Section/Section";
import {Col, Container, Row} from "react-bootstrap";
import NavigationCard from "../../components/NavigationCard/NavigationCard";
import Banner from "../../components/Banner/Banner";
import {TableOfContents} from "../../components/TableOfContents/TableOfContents";
import {SidebarMenu} from "../../components/SidebarMenu/SidebarMenu";

import classes from './ComponentLayout.module.css'

interface ComponentLayoutProps {
    Content: React.ReactNode;
    data: any;
}

interface ComponentLayoutData {
    title: string;
    description: string;
    navigationCards: {
        title: string;
        items: any[]
    };
}

const ComponentLayout = ({ Content, data }: ComponentLayoutProps) => {
    return (
        <div>
            <Header />
            <div className={classes.content}>
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className={classes.menus}>
                                <SidebarMenu title='Komponenter' />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className={classes.markdown}>
                                <h1 className={classes.title}>{data.title}</h1>
                                <p className={classes.desc}>{data.description}</p>
                                {Content}
                            </div>
                        </Col>
                        <Col md={2}>
                            <div>
                                <TableOfContents />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export {ComponentLayout};
export type { ComponentLayoutData };

