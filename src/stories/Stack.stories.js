import Stack from '../components/Stack';

export default {
	title: 'Components/Stack',
	component: Stack,
	argTypes: {
		numberOfChildren: {type: 'number'}
	}
}

const defaultNumberOfChildren = 4;
const childStyle = {
	alignItems: 'center',
	backgroundColor: '#ff9a9a',
	display: 'flex',
	height: '50px',
	justifyContent: 'center',
	width: '50px',
}
const Template = ({numberOfChildren, ...args}) => (
	<Stack {...args}>
		{[...Array(numberOfChildren).keys()].map(n => (
			<div style={childStyle}>{n + 1}</div>
		))}
	</Stack>
);

export const StackDefault = Template.bind({});
StackDefault.args = {
	numberOfChildren: defaultNumberOfChildren,
}

export const HorizontalNoSpacing = Template.bind({});
HorizontalNoSpacing.args = {
	numberOfChildren: defaultNumberOfChildren,
	spacing: 0,
}

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
	numberOfChildren: 40,
	wrap: true,
}

export const Empty = Template.bind({});
Empty.args = {
	numberOfChildren: 0,
}

export const Vertical = Template.bind({});
Vertical.args = {
	direction: 'column',
	numberOfChildren: defaultNumberOfChildren,
}
