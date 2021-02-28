import React from 'react'
import { Container, Form, Input, Select, Header, Button} from 'semantic-ui-react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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

const schema = yup.object().shape({
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Это поле не должно содержать цифры")
        .required("Это поле обязательно"),
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Это поле не должно содержать цифры")
        .required("Это поле обязательно"),
    middleName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Это поле не должно содержать цифры")
})

export const TicketForm = () => {
    const {register, handleSubmit, errors, control} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const submitForm = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <div className="left-block">
            <Form onSubmit={handleSubmit(submitForm)}>
                <Header as="h1" color="red">Пассажир №1</Header>
                {/* <Form.Field error={!!errors.name}>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    ref={register({ required: "Recipe name is required." })}
                    />
                </Form.Field> */}
                <Form.Field
                    id="snils_csm" 
                    name="snils_csm" 
                    width={6}>
                    <label id="label-dashed">СНИЛС или номер регистрации ЦСМ</label>
                    <Input type="number" />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field
                        required
                        id='lastName'
                        error={!!errors?.lastName}>
                        <label>Фамилия</label>
                        <Controller control={control} defaultValue="" name='lastName' as={Input}/>
                        <span>{errors?.lastName?.message}</span>
                        
                    </Form.Field>
                    <Form.Field
                        id='firstName'
                        error={!!errors?.firstName}>
                        <label>Имя</label>
                        <Controller control={control} defaultValue="" name='firstName' as={Input}/>
                        {errors?.firstName?.message}
                    </Form.Field>
                    <Form.Field
                        id='middleName'
                        error={!!errors?.middleName}>
                        <label id="label-dashed">Отчество (обязательно, при наличии)</label>
                        <Controller control={control} defaultValue="" name='middleName' as={Input}/>
                        {errors?.middleName?.message}
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
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
                <Form.Field>
                    <Button>Save</Button>
                </Form.Field>
            </Form>
            </div>
            
        </Container>
    )
}
