import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FetchDeleteBoard, FetchPostTask } from '../../store/asyncAction'
import { useAppDispatch, useStateSelector } from '../../store/hooks'
import { IBoards, ITasks } from '../../store/types'
import { Task } from '../Task/Task'

export const Board = ({ _id, name, createdAt, updatedAt, tasks }: IBoards) => {
	const dispatch = useAppDispatch()
	const toast = useToast({
		position: 'top',
	})
	const status = useStateSelector(state => state.board.status)
	const [input, SetInput] = useState('')
	const { isOpen, onOpen, onClose } = useDisclosure()

	const createTask = async (_id: string) => {
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

	const handleSelectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		SetInput(e.target.value)
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

					<AddIcon onClick={onOpen} cursor='pointer' boxSize={4} />
					<DeleteIcon onClick={() => deleteBoard()} cursor='pointer' />
				</Flex>

				{tasks.map((element: ITasks) => (
					<Task key={element._id} {...element} />
				))}
			</Box>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>What is the task name?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input onChange={handleSelectInput} placeholder='task name' />
					</ModalBody>
					<ModalFooter display='flex' justifyContent='space-around'>
						<Button onClick={() => createTask(_id)}>Create</Button>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
