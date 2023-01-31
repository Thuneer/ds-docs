import React, {useEffect, useState} from "react";
import {Button, RadioGroup, RadioGroupSize, Select, ButtonProps, ButtonVariant} from "@digdir/design-system-react";
import {CodeSnippet} from "../CodeSnippet/CodeSnippet";
import classes from './ComponentConfigurator.module.css'
import { renderToString } from 'react-dom/server'

interface ComponentConfiguratorProps {
    component: any;
}

const ComponentConfigurator = ({component}: ComponentConfiguratorProps) => {
    const [controls, setControls] = useState({});
    const config = [
        {
            type: 'radio',
            label: 'Color',
            prop: 'color',
            defaultValue: 'primary',
            items: [
                {
                    label: 'Primary',
                    value: 'primary'
                },
                {
                    label: 'Secondary',
                    value: 'secondary'
                },
                {
                    label: 'Success',
                    value: 'success'
                },
                {
                    label: 'Danger',
                    value: 'danger'
                }
            ]
        },
        {
            type: 'radio',
            label: 'Size',
            prop: 'size',
            defaultValue: 'medium',
            items: [
                {
                    label: 'Small',
                    value: 'small'
                },
                {
                    label: 'Medium',
                    value: 'medium'
                },
                {
                    label: 'Large',
                    value: 'large'
                }
            ]
        }
    ]

    useEffect(() => {
        for (let i = 0; i < config.length; i++) {
            setControls({[config[i].prop]: config[i].defaultValue})
        }
    }, [])

    const onRadioChanged = (prop: any, value: any) => {
       setControls({...controls, [prop]: value})
    }

    return (
        <div className={classes.component}>
            <div className={classes.container}>
                <div className={classes.preview}>
                    {React.cloneElement(component, controls)}
                </div>
                <div className={classes.controls}>
                    {config.map((item, index) => (
                        <div key={index} className={classes.item}>
                            <RadioGroup
                                onChange={(value) => {onRadioChanged(item.prop, value)}}
                                name='test'
                                size={RadioGroupSize.Xsmall}
                                legend={item.label}
                                value={item.defaultValue}
                                items={item.items} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {/* eslint-disable-next-line react/no-children-prop */}
                <CodeSnippet children={renderToString(React.cloneElement(component, controls))} language='javascript'></CodeSnippet>
            </div>
        </div>
    )
}

export {ComponentConfigurator}