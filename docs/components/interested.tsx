import { Card, ConfigProvider, Flex, Tag } from 'antd';

export function Interested() {
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
				title='我感兴趣的'
				hoverable
			>
				<Flex
					gap='4px 0'
					wrap
				>
					<Tag color='geekblue'>全栈</Tag>
					<Tag color='magenta'>独立开发</Tag>
					<Tag color='gold'>大数据</Tag>
					<Tag color='cyan'>大健康</Tag>
					<Tag color='red'>AIGC</Tag>
					<Tag color='volcano'>历史</Tag>
					<Tag color='orange'>海外电商</Tag>
					<Tag color='lime'>自媒体</Tag>
					<Tag color='green'>创业</Tag>
					<Tag color='blue'>出海</Tag>
					<Tag color='purple'>以太坊</Tag>
					<Tag color='cyan'>烧菜</Tag>
				</Flex>
			</Card>
		</ConfigProvider>
	);
}
