import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import ItemCard from '../components/knight-item-page/item-card'
import KnightItem from '../components/knight-item-page/knight-item'

const KnightItemPage = () => {
  return (
    <>
    <PageHeader title="Knight Online Itemler "/>
    <Spacer /> 
    <KnightItem />
    <Spacer />
    
    </>
  )
}

export default KnightItemPage