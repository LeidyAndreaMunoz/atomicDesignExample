import React from 'react'; 
import { Section } from '../organisms/Section';


export const MainPage =() => {

    return (
        <>
        <Section
        title='Calendario Leidy Muñoz'
        cards={
            [
                {
                    label:'Enviar tarea',
                    variant:'contained', 
                    date:  '29 de Septiembre',
                    day: 'Miércoles', 
                    task: 'Corregir errores',
                    detail: 'Buscar los posibles errores',
                    member: 'Leidy Muñoz'
                },
                {
                    label:'Enviar tarea',
                    variant:'text',
                    date:  '30 de Septiembre',
                    day: 'Jueves', 
                    task: 'Crear templates',
                    detail: 'Generar los posibles templates',
                    member: 'Leidy Muñoz'
                },
                {
                    label:'Enviar tarea',
                    variant:'outlined',
                    date:  '1 de octubre',
                    day: 'Viernes', 
                    task: 'Encontrar librerías',
                    detail: 'Buscar librerías que se adapten',
                    member: 'Leidy Muñoz'
                },
            ]
            } 
        />
        <Section
        title='Calendario Mauricio Ocampo'
        label='Enviar tarea'
        variant='outlined' 
        date=  '29 de Septiembre'
        day= 'Miércoles' 
        task= 'Corregir errores'
        detail= 'Buscar los posibles errores'
        member= 'Mauricio Ocampo'
        /* cards={
            [
                {
                    label:'Enviar tarea',
                    variant:'outlined', 
                    date:  '29 de Septiembre',
                    day: 'Miércoles', 
                    task: 'Corregir errores',
                    detail: 'Buscar los posibles errores',
                    member: 'Mauricio Ocampo'
                },
                {
                    label:'Enviar tarea',
                    variant:'outlined',
                    date:  '30 de Septiembre',
                    day: 'Jueves', 
                    task: 'Crear templates',
                    detail: 'Generar los posibles templates',
                    member: 'Mauricio Ocampo'
                },
                {
                    label:'Enviar tarea',
                    variant:'outlined',
                    date:  '1 de octubre',
                    day: 'Viernes', 
                    task: 'Encontrar librerías',
                    detail: 'Buscar librerías que se adapten',
                    member: 'Mauricio Ocampo'
                },
            ]
            } */ 
        />
        </>
    )
}