import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Htag, Button, Paragraph, Tag } from '../components'


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='l'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='s'>Маленький</Paragraph>
      <Tag color='ghost'>Red</Tag>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Tag size='m' color='primary'>primary</Tag>
      <Tag size='m' color='grey'>grey</Tag>



    </>
  )
}
