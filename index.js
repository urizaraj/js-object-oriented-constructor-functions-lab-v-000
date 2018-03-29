function Scooter(year, color, model) {
  [['year', year], ['model', model], ['color', color]].forEach((key, value) => {
    this[key] = value
  })
}