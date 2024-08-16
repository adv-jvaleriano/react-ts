import { FC, ReactNode, useContext } from 'react'
import Section from '../../commons/Section/Section';
import Heading from '../../commons/Heading/Heading';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeContextValues } from '../../types/theme';

const ContextPage: FC = (): ReactNode => {

  const { currentTheme, toggleTheme }: ThemeContextValues = useContext<ThemeContextValues>(ThemeContext);
  
  return (
    <div>
      <header>
        <h1>CONTEXT PAGE</h1>
        <button 
          id='theme-btn' 
          onClick={toggleTheme}
        >
          {currentTheme == "dark" ? "🌞": "🌚"}
        </button>
      </header>
      <Section>
        <Heading>Título</Heading>
        <Section>
          <Heading>Encabezado</Heading>
          <Heading>Encabezado</Heading>
          <Heading>Encabezado</Heading>
          <Section>
            <Heading>Sub-encabezado</Heading>
            <Heading>Sub-encabezado</Heading>
            <Heading>Sub-encabezado</Heading>
            <Section>
              <Heading>Sub-sub-encabezado</Heading>
              <Heading>Sub-sub-encabezado</Heading>
              <Heading>Sub-sub-encabezado</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  )
}

export default ContextPage;
