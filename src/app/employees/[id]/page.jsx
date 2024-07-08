import EmployeeById from './EmployeeById';

export default function Page({ params }) {
  return (
    <div>
      <EmployeeById id={params.id} />
    </div>
  );
}
