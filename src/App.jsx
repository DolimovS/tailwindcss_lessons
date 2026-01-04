




import img from "./assets/img.png"
const App = () => {
  const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Foster',
      email: 'michael@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e7a26d0b67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <div className=" flex flex-col  gap-y-5 bg-gray-950 p-1">
      <h1 className="text-3xl">Tailwind css</h1>
      <button className="bg-indigo-500 rounded-xl   p-2 hover:bg-indigo-800 hover:cursor-pointer">hover</button>

      <div className=" flex  max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={img} alt="" />
        <div>
          <div className="text-xl font-medium text-medium  text-black dark:text-white" >ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">you have a new messaga</p>
        </div>
      </div>


      <div className="flex flex-col gap-2 p-8 bg-indigo-800   rounded-xl sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className=" mx-auto block  border-blue-500 size-24 rounded-full" src={img} alt="" />
        <div className="space-y-0.5">
          <p className="text-lg  font-extrabold text-black">Samandar</p>
          <p className="font-medium text-gray-500">Dolimov Absalim o'g'li</p>
        </div>
      </div>

      {/* <div class="flex flex-col bg-amber-400 gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="" />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div> */}

      <ul role="list" className="bg-blue-700">
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img className="h-10 w-10 rounded-full" src={img} alt="" />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900 dark:text-white">scdvfbgnh</p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">dcsvfvsvf</p>
          </div>
        </li>
      </ul>



        <div className=" bg-gray-900 columns-2 sm:columns-3  gap-4 space-y-4 m-auto max-w-200  p-5 border-red-600 border-2 rounded-2xl 
        sm:gap-8 sm:space-y-8">
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
          <img className="rounded-2xl" src={img} alt="" />
        </div>

        <div className="grid grid-cols-1 m-auto max-w-3xl   text-white font-medium space-y-0.5 text-17px] sm:grid-cols-2 sm:text-[25px] md:grid-cols-3  md:text[30px]">
          <p> 1 Lorem ipsum dolor sit amet.</p>
          <p className="break-after-page">2 nima gap qalaysan menga qarab otir </p>
          <p>3 salom nima gap qalaysan menga qaradvjsjfobsj dvjsjfljslfb </p>
          <p>4 salom nima gap qalaydijvsijdsjdojoj vjxfvjslj </p>
        </div>

        <div>
          <p className=" text-red-900 dark:text-white p-2 box-decoration-clone bg-linear-to-r from-indigo-700 to-pink-600">salom dunyo</p>
          <p className="p-2 text-red-700 box-decoration-slice bg-linear-to-r from-blue-800 to-yellow-300">salom bolalar</p>
        </div>





        <div className="grid grid-cols-3  border-2 border-red-600   gap-1 p-5 max-[700px]:grid-cols-2 max-[450px]:grid-cols-1 ">
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">1</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">2</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">3</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">4</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">5</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">6</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">7</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">8</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">9</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">10</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">11</div>
          <div className=" text-2xl flex justify-center hover:bg-amber-900  items-center h-25 bg-amber-700">12</div>
        </div>

        <span className="inline-grid grid-cols-3 text-2xl text-white gap-4 ">
          <span className=" bg-gray-800 ">01</span>
          <span className="">02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
        <span className="inline-grid">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>


        <div className="table w-full p-2 text-amber-50 bg-gray-900">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell text-left">Song</div>
            <div className="table-cell text-left">Artist</div>
            <div className="table-cell text-left">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row p-4">
            <div className="table-cell"> Lorem ipsum dolor sit.</div>
            <div className="table-cell"> psum dolor sit.</div>
            <div className="table-cell"> 1994-yil</div>
          </div>
          <div className="table-row p-4">
            <div className="table-cell"> Lorem ipsum dolor sit.</div>
            <div className="table-cell"> psum dolor sit.</div>
            <div className="table-cell"> 1994-yil</div>
          </div>
          <div className="table-row  p-4">
            <div className="table-cell"> Lorem ipsum dolor sit.</div>
            <div className="table-cell"> psum dolor sit.</div>
            <div className="table-cell "> 1994-yil</div>
          </div>
        </div>
        </div>

        <a href="" className="text-red-500 flex gap-0.5 items-center hover:text-red-800">
          <img className="size-5" src={img} alt="" />
          <span className="sr-only  md:not-sr-only">Sozlamalar</span>
        </a>

        <article className="max-w-150 bg-blue-900 gap-1 space-x-5 p-5 rounded-2xl" >
          <img className="w-70 h-50 rounded-2xl float-start  "  src={img} alt="" />
          <p className="text-amber-50  font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ad pariatur nihil aliquid magnam ex expedita dolores, soluta esse, optio ipsam laboriosam numquam nam est voluptatem inventore totam commodi mollitia veniam dignissimos. Adipisci voluptatem maiores nulla sequi obcaecati iste blanditiis et. Voluptas cupiditate reprehenderit dolor, dolore incidunt eaque omnis nobis odit eum numquam cumque iste assumenda amet animi ipsa itaque natus sunt vel laborum libero tempora. Ducimus, veniam dolorum cupiditate, animi nihil consequuntur facere reprehenderit architecto quo doloremque delectus a! Deserunt, sunt? Cumque hic sunt cupiditate eos eum nulla corporis eius tempore et ipsam, minus neque recusandae accusamus voluptatem, facere reiciendis expedita veniam. Perspiciatis voluptatum deleniti dolore aperiam repellat eius veritatis quas ullam, voluptatem, ratione neque. Dolor iusto unde et atque illo iste, eaque, natus molestias aliquam esse consequuntur? Nihil assumenda blanditiis magnam rem reiciendis harum, pariatur velit est doloribus in labore eos sunt numquam natus, maiores veritatis. Facere, id.</p>
        </article>
    </div>
  )
}


export default App
