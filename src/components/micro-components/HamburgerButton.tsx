const HamburgerButton = ({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) => {
  return (
    <>
      <button
        className="relative group"
        onClick={handleOpen}
      >
        <div
          className={`relative flex flex-col overflow-hidden items-center justify-center rounded-full w-12.5 h-12.5 transform transition-all bg-black/15 backdrop-blur-2xl ring-0 ring-black/10 hover:ring-8 ${
            open ? "ring-4" : ""
          } ring-opacity-30 duration-200 shadow-md`}
        >
          <div
            className={`transform transition-all duration-150 overflow-hidden -translate-y-5 ${
              open ? "translate-y-3" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
            <div
              className={`bg-black mb-1.5 h-0.5 w-7 transform transition-all duration-300 origin-left ${
                open ? "translate-y-6" : ""
              }`}
            ></div>
            <div
              className={`bg-black mb-1.5 h-0.5 w-7 rounded transform transition-all duration-300 ${
                open ? "translate-y-6" : ""
              } delay-75`}
            ></div>
            <div
              className={`bg-black h-0.5 w-7 transform transition-all duration-300 origin-left ${
                open ? "translate-y-6" : ""
              } delay-100`}
            ></div>
          </div>
        </div>
      </button>
    </>
  );
};

export default HamburgerButton;
