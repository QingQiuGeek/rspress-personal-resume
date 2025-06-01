import { Button, Card, ConfigProvider, Flex, Image, Tag } from 'antd';
import './music.css';
const { Meta } = Card;
export function Music() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Card: {
						headerFontSize: '14px',
					},
				},
			}}
		>
			<Card
				title='我听的歌'
				hoverable
				className='music'
			>
				<Image
					preview={false}
					srcSet='/music.jpg'
				/>
			</Card>
		</ConfigProvider>
	);
}
