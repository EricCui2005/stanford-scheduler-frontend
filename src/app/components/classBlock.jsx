export default function ClassBlock({ completeTitle }) {
  return (
    <>
      <div className="flex w-[95%] items-center rounded-md border border-black bg-gray-600 px-2 text-sm text-white">
        <p>{completeTitle}</p>
      </div>
    </>
  );
}
