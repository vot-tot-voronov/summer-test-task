import React, {useState} from 'react'
import { Grid, Form, Header, Button, Icon} from 'semantic-ui-react'
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { genderOptions, citizenship, typeOfDocument, rateOptions } from '../utils'
import { HeaderField } from '../header-field/HeaderField'
import { MessageBox } from '../messageBox/MessageBox'
import styled from "@emotion/styled"
import './ticketForm.css'

export const TicketForm = () => {
    const {handleSubmit, errors, setValue, trigger, control} = useForm({
        mode: 'onBlur',
        defaultValues: {
            passangers: [{
                snils_csm: "", lastName: "", firstName: "", middleName: "",
                gender: "", birth: "", citizenship: "",
                document: "", documentNumber: "", rate: ""
            }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "passangers",
        control
    });
    const [state, setState] = useState({})
    const submitForm = (data) => {
        setState(data);
        console.log(data);
    }
    return (
        <Grid padded>
            <Grid.Column floated="left" width={10}>
                <Form noValidate onSubmit={handleSubmit(submitForm)}>
                    {fields.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <HeaderField number={index + 1}/>
                                <Form.Field
                                    id={`passangers[${index}].snils_csm`}
                                    width={6}>
                                    <Controller
                                        name={`passangers[${index}].snils_csm`}
                                        control={control}
                                        defaultValue=""
                                        render={() => {
                                            return <Form.Input 
                                                label="СНИЛС или номер регистрации ЦСМ"
                                                name={`passangers[${index}].snils_csm`}
                                                type="number"
                                                onChange={(e, {name, value}) => setValue(name, value)}
                                            />
                                        }}
                                    />
                                </Form.Field>
                                <Form.Group widths="equal">
                                    <Form.Field
                                        id={`passangers[${index}].lastName`}
                                        error={!!errors?.passangers?.[index]?.lastName}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}}
                                            name={`passangers[${index}].lastName`}
                                            control={control} 
                                            defaultValue="" 
                                            render={() => {
                                                return <Form.Input 
                                                    required
                                                    name={`passangers[${index}].lastName`}
                                                    label="Фамилия"
                                                    type="text"
                                                    onChange={(e, {name, value}) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                />
                                            }}
                                        />
                                        <span>{errors?.passangers?.[index]?.lastName?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        id={`passangers[${index}].firstName`}
                                        error={!!errors?.passangers?.[index]?.firstName}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}} 
                                            name={`passangers[${index}].firstName`}
                                            control={control} 
                                            defaultValue="" 
                                            render={() => {
                                                return <Form.Input 
                                                    required
                                                    name={`passangers[${index}].firstName`}
                                                    label="Имя"
                                                    type="text"
                                                    onChange={(e, {name, value}) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                />
                                            }}
                                        />
                                        <span>{errors?.passangers?.[index]?.firstName?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        id={`passangers[${index}].middleName`}>
                                        <Controller
                                            name={`passangers[${index}].middleName`}
                                            control={control} 
                                            defaultValue="" 
                                            render={() => {
                                                return <Form.Input
                                                    name={`passangers[${index}].middleName`}
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
                                        error={!!errors?.passangers?.[index]?.gender}
                                        id={`passangers[${index}].gender`}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}}
                                            defaultValue=""
                                            name={`passangers[${index}].gender`}
                                            control={control}
                                            render={() => (
                                                <Form.Select 
                                                    required
                                                    name={`passangers[${index}].gender`}
                                                    label="Пол"
                                                    onChange={(e, { name, value }) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                    options={genderOptions}
                                                />
                                            )}
                                        />
                                        <span>{errors?.passangers?.[index]?.gender?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        id={`passangers[${index}].birth`}
                                        error={!!errors?.passangers?.[index]?.birth}>
                                        <Controller 
                                            name={`passangers[${index}].birth`}
                                            defaultValue=""
                                            control={control}
                                            rules={{required: "Это поле обязательно"}}
                                            render={() => {
                                                return <Form.Input 
                                                    required
                                                    type="text"
                                                    name={`passangers[${index}].birth`}
                                                    label="Дата рождения"
                                                    placeholder="__-__-____"
                                                    onChange={(e, {name, value}) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                />
                                            }}
                                        />
                                        <span>{errors?.passangers?.[index]?.birth?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        error={!!errors?.passangers?.[index]?.citizenship}
                                        id={`passangers[${index}].citizenship`}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}}
                                            defaultValue=""
                                            name={`passangers[${index}].citizenship`}
                                            control={control}
                                            render={() => (
                                                <Form.Select 
                                                    required
                                                    name={`passangers[${index}].citizenship`}
                                                    label="Гражданство"
                                                    onChange={(e, { name, value }) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                    options={citizenship}
                                                />
                                            )}
                                        />
                                        <span>{errors?.passangers?.[index]?.citizenship?.message}</span>
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        error={!!errors?.passangers?.[index]?.document}
                                        id={`passangers[${index}].document`}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}}
                                            defaultValue=""
                                            name={`passangers[${index}].document`}
                                            control={control}
                                            render={() => (
                                                <Form.Select 
                                                    required
                                                    name={`passangers[${index}].document`}
                                                    label="Тип документа"
                                                    onChange={(e, { name, value }) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                    options={typeOfDocument}
                                                />
                                            )}
                                        />
                                        <span>{errors?.passangers?.[index]?.document?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        id={`passangers[${index}].documentNumber`}
                                        error={!!errors?.passangers?.[index]?.documentNumber}>
                                        <Controller 
                                            name={`passangers[${index}].documentNumber`}
                                            defaultValue=""
                                            control={control}
                                            rules={{required: "Это поле обязательно"}}
                                            render={() => {
                                                return <Form.Input 
                                                    required
                                                    type="number"
                                                    name={`passangers[${index}].documentNumber`}
                                                    label="Номер документа"
                                                    onChange={(e, {name, value}) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                />
                                            }}
                                        />
                                        <span>{errors?.passangers?.[index]?.documentNumber?.message}</span>
                                    </Form.Field>
                                    <Form.Field
                                        error={!!errors?.passangers?.[index]?.rate}
                                        id={`passangers[${index}].rate`}>
                                        <Controller
                                            rules={{required: "Это поле обязательно"}}
                                            defaultValue=""
                                            name={`passangers[${index}].rate`}
                                            control={control}
                                            render={() => (
                                                <Form.Select 
                                                    required
                                                    name={`passangers[${index}].rate`}
                                                    label="Тариф"
                                                    onChange={(e, { name, value }) => {
                                                        setValue(name, value)
                                                        trigger(name)
                                                    }}
                                                    options={rateOptions}
                                                />
                                            )}
                                        />
                                        <span>{errors?.passangers?.[index]?.rate?.message}</span>
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field>
                                    <Button type="button" size="mini" color="blue" 
                                        icon labelPosition='left'
                                        onClick={() => append({
                                            snils_csm: "", lastName: "", firstName: "", middleName: "",
                                            gender: "", birth: "", citizenship: "",
                                            document: "", documentNumber: "", rate: ""
                                        })}
                                        >
                                        <Icon name='plus'/>
                                        Добавить пассажира
                                    </Button>
                                </Form.Field>
                            </div>
                        )
                    })}
                    <Form.Field>
                        <Button type="submit" size="mini" color="green">Отправить</Button>
                    </Form.Field>
                </Form>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
                <MessageBox obj={state}/>
            </Grid.Column>
        </Grid>
    )
}
