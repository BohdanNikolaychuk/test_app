import {
	Box,
	Button,
	Spinner,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Board } from '../../components'
import { ModalWindow } from '../../components/Modal/Modal'
import { FetchPostBoard } from '../../store/asyncAction'
import { useAppDispatch, useStateSelector } from '../../store/hooks/redux.hook'

export const Dashboard = () => {
	const boards = useStateSelector(state => state.board.boards)
	const status = useStateSelector(state => state.board.status)
	const toast = useToast({
		position: 'top',
	})
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [input, SetInput] = useState('')
	const dispatch = useAppDispatch()

	const loading = () => {
		if (status === 'loading') {
			return (
				<Box display='flex' justifyContent='center'>
					<Spinner />
				</Box>
			)
		} else if (status === 'success' && !boards.length) {
			return (
				<Box display='flex' justifyContent='center' pt='4'>
					<Text fontSize='2xl'>Create your own board</Text>
				</Box>
			)
		}
	}

	const handleCreateBoard = async () => {
		if (!input) {
			toast({
				description: 'Empty field',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		}

		await dispatch(FetchPostBoard(input))
			.unwrap()
			.then(() => {
				toast({
					description: 'You created your board',
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

	const handleSelectInput = (text: string) => {
		SetInput(text)
	}

	return (
		<Box pt='45px' bg='#66A7A7' h='100vh'>
			<Text fontSize='2xl' textAlign='center'>
				YOUR BOARD
			</Text>

			<Button ml={4} onClick={onOpen}>
				Add New Board
			</Button>
			{loading()}
			<Box display='flex' flexWrap='nowrap' overflowX='auto'>
				{boards.map(element => (
					<Board key={element._id} {...element} />
				))}
			</Box>

			<ModalWindow
				name='board'
				isOpen={isOpen}
				onClose={onClose}
				onButtonClick={handleCreateBoard}
				handleInput={handleSelectInput}
			/>
		</Box>
	)
}
