import PropTypes from 'prop-types';
import { CustomSection } from './Section.styles';
import{Title} from './Section.styles'

export const Section = ({ title, children }) => {
  return (
    <CustomSection >
      <Title>{title}</Title>
      {children}
    </CustomSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};