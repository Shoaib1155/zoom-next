import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/shoaib-pic.jpeg.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-gray-500 font-medium">
        “Hello, my name is Shoaib Akhtar. I'm currently studing for a Bachelor's degree in Computer Science at Islamia University of bahawalpur. I belong to city Rahim Yar Khan which is in south punjab, Pakistan.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-500 dark:text-sky-400">
        Shoaib Akhtar
      </div>
      <div className="text-blue-500 dark:text-slate-500">
        Computer Science, IUB
      </div>
    </figcaption>
  </div>
</figure>
</div>
      </main>
  )
}
