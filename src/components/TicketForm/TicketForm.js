import React from 'react'
import { Container, Form, Input, Select, Header} from 'semantic-ui-react'
import './ticketForm.css'

const genderOptions = [
    { key: 'm', text: 'Мужчина', value: 'male' },
    { key: 'f', text: 'Женщина', value: 'female' }
]
const citizenship = [
    { key: 'r', text: 'Россия', value: 'russia' },
    { key: 'u', text: 'Украина', value: 'ukraine' },
    { key: 'b', text: 'Беларусь', value: 'belarus' }
]
const typeOfDocument = [
    { key: 'p', text: 'Паспорт', value: 'passport' }
]
const rateOptions = [
    { key: 's', text: 'Стандартный', value: 'standart' }
]

export const TicketForm = () => {
    
    return (
        <Container>
            <Form>
                <Header as="h1" color="red">Пассажир №1</Header>
                <Form.Field id="snils_csm" name="snils_csm" width={6}>
                    <label id="label-dashed">СНИЛС или номер регистрации ЦСМ</label>
                    <Input type="number" />
                </Form.Field>
                <Form.Group widths='equal'>
                    {/* <Form.Field required
                        id='last-name'
                        name='last-name'
                        control={Input}
                        label='Фамилия'
                    />
                    <Form.Field required
                        id='first-name'
                        name='first-name'
                        control={Input}
                        label='Имя'
                    />
                    <Form.Field required
                        id='middle-name'
                        name='middle-name'
                        control={Input}
                        label='Отчество (обязательно, при наличии)'
                    /> */}
                    <Form.Field 
                        required
                        id='last-name'
                        name='last-name'>
                        <label>Фамилия</label>
                        <Input type="text" />
                    </Form.Field>
                    <Form.Field 
                        required
                        id='first-name'
                        name='first-name'>
                        <label>Имя</label>
                        <Input type="text" />
                    </Form.Field>
                    <Form.Field 
                        id='middle-name'
                        name='middle-name'>
                        <label id="label-dashed">Отчество (обязательно, при наличии)</label>
                        <Input type="text" />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    {/* <Form.Field name='gender' required
                        control={Select}
                        options={genderOptions}
                        label="Пол"
                    /> */}
                    <Form.Field
                        required
                        id="gender"
                        name="gender">
                        <label>Пол</label>
                        <Select options={genderOptions}/>
                    </Form.Field>
                    <Form.Field
                        required
                        id="birth"
                        name="birth">
                        <label>Дата рождения</label>
                        <Input placeholder="__-__-____"/>
                    </Form.Field>
                    <Form.Field
                        required
                        id="citizenship"
                        name="citizenship">
                        <label>Гражданство</label>
                        <Select options={citizenship}/>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    {/* <Form.Field name='gender' required
                        control={Select}
                        options={genderOptions}
                        label="Пол"
                    /> */}
                    <Form.Field
                        required
                        id="document"
                        name="document">
                        <label>Тип документа</label>
                        <Select options={typeOfDocument}/>
                    </Form.Field>
                    <Form.Field
                        required
                        id="document-number"
                        name="document-number">
                        <label>Номер документа</label>
                        <Input type='number'/>
                    </Form.Field>
                    <Form.Field
                        required
                        id="rate"
                        name="rate">
                        <label>Тариф</label>
                        <Select options={rateOptions}/>
                    </Form.Field>
                </Form.Group>
            </Form>
            <div className="ticket-information">

            </div>
            
            
        </Container>
    )
}
