import React from "react";

import classes from './PropsTable.module.css'
import cn from 'classnames'

const PropsTable = () => {

    const items = [
        {
            name: 'name',
            type: 'boolean',
            desc: 'When the button label is hidden'
        },
        {
            name: 'text',
            type: 'string',
            desc: 'Icon must be present if the label is not defined.'
        },
        {
            name: 'description',
            type: 'custom',
            desc: 'Buttons have a minimum width of 2.25× the height of the button'
        },
        {
            name: 'heading',
            type: 'number',
            desc: 'A button can be navigated using a keyboard. '
        }
    ]

    const getType = (type: string) => {
        if (type === 'custom') {
            return 'HeadingProps';
        } else {
            return type;
        }
    }

    return (
        <div className={classes.table}>
            {items.map((item, index) => (
                <div key={index} className={classes.items}>
                    <div className={classes.item}>
                        <div className={classes.name}>{item.name} <span className={cn(classes.tag, classes[item.type])}>{getType(item.type)}</span></div>
                        <div className={classes.desc}>{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {PropsTable}