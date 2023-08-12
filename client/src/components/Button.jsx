import PropTypes from 'prop-types'

Button.propTypes = { children: PropTypes.node.isRequired }

export default function Button({ children }) {
  return (
    <div className="py-2 px-4 bg-blue-600 rounded-md text-white">{children}</div>
  )
}
