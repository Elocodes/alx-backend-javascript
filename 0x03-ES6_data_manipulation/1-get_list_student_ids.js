// function returns an array of objects
export default function getListStudentIds(form) {
  if (Array.isArray(form)) {
    return form.map((obj) => obj.id);
  }
  return [];
}
