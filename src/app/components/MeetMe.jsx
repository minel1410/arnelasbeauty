import Image from "next/image";

export default function MeetMe() {
    return (
      <div className="w-full px-4 lg:px-44 flex flex-col md:flex-row gap-24 justify-between py-24">
        <div className="w-full flex flex-col items-start">
          <h1 className="text-5xl poppins-bold">Über mich</h1>
          <div className="w-1/2 h-0.5 bg-Pink my-2"></div>
          <p className="font-allema text-5xl md:text-6xl py-4 pt-12">Hi, ich bin Arnela</p>
          <p className="text-lg text-gray-500 text-justify poppins-medium">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti quisque
            mollis cras fames lorem viverra primis finibus. Hendrerit finibus
            etiam sit sollicitudin varius nam eu blandit. Felis tincidunt fames
            dignissim, maecenas laoreet arcu montes a. Sit blandit finibus
            consectetur elementum penatibus faucibus; facilisi tortor elit.
            Aenean a ultrices nisl, dui pharetra enim. Ullamcorper maecenas nisi
            nascetur mus sodales odio non orci aliquam.
          </p>
          <p className="text-lg text-gray-500 text-justify poppins-medium mt-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti quisque
            mollis cras fames lorem viverra primis finibus. Hendrerit finibus
            etiam sit sollicitudin varius nam eu blandit. Felis tincidunt fames
            dignissim, maecenas laoreet arcu montes a. Sit blandit finibus
            consectetur elementum penatibus faucibus; facilisi tortor elit.
            Aenean a ultrices nisl, dui pharetra enim. Ullamcorper maecenas nisi
            nascetur mus sodales odio non orci aliquam.
          </p>
          <p className="text-lg text-gray-500 text-justify poppins-medium mt-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti quisque
            mollis cras fames lorem viverra primis finibus. Hendrerit finibus
            etiam sit sollicitudin varius nam eu blandit. Felis tincidunt fames
            dignissim, maecenas laoreet arcu montes a. Sit blandit finibus
            consectetur elementum penatibus faucibus; facilisi tortor elit.
            Aenean a ultrices nisl, dui pharetra enim. Ullamcorper maecenas nisi
            nascetur mus sodales odio non orci aliquam.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <img
            className="rounded-full"
            /* height="350" width="350" */ src="/aboutme.jpg"
          />
          <div>
            <p className="text-xl poppins-semibold">Arnela Prses</p>
            <p className="text-center text-gray-500 poppins-medium">Gründer</p>
          </div>
          <div className="w-1/3 h-0.5 bg-Pink poppins-medium"></div>
          <p>contact@arnelasbeauty.com</p>
        </div>
      </div>
    );
}