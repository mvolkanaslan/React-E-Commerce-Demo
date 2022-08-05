import SVG from "react-inlinesvg";

export default function Icon({ name, size = 16, ...props }) {
    // console.log(`${process.env.PUBLIC_URL}/icons/${name}.svg`);
	return (
		<SVG
			
			src={`/icons/${name}.svg`}
			width={size}
			height={size}
			{...props}
		/>
	)
}