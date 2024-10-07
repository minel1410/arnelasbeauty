export default function Services() {
  return (
    <div className="w-full bg-[#EDF1F1] h-auto md:h-[60vh] flex flex-col md:flex-row">
      <div className="w-full h-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
        <div className="border grid grid-rows-2">
          <div className="border p-4">
            <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
              <img
                src="/microblading.png"
                className="w-32 h-32 p-2 bg-Pink rounded-full"
              />
              <p className="text-xl font-medium">Manicure</p>
              <p className="text-center text-gray-500">
                Our manicure treatments stimulate nail growth and soften dry,
                dull skin.
              </p>
            </div>
          </div>
          <div className="border p-4">
            <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
              <img
                src="/microblading.png"
                className="w-32 h-32 p-2 bg-Pink rounded-full"
              />
              <p className="text-xl font-medium">Manicure</p>
              <p className="text-center text-gray-500">
                Our manicure treatments stimulate nail growth and soften dry,
                dull skin.
              </p>
            </div>
          </div>
          
        </div>
        <div className="border grid grid-rows-2">
          <div className="border p-4">
            <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
              <img
                src="/microblading.png"
                className="w-32 h-32 p-2 bg-Pink rounded-full"
              />
              <p className="text-xl font-medium">Manicure</p>
              <p className="text-center text-gray-500">
                Our manicure treatments stimulate nail growth and soften dry,
                dull skin.
              </p>
            </div>
          </div>
          <div className="border p-4">
            <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
              <img
                src="/microblading.png"
                className="w-32 h-32 p-2 bg-Pink rounded-full"
              />
              <p className="text-xl font-medium">Manicure</p>
              <p className="text-center text-gray-500">
                Our manicure treatments stimulate nail growth and soften dry,
                dull skin.
              </p>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full h-full md:w-1/2 bg-[url('/eyebrows.jfif')] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}
