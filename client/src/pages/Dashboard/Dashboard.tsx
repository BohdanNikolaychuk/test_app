import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Board } from '../../components'

export const Dashboard = () => {
	return (
		<Box pt='45px' bg='#66A7A7' h='100vh'>
			<Text fontSize='2xl' textAlign='center'>
				YOUR BOARD
			</Text>
			<Button>Add New Board</Button>
			<Flex justifyContent='space-between'>
				<Board />
			</Flex>
		</Box>
	)
}
