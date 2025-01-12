export default function QuarterBlock({ title, children }) {
  return (
    <>
      <div className="h-48 w-[full] rounded-xl border border-black bg-gray-400">
        <div className="flex h-1/6 items-center border-b border-b-black bg-gray-500">
          <h1 className="ml-2 text-sm text-white">{title}</h1>
        </div>
        <div className="flex h-5/6 flex-col items-center gap-1 py-2">{children}</div>
      </div>
    </>
  );
}
