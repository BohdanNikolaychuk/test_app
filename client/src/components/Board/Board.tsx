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
} from '@chakra-ui/react'
import { useState } from 'react'
import { FetchDeleteBoard, FetchPostTask } from '../../store/asyncAction'
import { useAppDispatch } from '../../store/hooks'
import { IBoards, ITasks } from '../../store/types'
import { Task } from '../Task/Task'

export const Board = ({ _id, name, createdAt, updatedAt, tasks }: IBoards) => {
	const dispatch = useAppDispatch()
	const [input, SetInput] = useState('')
	const { isOpen, onOpen, onClose } = useDisclosure()

	const createTask = (_id: string) => {
		const newTask = {
			id: _id,
			name: input,
		}

		dispatch(FetchPostTask(newTask))
		onClose()
	}

	const deleteBoard = () => {
		dispatch(FetchDeleteBoard(_id))
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
