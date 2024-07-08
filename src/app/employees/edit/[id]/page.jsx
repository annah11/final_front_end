import EditEmployee from './EditEmployee';

export default function Page({ params }) {
  return (
    <div>
      <EditEmployee id={params.id} />
    </div>
  );
}
