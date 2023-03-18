import {Component} from 'react'

// import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {listsAppointments: [], title: '', date: '', isFavorite: false}

  onClickSubmitAdd = event => {
    const {title, date} = this.state
    event.preventDefault()
    const objectAdd = {
      id: uuidv4(),
      title,
      date,
    }
    this.setState(prevState => ({
      listsAppointments: [...prevState.listsAppointments, objectAdd],
    }))
  }

  onClickTitle = event => {
    this.setState({title: event.target.value})
  }

  onClickTitle = event => {
    this.setState({date: event.target.value})
  }

  onClickEachStar = () => {
    this.setState(prevState => ({isFavorite: !prevState.isFavorite}))
  }

  render() {
    const {listsAppointments, title, date, isFavorite} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card-add-container">
            <form
              className="card-form-container"
              onSubmit={this.onClickSubmitAdd}
            >
              <h1>Add Appointment</h1>
              <div className="container-date">
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  onChange={this.onClickTitle}
                  value={title}
                />
                <label htmlFor="date">DATE</label>
                <input type="date" onChange={this.onClickDate} value={date} />
              </div>
              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="horizontal-line" />
          <h1>Appointments</h1>
          {listsAppointments.map(eachObject => (
            <AppointmentItem
              listEachObject={eachObject}
              EachIsFavorite={isFavorite}
              onClickEachStar={this.onClickEachStar}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Appointments
