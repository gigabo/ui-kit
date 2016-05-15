import { Link } from 'react-server';

export default (props) => {
	let { onClick, href, clientTransition, bundleData, reuseDom, frameback, reuseFrame, path, target } = props;
	href = href || path || target;

	if (!href) {
		return (
			<button {...props} className="button">
				{props.children}
			</button>
		);
	} else if (!clientTransition) {
		return (
			<a className="button" href={href}>
				{props.children}
			</a>
		);
	} else {
		return (
			<Link
				path={href}
				{...props}
				className="button">{props.children}</Link>
		);
	}
}
