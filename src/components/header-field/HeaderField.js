import React from 'react'
import { Grid, Header, Button, Icon } from 'semantic-ui-react'
import './header-field.css'

export const HeaderField = ({number, remove}) => {
    return (
        <div className={`${number === 1 ? '' : 'custom-header'} custom-header-mb`}>
            <Grid>
                <Grid.Column floated="left" width={6}>
                    <Header as="h2" color="red">Пассажир №{number}</Header>
                </Grid.Column>
                <Grid.Column floated="right" width={4}>
                    <Button type="button" size="mini" color="red" icon labelPosition='left'
                        onClick={remove}>
                        <Icon name='minus'/>
                        Удалить пассажира
                    </Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}

