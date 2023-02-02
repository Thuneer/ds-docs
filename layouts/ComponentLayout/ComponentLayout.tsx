import Header from '../../components/Header/Header';
import React from 'react';
import Section from '../../components/Section/Section';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationCard from '../../components/NavigationCard/NavigationCard';
import Banner from '../../components/Banner/Banner';
import { TableOfContents } from '../../components/TableOfContents/TableOfContents';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';

import classes from './ComponentLayout.module.css';

interface ComponentLayoutProps {
  Content: React.ReactNode;
  data: any;
}

interface ComponentLayoutData {
  title: string;
  description: string;
  navigationCards: {
    title: string;
    items: any[];
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
                <div className={classes.links}>
                  <a
                    className={classes.link}
                    href='https://digdir.github.io/designsystem/?path=/story/introduksjon--page'
                    target='_blank'
                  >
                    <img
                      src='/img/logos/storybook-logo.png'
                      alt='Storybook'
                    />
                    Storybook
                  </a>
                  <a
                    className={classes.link}
                    href='https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6615%3A20148&t=LpnsflBdpz7RnIXx-1'
                    target='_blank'
                  >
                    <img
                      src='/img/logos/figma-logo.png'
                      alt='Figma'
                    />
                    Figma
                  </a>
                  <a
                    className={classes.link}
                    href='https://github.com/digdir/designsystem'
                    target='_blank'
                  >
                    <img
                      src='/img/logos/github-logo.svg'
                      alt='Github'
                    />
                    Github
                  </a>
                  <a
                    className={classes.link}
                    href='https://digdir.github.io/designsystem/?path=/docs/endringslogger-kjernekomponenter--page'
                    target='_blank'
                  >
                    <img
                      src='/img/logos/changelog-logo.png'
                      alt='Endringslogg'
                    />
                    Endringslogg
                  </a>
                </div>
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

export { ComponentLayout };
export type { ComponentLayoutData };
