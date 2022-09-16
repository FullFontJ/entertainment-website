export function Carrousel() {
  return (
    <>
      <div className="relative mx-6">
        <div className="relative overflow-hidden rounded-lg md:h-96">
          <ImgCarrousel
            imagen="https://i.blogs.es/ad1314/mhbyl4nzgrf6xcxdhsdfbhofwe/840_560.jpeg"
            title="the last of us part ii"
            score="95"
            description="friday's hugaly anticipated ps4"
          />
        </div>

        <div class="absolute z-30 flex bottom-0 right-0 bg-alabaster h-16 w-36 gap-2 rounded-tl-lg justify-center items-center ">
          <ItemIdImgCarrousel/>
          <ItemIdImgCarrousel/>
          <ItemIdImgCarrousel/>
          <ItemIdImgCarrousel/>
        </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-8 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

const ImgCarrousel = ({ imagen, title, score, description }) => {
  return (
    <div className="duration-700 ease-in-out">
      <img
        className=" relative w-full "
        src={imagen}
        alt="..."
      />
      <div>
        <p>{title}</p>
        <p>{score}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

const ItemIdImgCarrousel = () => {
    return(
        <div className=" rounded-full h-6 w-6 flex justify-center items-center bg-sunglow">
            <button 
            type="button"
            class="absolute w-4 h-4 rounded-full border-2 border-mineShaft"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
        </div>
    );
}