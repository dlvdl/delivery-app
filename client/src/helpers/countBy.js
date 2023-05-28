const countBy = (items, groupName) => {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.findIndex((c) => c._id == name)
    if (known == -1) {
      counts.push({ ...item, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

export { countBy }
