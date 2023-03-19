import {
	AddIcon,
	DeleteIcon,
	TriangleDownIcon,
	TriangleUpIcon,
} from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FetchDeleteBoard, FetchPostTask } from '../../store/asyncAction'
import { useAppDispatch } from '../../store/hooks/redux.hook'
import { BoardAction } from '../../store/slices'
import { IBoards, ITasks } from '../../store/types/types'
import { ModalWindow } from '../Modal/Modal'
import { Task } from '../Task/Task'

export const Board = ({ _id, name, createdAt, updatedAt, tasks }: IBoards) => {
	const dispatch = useAppDispatch()
	const toast = useToast({
		position: 'top',
	})

	const [input, SetInput] = useState('')
	const [sortBy, setSortBy] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const SortBy = () => {
		dispatch(BoardAction.sortingTask({ _id, sortBy }))
		setSortBy(!sortBy)
	}

	const createTask = async (_id: string) => {
		if (!input) {
			toast({
				description: 'Empty field',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		}
		if (input) {
			const newTask = {
				id: _id,
				name: input,
			}

			await dispatch(FetchPostTask(newTask))
				.unwrap()
				.then(res => {
					toast({
						description: 'You created your task',
						status: 'success',
						duration: 4000,
						isClosable: true,
					})
					onClose()
				})
				.catch(error => {
					toast({
						description: 'Problem with create task',
						status: 'error',
						duration: 4000,
						isClosable: true,
					})
				})
		}
	}

	const deleteBoard = async () => {
		await dispatch(FetchDeleteBoard(_id))
			.unwrap()
			.then(res => {
				toast({
					description: 'You deleted your board',
					status: 'success',
					duration: 4000,
					isClosable: true,
				})
			})
			.catch(error => {
				toast({
					description: 'Problem with delete task',
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
			})
	}

	const handleSelectInput = (text: string) => {
		SetInput(text)
	}

	return (
		<>
			<Box
				m={6}
				mb='120px'
				flex='0 0 auto'
				rounded={6}
				p={4}
				w='100%'
				maxW='350px'
				bg='#ddd'
			>
				<Flex pt='2' mb='6' justifyContent='space-between' alignItems='center'>
					<Text>{name}</Text>
					<Button bg='inherit' onClick={() => SortBy()}>
						{sortBy ? <TriangleDownIcon /> : <TriangleUpIcon />}
					</Button>
					<AddIcon onClick={onOpen} cursor='pointer' boxSize={4} />
					<DeleteIcon onClick={() => deleteBoard()} cursor='pointer' />
				</Flex>

				{tasks.map((element: ITasks) => (
					<Task key={element._id} {...element} />
				))}
			</Box>

			<ModalWindow
				name='task'
				isOpen={isOpen}
				onClose={onClose}
				handleInput={handleSelectInput}
				onButtonClick={() => createTask(_id)}
			/>
		</>
	)
}
