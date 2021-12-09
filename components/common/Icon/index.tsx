import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
	name: IconDefinition,
}

const Icon: FC<IProps> = ({ name }) => (
	<FontAwesomeIcon icon={name} />
)

export default Icon;
