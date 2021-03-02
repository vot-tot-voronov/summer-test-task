import React from 'react'
import { Grid, Header, Button, Icon } from 'semantic-ui-react'
import './header-field.css'

export const HeaderField = ({number}) => {
    return (
        <div className={`${number === 1 ? '' : 'custom-header'}`}>
            <Grid>
                <Grid.Column floated="left" width={6}>
                    <Header as="h2" color="red">Пассажир №{number}</Header>
                </Grid.Column>
                <Grid.Column floated="right" width={4}>
                    <Button size="mini" color="red" icon labelPosition='left'>
                        <Icon name='minus'/>
                        Удалить пассажира
                    </Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}

