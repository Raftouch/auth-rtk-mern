import PropTypes from 'prop-types'

Form.propTypes = { children: PropTypes.node.isRequired }

export default function Form({ children }) {
  return (
    <div className="flex flex-col gap-5 mt-10 p-10 border items-start">{children}</div>
  )
}
