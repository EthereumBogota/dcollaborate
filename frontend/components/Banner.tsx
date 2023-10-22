import CenteredContainer from "./CenteredContainer";

const Banner = () => {
  return (
    <>
      <CenteredContainer className="relative flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">

          <div className="max-w-2xl mb-8">
            
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Your reputation now counts to take loans on WEB3
            </h1>

            <div className="mt-6 sm:space-x-4 sm:flex-row">
              <a
                href=""
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                DAO Partners
              </a>

              <a
                href=""
                className="px-8 py-4 text-lg text-center text-white bg-indigo-600 rounded-md ">
                TOP Contributors
              </a>

            </div>
          </div>
        </div>

      </CenteredContainer>
    </>
  );
}



export default Banner;
