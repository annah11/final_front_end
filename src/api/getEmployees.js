export default async function getEmployees() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}
