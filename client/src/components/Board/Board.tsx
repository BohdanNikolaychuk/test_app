import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Task } from '../Task/Task'
export const Board = () => {
	return (
		<Box m={6} rounded={6} p={4} w='100%' maxW='350px' bg='#ddd'>
			<Flex pt='2' mb='6' justifyContent='space-between' alignItems='center'>
				<Text>To do ✏️</Text>

				<AddIcon cursor='pointer' boxSize={4} />
			</Flex>

			<Task />
			<Task />
			<Task />
		</Box>
	)
}
