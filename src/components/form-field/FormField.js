import React from 'react';
import { Form, Button, Icon} from 'semantic-ui-react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { genderOptions, citizenship, typeOfDocument, rateOptions } from '../utils';
import { HeaderField } from '../header-field/HeaderField';
import { useData } from '../data-context/DataContext';
import Swal from 'sweetalert2';
import './form-field.css';

export const FormField = () => {
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
    const { setValues } = useData()
    const submitForm = async (data) => {
        try {
            const res = await fetch('https://webhook.site/958a6132-d38d-49b0-80d0-b1feba0cd7cf', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (res.status === 200) {
                Swal.fire("Данные успешно отправленны", "Билеты придут Вам на почту", "success");
                setValues(data);
            }
        } catch (error) {
            Swal.fire("Что-то пошло не так", "Попробуйте еще раз", "error");
        }
    };
    const deletePassenger = (index) => {
        if (fields.length !== 1) {
            remove(index);
        }
    };
    return (
        <Form noValidate onSubmit={handleSubmit(submitForm)}>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <HeaderField remove={() => deletePassenger(index)} number={index + 1}/>
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
                <div className="send-btn">
                    <Button type="submit" size="mini" color="green">Отправить</Button>
                </div>
            </Form.Field>
        </Form>
    )
}
