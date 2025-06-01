// ---
// sidebar: false
// outline: false
// ---

// 上面两行的作用是页面缩小时不显示左侧边栏和右大纲栏

import {
	Button,
	Card,
	Carousel,
	Col,
	Flex,
	FloatButton,
	Row,
	Space,
	Tag,
	Typography,
} from 'antd';
import './index.css';
import { Project } from '../components/project';
import { Music } from '../components/music';
import { Interested } from '../components/interested';
import { Carousels } from '../components/carousels';
import { Character } from '../components/character';

export default () => {
	return (
		<>
			<Row
				gutter={[16, 24]}
				wrap
			>
				<Col
					xs={2}
					sm={4}
					md={6}
					lg={8}
					xl={10}
				>
					<Interested />
				</Col>

				<Col
					xs={20}
					sm={16}
					md={12}
					lg={8}
					xl={4}
				>
					<Music />
				</Col>
			</Row>

			<Project />

			<Typography.Title level={4}>背景图、音乐、文案</Typography.Title>

			<Character />
		</>
	);
};
