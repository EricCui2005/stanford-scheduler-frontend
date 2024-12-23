export default function QuarterBlock({ title }) {
  return (
    <>
      <div className="m-[1%] h-[33%] w-[99%] overflow-hidden rounded-xl border border-black bg-gray-400">
        <div className="flex h-1/6 items-center border-b border-b-black bg-gray-500">
          <h1 className="ml-2 text-sm text-white">{title}</h1>
        </div>
        <div className="h-5/6"></div>
      </div>
    </>
  );
}
