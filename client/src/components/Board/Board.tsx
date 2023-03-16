import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { IBoards } from '../../store/slices'
import { Task } from '../Task/Task'

export const Board = ({ _id, name, createdAt, updatedAt, tasks }: IBoards) => {
	return (
		<Box m={6} rounded={6} p={4} w='100%' maxW='350px' bg='#ddd'>
			<Flex pt='2' mb='6' justifyContent='space-between' alignItems='center'>
				<Text>{name}</Text>

				<AddIcon cursor='pointer' boxSize={4} />
			</Flex>
			{tasks.map(element => (
				<Task key={element._id} {...element} />
			))}
		</Box>
	)
}
