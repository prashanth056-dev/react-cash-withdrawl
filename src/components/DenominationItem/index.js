import './index.css'

const DenominationItem = props => {
  const {obj, func} = props
  const {value} = obj
  const denomination = () => {
    func(value)
  }
  return (
    <li className="btnElem">
      <button className="btn" onClick={denomination} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
