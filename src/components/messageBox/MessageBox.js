import React from 'react'
import { Message } from 'semantic-ui-react'

export const MessageBox = React.memo(({obj}) => {
    if (obj.hasOwnProperty("passangers")) {
        const {passangers} = obj;
        return (
            <Message>
                <Message.Header>Информация о пассажирах</Message.Header>
                <Message.List>
                    {passangers.map((item, index) => {
                        return (
                            <Message.Item key={index}>
                                {item.lastName} {item.firstName} ({item.birth})
                            </Message.Item>
                        )
                    })}
                </Message.List>
            </Message>
        )
    } else {
        return (
            <Message>
                <Message.Header>Информация о пассажирах</Message.Header>
            </Message>)
    }
})

