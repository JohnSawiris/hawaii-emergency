document.addEventListener('DOMContentLoaded', function() {
  const drillButton = this.querySelector('.drill'),
    fullAlertButton = this.querySelector('.full-alert'),
    alertBoxContainer = this.querySelector('.alert-box-container'),
    alertBoxHeader = this.querySelector('.alert-box-header'),
    closeButton = this.querySelector('.close-btn')
  console.log(drillButton, fullAlertButton, alertBoxContainer, closeButton)

  drillButton.addEventListener('click', () => {
    alertBoxHeader.classList.add('drill')
    alertBoxContainer.classList.add('show')
  })

  fullAlertButton.addEventListener('click', () => {
    alertBoxHeader.classList.add('full-alert')
    alertBoxContainer.classList.add('show')
  })

  closeButton.addEventListener('click', () => {
    alertBoxContainer.classList.remove('show')
    setTimeout(() => {
      alertBoxHeader.classList.remove('full-alert', 'drill')
    }, 500)
  })
})
