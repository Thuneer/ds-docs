import React from "react";
import {Button, RadioGroup, RadioGroupSize, Select} from "@digdir/design-system-react";
import {CodeSnippet} from "../CodeSnippet/CodeSnippet";
import classes from './ComponentConfigurator.module.css'

const ComponentConfigurator = () => {
    return (
        <div className={classes.component}>
            <div className={classes.container}>
                <div className={classes.preview}>
                    <Button>Primary button</Button>
                </div>
                <div className={classes.controls}>
                    <div className={classes.item}>
                        <RadioGroup items={
                            [
                                { label: 'xSmall', value: 'spiser-ikke-is' },
                                { label: 'Small', value: 'spiser-ikke-is2' },
                            ]
                        } name='test' size={RadioGroupSize.Xsmall} legend='Size' />
                    </div>
                    <div className={classes.item}>
                    <RadioGroup items={
                        [
                            { label: 'Jeg spiser ikke iskrem', value: 'spiser-ikke-is' },
                            { label: 'Jeg spiser ikke iskrem2', value: 'spiser-ikke-is2' },
                            { label: 'Jeg spiser ikke iskrem2', value: 'spiser-ikke-is3' },
                        ]
                    } name='test' size={RadioGroupSize.Xsmall} legend='Size' value='spiser-ikke-is' />
                    </div>
                        <div className={classes.item}>
                    <Select label='Size' options={
                        [
                        {label: 'ff', value: 'fff'},
                        {label: 'ff', value: 'ffff'},
                        ]} />
                        </div>
                </div>
            </div>




            <div>
                {/* eslint-disable-next-line react/no-children-prop */}
                <CodeSnippet children='
<SecondaryButton loader={false} onClick={simulateLoading} className="jkl-spacing-l--right">Lagre</SecondaryButton>
    ' language='javascript'></CodeSnippet>
            </div>
        </div>
    )
}

export {ComponentConfigurator}