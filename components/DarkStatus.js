import { useSelector } from 'react-redux';

function DarkStatus() {
	const dark = useSelector((state) => state.dark.value);

	let style = {};
	let status = 'on';
	if (dark) {
		style = { 'color': 'white' };
		status = 'off';
	}

	return (
		<div>
			<p style={style}>Light is {status}</p>
		</div>
	);
}

export default DarkStatus;
