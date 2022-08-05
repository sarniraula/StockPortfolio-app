import React from 'react'
import styled from 'styled-components'

const SummaryContainer = styled.div`
    color: white;
    margin: auto;
    width: 40%;
    background-color: #111317;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;   
    padding: 1em;
`

const Card = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Title = styled.span`
    font-size: 1em;
    color: #B0B0B0;
`

const Amt = styled.span`
    font-size: 2em;
`

function Summary() {
  return (
    <SummaryContainer>
        <Card>
            <Title>Net Worth</Title>
            <Amt>11,96,361</Amt>
        </Card>
            
        <Card>
            <Title>Investment</Title>
            <Amt>10,105</Amt>
        </Card>

        <Card>
            <Title>Overall Gain</Title>
            <Amt>5,002</Amt>
        </Card>

        <Card>
            <Title>Days Gain</Title>
            <Amt>70,05,542</Amt>
        </Card>
    </SummaryContainer>
  )
}

export default Summary