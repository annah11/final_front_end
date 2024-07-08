import Link from 'next/link';
import Image from 'next/image';
export default function Logo() {
  return (
    <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
      <Image src='' className='h-8' alt='Logo' />
      <span className='self-center text-2xl font-bold whitespace-nowrap dark:text-gray-800'>
        Perago
      </span>
    </Link>
  );
}
