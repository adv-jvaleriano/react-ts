import { FC, ReactNode, useContext } from "react";
import { LevelContext } from '../../contexts/LevelContext'
import { OnlyChildrenRequiredProps } from "../../types/props";

const Heading: FC< OnlyChildrenRequiredProps > = (
  { children }
): ReactNode => {

  const level: number = useContext<number>(LevelContext);

  let finalHeading: ReactNode = null;

  switch (level) {
    case 1:
      finalHeading = <h1>{children}</h1>;
      break;
    case 2:
      finalHeading = <h2>{children}</h2>;
      break;
    case 3:
      finalHeading = <h3>{children}</h3>;
      break;
    case 4:
      finalHeading = <h4>{children}</h4>;
      break;
    case 5:
      finalHeading = <h5>{children}</h5>;
      break;
    case 6:
      finalHeading = <h6>{children}</h6>;
      break;
    default:
      finalHeading = <p>{children}</p>;
  }

  return finalHeading;
}

export default Heading;
