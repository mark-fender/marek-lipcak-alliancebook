export default function Header() {
  return (
    <header className='sticky top-0 z-10 w-full bg-white shadow-md'>
      <div className='flex flex-col gap-4 p-4 md:flex-row md:items-end md:justify-between'>
        <h1 className='text-3xl font-semibold tracking-tight'>AllianceBook</h1>
      </div>
    </header>
  );
}
