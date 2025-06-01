import { Button, Card, Flex, Typography } from 'antd';
export function Project() {
	return (
		<Card
			hoverable
			styles={{ body: { padding: 0, overflow: 'hidden' } }}
		>
			<Flex justify='space-between'>
				<img
					srcSet='/boy1.jpg'
					alt='avatar'
					style={{ display: 'block', width: 180 }}
				/>
				<Flex
					vertical
					align='flex-end'
					justify='space-between'
					style={{ padding: 32 }}
				>
					<Typography.Title level={4}>
						独立原创，docker部署，前端TS、AntDesign、umiMAX，后端SpringBoot
					</Typography.Title>
					<Button
						href='#'
						target='_blank'
					>
						Go to
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
}
