export default async function getPositionById(id) {
  console.log(id, 'id');
  const response = await fetch(`http://127.0.0.1:8000/api/positions/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
