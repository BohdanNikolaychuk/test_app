import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const Task: FC = () => {
	return (
		<Box p={2} mb={2} rounded='6' w='100%' bg='#f4f5f7'>
			<Flex justifyContent='space-between' alignItems='center'>
				<Text>Task 1</Text>
				<DeleteIcon cursor='pointer' />
			</Flex>
		</Box>
	)
}
