import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FetchDeleteTask } from '../../store/asyncAction/tasks'
import { useAppDispatch } from '../../store/hooks'
import { ITasks } from '../../store/types'
import { formateDate } from '../../utils'

export const Task = ({ _id, board, createdAt, name, updatedAt }: ITasks) => {
	const dispatch = useAppDispatch()
	const removeTask = () => {
		const reTask = {
			_id,
		}

		dispatch(FetchDeleteTask(reTask))
	}
	return (
		<Box p={2} mb={2} rounded='6' w='100%' bg='#f4f5f7'>
			<Flex justifyContent='space-between' alignItems='center'>
				<Text>{name}</Text>
				<DeleteIcon onClick={() => removeTask()} cursor='pointer' />
			</Flex>
			<Text fontSize='xs'>{formateDate(createdAt)}</Text>
		</Box>
	)
}
