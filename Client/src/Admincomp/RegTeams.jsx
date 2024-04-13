import React, { useEffect } from 'react'
import useApi from "../Utils/useAxios"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function RegTeams() {
    const { loading, data, error, FetchAllPlayers } = useApi();
    useEffect(() => {
        FetchAllPlayers("api/player/getAllPlayers")
    }, [])

    console.log(data)
    return (
        <div div className='text-white'>
            <h1 className='fw-bold'>Listed Players</h1>
            {loading && <p>Loading...</p>}
            {error && <p className='error'>Error: {error.error}</p>}
            {data && (
                <div>
                    <TableContainer>
                        <Table variant=''>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>profile</Th>
                                    <Th>name</Th>
                                    <Th>Phone</Th>
                                    <Th >role</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data?.players && data?.players.map((player, index) => {
                                        const { firstname, lastname, role, email, phone } = player
                                        return <Tr onClick={() => { alert('hii') }}>
                                            <Td>{index + 1}</Td>
                                            <Td>
                                                <img src={player.profileUrl} alt="" className='w-8 h-8 rounded-full' />
                                            </Td>
                                            <Td>

                                                {firstname}{lastname}

                                            </Td>
                                            <Td>{phone}</Td>
                                            <Td >{role}</Td>
                                        </Tr>
                                    }
                                    )
                                }


                            </Tbody>
                            {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
                        </Table>
                    </TableContainer>
                </div>
            )}

        </div>
    )
}

export default RegTeams