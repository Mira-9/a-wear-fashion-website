const updateCurrentDate = date => {
    document.getElementById('updateYearDate').textContent = String(date.getFullYear())
}
setInterval(() => updateCurrentDate(new Date()), 1000)