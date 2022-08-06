import React from 'react'
import styled from 'styled-components'

const Sbar = styled.div`
    color: white;
    display: flex;
    justify-content: flex-end; 
    flex-direction: column;
    margin: 0 2rem;
`
const Heading = styled.h1`
    font-size: 15px;
    margin: auto;
`
const Table = styled.table`
    text-align: center;
`

const TableHighlights = styled.div`
    background: ${ props => props.Gainer ? "linear-gradient(105deg, rgba(232,240,242,1) 0%, rgba(175,224,232,1) 35%, rgba(143,152,242,1) 67%, rgba(120,225,246,1) 100%)" : "linear-gradient(105deg, rgba(233,163,248,1) 0%, rgba(199,78,190,1) 61%, rgba(62,216,247,1) 100%)"};
    color: black;
    text-align: center;
    display: flex;
    justify-content: flex-end; 
    flex-direction: column;
    margin : .5rem;
    padding: 5px;
    border-radius: 10px;
`

const tableData = [
    { sym: "AHPC", ltp: 235, ch: 2.00, chpercentage: 4.00 },
    { sym: "AKPL", ltp: 246, ch: 3.00, chpercentage: 2.10 },
    { sym: "CHDC", ltp: 555, ch: -2.10, chpercentage: 0.40 },
    { sym: "IGI", ltp: 647, ch: 0.00, chpercentage: 1.00 },
    { sym: "GBIME", ltp: 389, ch: 0.00, chpercentage: 0.00 },
    { sym: "GIC", ltp: 875, ch: 2.40, chpercentage: 0.00 },
    { sym: "HDL", ltp: 357, ch: 3.20, chpercentage: 1.00 },
    { sym: "MBL", ltp: 776, ch: -1.10, chpercentage: 2.00 },
]

  const highlightsData = [
    { sym: "AHPC", ltp: 235, ch: 2.00, chpercentage: 4.00 },
    { sym: "AKPL", ltp: 246, ch: 3.00, chpercentage: 2.10 },
    { sym: "CHDC", ltp: 555, ch: -2.10, chpercentage: 0.40 },
    { sym: "IGI", ltp: 647, ch: 0.00, chpercentage: 1.00 },
]

function SidebarRight () {
    return (
        <Sbar>
            <Heading>Live Watchlist</Heading>
            <Table>
                <thead>
                <tr>
                    <th>SYM</th>
                    <th>LTP</th>
                    <th>CH</th>
                    <th>CH%</th>
                </tr>
                </thead>
                <tbody>
                {
                    tableData.map((value, key) => {
                    return (
                        <tr key={key}>
                        <td>{value.sym}</td>
                        <td>{value.ltp}</td>
                        <td>{value.ch}</td>
                        <td>{value.chpercentage}%</td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </Table>
            
            <TableHighlights Gainer>
                <Heading>Top Gainer</Heading>
                <Table>
                    {/* <thead>
                    <tr>
                        <th>SYM</th>
                        <th>LTP</th>
                        <th>CH</th>
                        <th>CH%</th>
                    </tr>
                    </thead> */}
                    <tbody>
                    {
                        highlightsData.map((value, key) => {
                        return (
                            <tr key={key}>
                            <td>{value.sym}</td>
                            <td>{value.ltp}</td>
                            <td>{value.ch}</td>
                            <td>{value.chpercentage}%</td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </Table>
            </TableHighlights>

            <TableHighlights>
                <Heading>Top Loser</Heading>
                <Table>
                    {/* <thead>
                    <tr>
                        <th>SYM</th>
                        <th>LTP</th>
                        <th>CH</th>
                        <th>CH%</th>
                    </tr>
                    </thead> */}
                    <tbody>
                    {
                        highlightsData.map((value, key) => {
                        return (
                            <tr key={key}>
                            <td>{value.sym}</td>
                            <td>{value.ltp}</td>
                            <td>{value.ch}</td>
                            <td>{value.chpercentage}%</td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </Table>
            </TableHighlights>
        </Sbar>
    );
}

export default SidebarRight