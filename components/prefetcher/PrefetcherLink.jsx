import Link from "next/link";

export default function PrefetchNavItem({ href, children, prepare, className }) {
	return (
		<Link href={href}>
			<a
				className={className}
				onMouseEnter={() => {
					
					prepare;
					console.log("oreparing");
				}}>
				{children}
			</a>
		</Link>
	);
}
