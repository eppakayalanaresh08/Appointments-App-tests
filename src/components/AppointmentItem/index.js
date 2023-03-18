const AppointmentItem = props => {
  const {listEachObject, onClickEachStar, EachIsFavorite} = props
  const {id, date, title} = listEachObject
  const urlStar = EachIsFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onClickStar = () => {
    onClickEachStar(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" onClick={onClickStar} data-testid="star">
          <img src={urlStar} alt="star" />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
