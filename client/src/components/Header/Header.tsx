import {
	Box,
	Button,
	Flex,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export const Header = () => {
	const [isAuth, setIsAuth] = useState(false)

	const renderMenuListButton = () => {
		if (isAuth) {
			return (
				<>
					<MenuItem>Hello,{'user?.username'}</MenuItem>
					<Button>Logout</Button>
				</>
			)
		} else {
			return (
				<>
					<MenuItem>Login</MenuItem>
					<MenuItem>Register</MenuItem>
				</>
			)
		}
	}

	return (
		<Box
			bg='#016D6D'
			px={4}
			pos='relative'
			h='65px'
			top='0'
			left='0'
			zIndex='100'
		>
			<Flex h={16} alignItems={'center'} justifyContent='space-between'>
				<HStack spacing={8} alignItems={'center'}>
					<Text color='white'>React Trello</Text>
				</HStack>
				<Flex alignItems={'center'}>
					<Menu>
						<MenuButton
							as={Button}
							size={'sm'}
							rounded={'full'}
							variant={'link'}
							cursor={'pointer'}
							_active={{ opacity: '1' }}
							_hover={{ textDecoration: 'none', opacity: '1' }}
						>
							<Button background={'inherit'}>User</Button>
						</MenuButton>
						<MenuList fontSize={17} zIndex={5555}>
							{renderMenuListButton()}
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Box>
	)
}
