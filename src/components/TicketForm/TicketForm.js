import React from 'react'
import { Container, Form, Header, Button} from 'semantic-ui-react'
import { useForm, Controller, useFieldArray } from 'react-hook-form';
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
    const {handleSubmit, errors, setValue, trigger, control} = useForm({
        mode: 'onBlur'
    });

    const { fields, append, remove } = useFieldArray({
        name: "passangers",
        control
    });
    const submitForm = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <div className="left-block">
            <Form noValidate onSubmit={handleSubmit(submitForm)}>
                <Header as="h1" color="red">Пассажир №1</Header>
                <Form.Field
                    id="snils_csm" 
                    name="snils_csm" 
                    width={6}>
                    <Controller
                        name="snils_csm"
                        control={control}
                        defaultValue=""
                        render={() => {
                             return <Form.Input 
                                label="СНИЛС или номер регистрации ЦСМ"
                                name="snils_csm"
                                type="number"
                                onChange={(e, {name, value}) => setValue(name, value)}
                            />
                        }}
                    />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field
                        id='lastName'
                        error={!!errors?.lastName}>
                        <Controller
                            rules={{required: "Это поле обязательно"}} 
                            name="lastName"
                            control={control} 
                            defaultValue="" 
                            render={() => {
                                return <Form.Input 
                                    required
                                    name="lastName"
                                    label="Фамилия"
                                    type="text"
                                    onChange={(e, {name, value}) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                />
                            }}
                        />
                        <span>{errors?.lastName?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id='firstName'
                        error={!!errors?.firstName}>
                        <Controller
                            rules={{required: "Это поле обязательно"}} 
                            name="firstName"
                            control={control} 
                            defaultValue="" 
                            render={() => {
                                return <Form.Input 
                                    required
                                    name="firstName"
                                    label="Имя"
                                    type="text"
                                    onChange={(e, {name, value}) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                />
                            }}
                        />
                        {errors?.firstName?.message}
                    </Form.Field>
                    <Form.Field
                        id='middleName'>
                        <Controller
                            name="middleName"
                            control={control} 
                            defaultValue="" 
                            render={() => {
                                return <Form.Input
                                    name="middleName"
                                    label="Отчество (обязательно при наличии)"
                                    type="text"
                                    onChange={(e, {name, value}) => setValue(name, value)}
                                />
                            }}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        error={!!errors?.gender}
                        id="gender">
                        <Controller
                            rules={{required: "Это поле обязательно"}}
                            defaultValue=""
                            name="gender"
                            control={control}
                            render={() => (
                                <Form.Select 
                                    required
                                    name="gender"
                                    label="Пол"
                                    onChange={(e, { name, value }) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                    options={genderOptions}
                                />
                            )}
                        />
                        <span>{errors?.gender?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id="birth"
                        error={!!errors?.birth}>
                        <Controller 
                            name="birth"
                            defaultValue=""
                            control={control}
                            rules={{required: "Это поле обязательно"}}
                            render={() => {
                                return <Form.Input 
                                    required
                                    type="text"
                                    name="birth"
                                    label="Дата рождения"
                                    placeholder="__-__-____"
                                    onChange={(e, {name, value}) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                />
                            }}
                        />
                        {errors?.birth?.message}
                    </Form.Field>
                    <Form.Field
                        error={!!errors?.citizenship}
                        id="citizenship">
                        <Controller
                            rules={{required: "Это поле обязательно"}}
                            defaultValue=""
                            name="citizenship"
                            control={control}
                            render={() => (
                                <Form.Select 
                                    required
                                    name="citizenship"
                                    label="Гражданство"
                                    onChange={(e, { name, value }) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                    options={citizenship}
                                />
                            )}
                        />
                        <span>{errors?.citizenship?.message}</span>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        error={!!errors?.document}
                        id="document">
                        <Controller
                            rules={{required: "Это поле обязательно"}}
                            defaultValue=""
                            name="document"
                            control={control}
                            render={() => (
                                <Form.Select 
                                    required
                                    name="document"
                                    label="Тип документа"
                                    onChange={(e, { name, value }) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                    options={typeOfDocument}
                                />
                            )}
                        />
                        <span>{errors?.document?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id="documentNumber"
                        error={!!errors?.documentNumber}>
                        <Controller 
                            name="documentNumber"
                            defaultValue=""
                            control={control}
                            rules={{required: "Это поле обязательно"}}
                            render={() => {
                                return <Form.Input 
                                    required
                                    type="number"
                                    name="documentNumber"
                                    label="Номер документа"
                                    onChange={(e, {name, value}) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                />
                            }}
                        />
                        {errors?.documentNumber?.message}
                    </Form.Field>
                    <Form.Field
                        error={!!errors?.rate}
                        id="rate">
                        <Controller
                            rules={{required: "Это поле обязательно"}}
                            defaultValue=""
                            name="rate"
                            control={control}
                            render={() => (
                                <Form.Select 
                                    required
                                    name="rate"
                                    label="Тариф"
                                    onChange={(e, { name, value }) => {
                                        setValue(name, value)
                                        trigger(name)
                                    }}
                                    options={rateOptions}
                                />
                            )}
                        />
                        <span>{errors?.rate?.message}</span>
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <Button type="submit">Отправить</Button>
                </Form.Field>
            </Form>
            </div>
        </Container>
    )
}
