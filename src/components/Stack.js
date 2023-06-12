import PropTypes from 'prop-types';

function Stack({children, spacing = 2, direction = 'row', wrap = false}) {
	const style = {
		display: 'flex',
		gap: `${spacing * 0.25}rem`,
		flexWrap: wrap ? 'wrap' : 'nowrap',
		flexDirection: direction
	};
	return (
		<div style={style}>{children.length <= 0 ? 'No content was found' : children}</div>
	);
}

Stack.propTypes = {
	spacing: PropTypes.number,
	direction: PropTypes.oneOf(['row', 'column']),
	wrap: PropTypes.bool,
}

export default Stack;