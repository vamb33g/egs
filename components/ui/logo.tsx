import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className='flex items-center'>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-0" data-aos="zoom-y-out"> 
    Barber {}
    <span className="title-gradient">House</span>
</h1>
      </div>
    </Link>
  );
}
