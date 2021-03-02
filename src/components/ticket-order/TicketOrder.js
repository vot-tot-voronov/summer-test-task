import React from 'react'
import { Grid } from 'semantic-ui-react'
import { MessageBox } from '../messageBox/MessageBox'
import { FormField } from '../form-field/FormField'
import { useData } from '../data-context/DataContext'

export const TicketOrder = () => {
    const {data} = useData()
    return (
        <Grid padded>
            <Grid.Column floated="left" width={10}>
                <FormField />
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
                <MessageBox obj={data}/>
            </Grid.Column>
        </Grid>
    )
}
