import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;