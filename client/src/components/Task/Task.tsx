import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import { FetchDeleteTask } from '../../store/asyncAction/tasks'
import { useAppDispatch } from '../../store/hooks/redux.hook'
import { ITasks } from '../../store/types/types'
import { formateDate } from '../../utils'

export const Task = ({ _id, board, createdAt, name, updatedAt }: ITasks) => {
	const dispatch = useAppDispatch()
	const toast = useToast({
		position: 'top',
	})
	const removeTask = async () => {
		const reTask = {
			_id,
			board,
		}

		await dispatch(FetchDeleteTask(reTask))
			.unwrap()
			.then(() => {
				toast({
					description: 'You deleted your board',
					status: 'success',
					duration: 4000,
					isClosable: true,
				})
			})
			.catch(error => {
				if (error.message) {
					toast({
						description: 'Problem with delete task',
						status: 'error',
						duration: 4000,
						isClosable: true,
					})
				}
			})
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
