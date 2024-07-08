import Link from 'next/link';

export default function Position({ data }) {
  return (
    <div>
      <section className='mb-2 border p-4 rounded-lg lg:max-w-sm max-w-md bg-neutral-50'>
        <Link href={`/positions/${data.id}`}>
          <div className='mx-auto'>
            <div className='card md:flex max-w-lg'>
              <div className='w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0'>
                <img
                  className='object-cover rounded-full'
                  src='https://tailwindflex.com/public/images/user.png'
                />
              </div>
              <div className='flex-grow text-center md:text-left'>
                <p className='font-bold'>{data.name}</p>
                <h3 className='text-sm heading'>Parent: {data.parent_name}</h3>
                <p className='mt-2 mb-3'>
                  John is a Senior Developer, mainly works in backend
                  technologies.
                </p>
                <div>
                  <button className='rounded-lg bg-gray-200 p-2 px-5 mx-2 text-gray-700 font-semibold hover:scale-105 hover:bg-gray-300 transition-all  duration-300'>
                    Edit
                  </button>
                  <button className='rounded-lg bg-red-600 p-2 px-5 mx-2 text-gray-50 font-semibold hover:scale-105 hover:bg-red-700 transition-all duration-300'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
