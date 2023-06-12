import Button from '../components/Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = args => <Button {...args}/>

export const Redish = Template.bind({});
Redish.args = {
	label: 'Red-ish default',
	backgroundColor: '#ff9a9a'
};

export const RedishSmall = Template.bind({});
RedishSmall.args = {
	label: 'Red-ish small',
	backgroundColor: '#ff9a9a',
	size: 'sm',
}

export const RedishLarge = Template.bind({});
RedishLarge.args = {
	label: 'Red-ish large',
	backgroundColor: '#ff9a9a',
	size: 'lg',
}

export const RedishBigLabel = Template.bind({});
RedishBigLabel.args = {
	label: 'Red-ish big label, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio sit amet purus luctus iaculis a vel ipsum. Etiam sapien lectus, gravida id odio quis, porta euismod mi. Aliquam egestas diam leo, in pellentesque ante bibendum eu. Phasellus volutpat fermentum ligula, ac sagittis augue vestibulum ut. Pellentesque tristique tempus dolor nec eleifend. Nunc nec vulputate massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non sem eu dolor luctus facilisis vel quis ipsum.',
	backgroundColor: '#ff9a9a',
	size: 'lg',
}

export const Blueish = Template.bind({});
Blueish.args = {
	label: 'Blue-ish default',
	backgroundColor: '#6c6cf3',
	size: 'sm',
}
