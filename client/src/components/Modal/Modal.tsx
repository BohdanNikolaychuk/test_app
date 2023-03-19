import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { FC } from 'react'
import ReactDOM from 'react-dom'

type Props = {
	isOpen: boolean
	name: 'task' | 'board'
	onClose: () => void
	handleInput: (text: string) => void
	onButtonClick: () => void
}

export const ModalWindow: FC<Props> = ({
	isOpen,
	onClose,
	name,
	handleInput,
	onButtonClick,
}) => {
	const handleSelectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleInput(e.target.value)
	}

	return ReactDOM.createPortal(
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>What is the {name} name?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							onChange={handleSelectInput}
							placeholder={name + ' ' + 'name'}
						/>
					</ModalBody>
					<ModalFooter display='flex' justifyContent='space-around'>
						<Button onClick={() => onButtonClick()}>Create</Button>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>,
		document.getElementById('app-modal') as HTMLElement
	)
}
