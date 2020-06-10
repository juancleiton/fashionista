const sortByItemName = (items) =>
  items.sort((a, b) => a.name.localeCompare(b.name));

export default sortByItemName;
