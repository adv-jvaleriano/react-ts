import { FC, ReactNode, useContext } from 'react'
import { STYLES } from './styles';
import { LevelContext } from "../../contexts/LevelContext";
import { OnlyChildrenRequiredProps } from '../../types/props';
import Heading from '../Heading/Heading';


const Section: FC< OnlyChildrenRequiredProps > = ({
  children
}: OnlyChildrenRequiredProps): ReactNode => {

const level = useContext(LevelContext);

  return (
    <section style={STYLES.CONTAINER}>
      <p>Level: {level}</p>
      <LevelContext.Provider value={ level + 1 }>
        {children}
      </LevelContext.Provider>
      <Heading>Externo</Heading>
    </section>
  )
}

export default Section;
