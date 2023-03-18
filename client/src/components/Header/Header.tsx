import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const Header = () => {
	const [isAuth, setIsAuth] = useState(false)

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
				<Flex alignItems={'center'}></Flex>
			</Flex>
		</Box>
	)
}
