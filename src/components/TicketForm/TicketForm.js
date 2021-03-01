import React from 'react'
import { Container, Form, Input, Select, Header, Ref, Dropdown, Button} from 'semantic-ui-react'
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
    React.useEffect(() => {
        //register({ name: 'lastName'}, { required: "Это поле обязательно" });
        register({ name: 'firstName'}, { required: "Это поле обязательно" });
        register({ name: 'middleName'});
        //register({ name: "gender" }, { required: "Это поле обязательно" });
        register({ name: "birth" }, { required: "Это поле обязательно" });
        register({ name: "citizenship" }, { required: "Это поле обязательно" });
        register({ name: "document" }, { required: "Это поле обязательно" });
        register({ name: "documentNumber" }, { required: "Это поле обязательно" });
        register({ name: "rate" }, { required: "Это поле обязательно" });
      }, []);
    const {register, handleSubmit, errors, setValue, trigger, control} = useForm({
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
                    <label id="label-dashed">СНИЛС или номер регистрации ЦСМ</label>
                    <input type="text" name="snils_csm" id="snils_csm" ref={register} />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field
                        required
                        id='lastName'
                        error={!!errors?.lastName}>
                        {/* <Form.Input
                            required
                            name="lastName"
                            label="Фамилия"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name)
                            }}
                        /> */}
                        <label>Фамилия</label>
                        <Controller 
                            required
                            rules={{required: "Это поле обязательно"}} 
                            name="lastName"
                            control={control} 
                            defaultValue="" as={Input}/>
                        <span>{errors?.lastName?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id='firstName'
                        error={!!errors?.firstName}>
                        <Form.Input
                            required
                            name="firstName"
                            label="Имя"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name)
                            }}
                        />
                        {/* <label>Имя</label>
                        <Controller rules={{required: "Это поле обязательно"}} control={control} defaultValue="" name='firstName' as={Input}/> */}
                        {errors?.firstName?.message}
                    </Form.Field>
                    <Form.Field
                        id='middleName'>
                        <Form.Input
                            name="middleName"
                            label="Отчество (обязательно, при наличии)"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                            }}
                        />
                        {/* <Controller control={control} defaultValue="" name='middleName' as={Input}/> */}
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        required
                        error={!!errors?.gender}
                        id="gender"
                        >
                        {/* <Form.Select
                            required
                            name="gender"
                            options={genderOptions}
                            label="Выберите пол"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name);
                            }}
                        /> */}
                        <label>Выберите пол</label>
                        <Controller
                            required
                            rules={{required: "Это поле обязательно"}} 
                            name="gender"
                            defaultValue=""
                            control={control}
                            render={({onChange}) => (
                            <Form.Select 
                            name="gender"
                                onChange={async(e, { name, value }) => {
                                    console.log(name, value)
                                    setValue(name, value)
                                }}
                                options={genderOptions}/>
                            )}
                        />
                        {/* <Dropdown 
                            ref={register}
                            name="gender"
                            onChange={(e, { name, value }) => {
                                console.log(value)
                                setValue(name, value)
                            }} 
                            selection
                            options={genderOptions}/> */}
                        <span>{errors?.gender?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id="birth"
                        error={!!errors?.birth}>
                        <Form.Input
                            required
                            name="birth"
                            label="Дата рождения"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name)
                            }}
                        />
                        {errors?.birth?.message}
                        {/* <label>Дата рождения</label>
                        <Input placeholder="__-__-____"/> */}
                    </Form.Field>
                    <Form.Field
                        error={!!errors?.citizenship}
                        id="citizenship">
                        <Form.Select
                            required
                            name="citizenship"
                            options={citizenship}
                            label="Гражданство"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name);
                            }}
                        />
                        <span>{errors?.citizenship?.message}</span>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        error={!!errors?.document}
                        id="document">
                        <Form.Select
                            required
                            name="document"
                            options={typeOfDocument}
                            label="Тип документа"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name);
                            }}
                        />
                        <span>{errors?.document?.message}</span>
                    </Form.Field>
                    <Form.Field
                        id="documentNumber"
                        error={!!errors?.documentNumber}>
                        <Form.Input
                            required
                            type="number"
                            name="documentNumber"
                            label="Номер документа"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name)
                            }}
                        />
                        {errors?.documentNumber?.message}
                        {/* <label>Дата рождения</label>
                        <Input placeholder="__-__-____"/> */}
                    </Form.Field>
                    <Form.Field
                        error={!!errors?.rate}
                        id="rate">
                        <Form.Select
                            required
                            name="rate"
                            options={rateOptions}
                            label="Тариф"
                            onChange={async (e, { name, value }) => {
                                await setValue(name, value);
                                await trigger(name);
                            }}
                        />
                        <span>{errors?.rate?.message}</span>
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
