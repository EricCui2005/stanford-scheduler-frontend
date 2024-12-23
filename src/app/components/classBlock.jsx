export default function ClassBlock({ code, title }) {
  return (
    <>
      <div className="flex w-[95%] items-center rounded-md border border-black bg-gray-600 px-1 text-sm text-white">
        <p>
          {code}: {title}
        </p>
      </div>
    </>
  );
}
