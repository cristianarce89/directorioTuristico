import React from 'react'
import { HeaderOne } from "../components/organims/HeaderOne/HeaderOne"
import { ParagraphPauta } from '../components/atoms/ParagraphPauta/ParagraphPauta'
import { PlansServices } from '../components/molecules/PlansServices/PlansServices'

export const Plans = () => {
    return (
        <>
            <HeaderOne />
            <ParagraphPauta />
            <PlansServices />
        </>
    )
}
