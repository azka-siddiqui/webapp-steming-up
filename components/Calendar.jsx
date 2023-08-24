import calendar from "../data/timeline.json"
import { 
  Heading, 
  Box, 
  Table,
  Thead,
  Tbody,
  Tr,
  Td
} from '@chakra-ui/react'
import React from "react"

export const WorkshopTimeline = () => {
  
    return (
      <Box className="main" width="80%" mx={"auto"}>
            <Heading mb={10} mt={10} color="#c9ac2c">
              Workshop Calendar
            </Heading>
            <Table bg="#444261" color="white">
                <Thead>
                    <Tr>
                        <Td>Date</Td>
                        <Td>Title</Td>
                        <Td>Time</Td>
                    </Tr>
                </Thead>
                <Tbody>
                        {calendar &&
                            calendar.map((item) =>(
                                <Tr>
                                    <Td>{item.date}</Td>
                                    <Td>{item.title}</Td>
                                    <Td>{item.time}</Td>
                                </Tr>
                            ))}
                </Tbody>
            </Table>
            
        </Box>
    );
  }
  