export default async function getPositions() {
  const response = await fetch('http://127.0.0.1:8000/api/positions');
  return response.json();
}
