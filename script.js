function calculateWorkingDays() {
  const startDateInput = document.getElementById("startDate").value;
  const endDateInput = document.getElementById("endDate").value;

  if (!startDateInput || !endDateInput) {
    document.getElementById("result").textContent = "Por favor, selecciona ambas fechas.";
    return;
  }

  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  if (startDate > endDate) {
    document.getElementById("result").textContent = "La fecha de inicio debe ser antes que la fecha de fin.";
    return;
  }

  let workingDays = 0;

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const day = date.getDay();
    // Días hábiles: Lunes (1) a Viernes (5)
    if (day >= 1 && day <= 5) {
      workingDays++;
    }
  }

  document.getElementById("result").textContent = `Días hábiles: ${workingDays}`;
}
