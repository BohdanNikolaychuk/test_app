import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { Board } from '../../components'
import { ModalWindow } from '../../components/Modal/Modal'
import { FetchPostBoard } from '../../store/asyncAction'
import { useAppDispatch, useStateSelector } from '../../store/hooks'
export const Dashboard = () => {
	const boards = useStateSelector(state => state.board.boards)
	const status = useStateSelector(state => state.board.status)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [input, SetInput] = useState('')
	const dispatch = useAppDispatch()

	const EmptyBoardsArray = () => {
		if (!boards.length) {
			return (
				<Box display='flex' justifyContent='center' pt='4'>
					<Text fontSize='2xl'>Create your own board</Text>
				</Box>
			)
		}
	}

	if (status === 'loading') {
		return <>Loading...</>
	}

	const handleCreateBoard = () => {
		dispatch(FetchPostBoard(input))
		onClose()
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
			{EmptyBoardsArray()}
			<Box display='flex' flexWrap='nowrap' overflowX='auto'>
				{boards.map(element => (
					<Board key={element._id} {...element} />
				))}
			</Box>

			<ModalWindow
				isOpen={isOpen}
				onClose={onClose}
				onButtonClick={handleCreateBoard}
				handleInput={handleSelectInput}
			/>
		</Box>
	)
}
