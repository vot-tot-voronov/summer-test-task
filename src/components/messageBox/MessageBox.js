import React from 'react'
import { Message } from 'semantic-ui-react'

export const MessageBox = ({obj}) => {
    const passangers = {obj}
    console.log(passangers)
    return (
        <Message>
            <Message.Header>Информация о пассажирах</Message.Header>
            <Message.List>
                {/* {passangers.map((item, index) => {
                    return (
                        <Message.Item>{item.lastName}</Message.Item>
                    )
                })} */}
            </Message.List>
        </Message>
    )
}
