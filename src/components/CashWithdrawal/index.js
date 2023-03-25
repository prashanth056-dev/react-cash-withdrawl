import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  btnClick = value => {
    this.setState(prevState => ({
      balance:
        prevState.balance - value >= 0
          ? prevState.balance - value
          : prevState.balance,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="mainBg">
        <div className="card">
          <div className="profile">
            <p className="profilePic">s</p>
            <p className="profileName">Sarah Williams</p>
          </div>
          <div className="cont">
            <p className="inRupees">Your Balance</p>
            <div>
              <p>{balance}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p className="inRupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="chooseCount">
            {denominationsList.map(eachItem => (
              <DenominationItem
                obj={eachItem}
                key={eachItem.id}
                func={this.btnClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
