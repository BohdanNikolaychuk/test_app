import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ITasks } from '../../store/slices'

export const Task = ({ _id, board, createdAt, name, updatedAt }: ITasks) => {
	return (
		<Box p={2} mb={2} rounded='6' w='100%' bg='#f4f5f7'>
			<Flex justifyContent='space-between' alignItems='center'>
				<Text>{name}</Text>
				<DeleteIcon cursor='pointer' />
			</Flex>
		</Box>
	)
}
