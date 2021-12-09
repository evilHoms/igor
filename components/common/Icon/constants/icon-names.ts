import { faArrowUp, faArrowDown, faDotCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface IIconNames {
	[key: string]: IconDefinition
}

const IconNames: IIconNames = {
	ArrowDown: faArrowDown,
	ArrowUp: faArrowUp,
	Dot: faDotCircle,
}

export default IconNames;
