import Image from "next/image";
import "./globals.css";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="p-5 lg:p-10 h-screen">
        <div className="bg-primary py-6 px-10 rounded-3xl h-screen lg:h-full flex flex-col lg:flex-row items-center relative">
          {/* Hero kiri */}
          <div className="flex flex-col gap-3 lg:gap-6 w-full lg:w-3/5 h-full">
            <div className="bg-white p-2 lg:p-4 w-fit rounded-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="rounded-full size-10 lg:size-20"
              />
            </div>
            <p className="bg-white/90 p-2 lg:p-4 w-fit rounded-full font-black lg:text-xl text-primary px-5 lg:px-10">
              Onka Crackers Sandwich
            </p>
            <p className="text-2xl lg:text-[5rem] text-white font-black">
              Bersama Lawan <span className="text-secondary">Anemia</span>
              <br />
              Melalui Camilan Sehat!
            </p>
            <p className="text-white text-2xl lg:text-4xl font-extrabold">
              Selamat Datang di
              <span className="text-foreground"> Onka Crackers Sandwich</span>
            </p>
            <p className="lg:text-3xl">
              Camilan sehat berbahan lokal oncom dan daun katuk yang
              diformulasikan untuk membantu mencegah anemia pada remaja putri.
              Rasanya enak, kemasan praktis, dan pastinya bergizi.
            </p>
          </div>

          {/* Hero kanan */}
          <div className="relative w-full lg:w-2/5 mt-10 lg:mt-0">
            {/* Background miring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-to-b from-secondary/40 to-[#5E0606]/40 p-4 w-[350px] h-[350px] lg:w-[650px] lg:h-[650px] rounded-tr-[10rem] rounded-bl-[10rem] rotate-15" />
            </div>

            {/* Foreground dengan image */}
            <div className="relative bg-gradient-to-b from-secondary to-[#5E0606] p-4 w-fit rounded-tr-[10rem] rounded-bl-[10rem]">
              <Image src="/hero.png" alt="Hero" width={600} height={600} />
            </div>
          </div>

          {/* CTA to next sextion */}
          <div className="text-center lg:text-left absolute -bottom-43 lg:-bottom-7 lg:-left-7 bg-foreground border-[30px] border-white rounded-full p-5 text-white font-extrabold text-3xl">
            <p>Apa Itu Onka Crackers Sandwich?</p>
          </div>
        </div>
      </section>

      {/* Apa itu */}
      <section className="mt-50 lg:mt-0 px-10 flex flex-col gap-6">
        <p className="text-2xl">
          Onka Crackers Sandwich adalah camilan inovatif berbahan dasar oncom
          dan daun katuk. Nama ONKA sendiri merupakan singkatan dari Oncom dan
          Katuk, dua bahan lokal kaya gizi yang dipadukan dengan rasa modern.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-b from-primary to-[#FFDC6E] p-4 rounded-tr-4xl rounded-bl-4xl flex items-start justify-between gap-6 ">
            <div className="relative size-30 lg:size-60">
              <div className="rounded-full relative bg-gradient-to-b from-primary to-white p-4 size-30 lg:size-50 mt-5"></div>
              <Image
                src="/oncom.png"
                alt="Oncom"
                width={800}
                height={800}
                className="absolute top-5 left-2"
              />
            </div>
            <div className="flex flex-col justify-center h-full gap-4">
              <p className="font-extrabold text-4xl">Oncom</p>
              <p className="font-bold text-2xl text-white">
                Kaya zat besi & probiotik alami untuk mengatasi anemia
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-primary to-[#FFDC6E] p-4 rounded-tr-4xl rounded-bl-4xl flex items-start justify-between gap-6">
            <div className="relative size-30 lg:size-60">
              <div className="rounded-full relative bg-gradient-to-b from-primary to-white p-4 size-30 lg:size-50 mt-5"></div>
              <Image
                src="/katuk.png"
                alt="Katuk"
                width={800}
                height={800}
                className="absolute top-14 left-0"
              />
            </div>
            <div className="flex flex-col justify-center h-full gap-4">
              <p className="font-extrabold text-4xl">Daun Katuk</p>
              <p className="font-bold text-2xl text-white">
                Kaya vitamin C untuk membantu penyerapan zat besi.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-primary to-[#FFDC6E] p-4 rounded-tr-4xl rounded-bl-4xl flex items-start justify-between gap-6">
            <div className="relative size-30 lg:size-60">
              <div className="rounded-full relative bg-gradient-to-b from-primary to-white p-4 size-30 lg:size-50 mt-5"></div>
              <Image
                src="/coklat.png"
                alt="Coklat"
                width={800}
                height={800}
                className="absolute top-16 left-2"
              />
            </div>
            <div className="flex flex-col justify-center h-full gap-4">
              <p className="font-extrabold text-4xl">
                Isian Coklat dan Tepung Pisang
              </p>
              <p className="font-bold text-2xl text-white">
                Menambah rasa manis sehat dan prebiotik untuk pencernaan.
              </p>
            </div>
          </div>
        </div>
        <p className="text-2xl">
          Produk ini hadir untuk menjawab masalah anemia pada remaja putri
          dengan cara yang enak, sehat, dan praktis.
        </p>
      </section>

      {/* Apa yang membuat berbeda */}
      <section className="p-10 relative">
        <h1 className="font-extrabold text-4xl text-center mb-6">
          Apa yang Membuat Onka Crackers Sandwich Berbeda?
        </h1>

        <div className="flex flex-wrap justify-center gap-8 gap-x-20 max-w-9xl mx-auto">
          {[
            {
              img: "/bahan_lokal.png",
              alt: "Oncom",
              title: "Bahan Lokal Bergizi",
              desc: "Memanfaatkan oncom, daun katuk, dan pisang.",
            },
            {
              img: "/anemia.png",
              alt: "Anemia",
              title: "Cegah Anemia",
              desc: "Kombinasi zat besi & vitamin C.",
            },
            {
              img: "/star.png",
              alt: "Star",
              title: "Rasa Favorit Remaja",
              desc: "Manis gurih dengan isian cokelat.",
            },
            {
              img: "/digestion.png",
              alt: "Digestion",
              title: "Probiotik & Prebiotik",
              desc: "Sehatkan usus & pencernaan.",
            },
            {
              img: "/praktis.png",
              alt: "Praktis",
              title: "Praktis & Kekinian",
              desc: "Cocok untuk dibawa ke sekolah atau aktivitas sehari-hari.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-primary to-[#FFDC6E] p-6 rounded-tr-4xl rounded-bl-4xl shadow-md flex flex-col items-center justify-between gap-3 w-96 min-h-[360px]"
            >
              <div className="relative size-50 flex items-center justify-center">
                <div className="rounded-full relative bg-gradient-to-b from-primary to-white p-4 size-40 mt-5"></div>
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={
                    item.alt === "Digestion" || item.alt === "Anemia" ? 70 : 120
                  }
                  height={
                    item.alt === "Digestion" || item.alt === "Anemia" ? 70 : 120
                  }
                  className={
                    item.alt === "Digestion"
                      ? "absolute top-15"
                      : "absolute top-10"
                  }
                />
              </div>
              <h3 className="font-extrabold text-2xl text-center">
                {item.title}
              </h3>
              <p className="text-xl font-bold text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* element merah */}
        <div className="absolute bottom-16 w-32 h-80 bg-gradient-to-b from-secondary to-[#5E0606] rounded-tr-4xl rounded-bl-4xl -z-10"></div>
        <div className="absolute right-10 bottom-16 w-32 h-80 bg-gradient-to-b from-secondary to-[#5E0606] rounded-tr-4xl rounded-bl-4xl -z-10"></div>
      </section>

      {/* Sasaran Produk */}
      <section className="p-10">
        <div className="flex flex-col md:flex-row items-center gap-32 max-w-6xl mx-auto">
          {/* Bagian Gambar */}
          <div className="relative w-100 h-100">
            {/* Card 1 */}
            <div className="absolute top-10 left-10 lg:-left-5 rotate-[-12deg] shadow-lg shadow-primary rounded-2xl">
              <Image
                src="/oncom_2.JPG"
                alt="Cracker 3"
                width={220}
                height={420}
                className="rounded-2xl shadow-lg h-[20rem] w-[12rem] object-cover"
              />
            </div>
            {/* Card 2 */}
            <div className="absolute top-5 left-25 lg:left-15 rotate-[3deg] shadow-lg shadow-primary rounded-2xl">
              <Image
                src="/oncom_1.JPG"
                alt="Cracker 2"
                width={220}
                height={420}
                className="rounded-2xl shadow-lg h-[20rem] w-[12rem] object-cover"
              />
            </div>
            {/* Card 3 */}
            <div className="absolute top-5 left-40 lg:left-40 rotate-[12deg] shadow-lg shadow-primary rounded-2xl">
              <Image
                src="/oncom_3.JPG"
                alt="Cracker 1"
                width={220}
                height={420}
                className="rounded-2xl shadow-lg h-[20rem] w-[12rem] object-cover"
              />
            </div>
          </div>

          {/* Bagian Teks */}
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-[#6B2C0F] mb-4">
              Sasaran Produk
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Produk ini diformulasikan khusus untuk remaja putri, kelompok yang
              rentan mengalami anemia karena kebutuhan zat besi yang tinggi pada
              masa pertumbuhan dan menstruasi. Data menunjukkan sekitar 32%
              remaja putri di Indonesia berisiko mengalami anemia (Kemenkes,
              2018). Dengan Onka Crackers Sandwich, remaja dapat menikmati snack
              enak sembari menjaga asupan zat besi harian.
            </p>
          </div>
        </div>
      </section>

      {/* Manfaat */}
      <section className="p-10">
        <h1 className="font-extrabold text-4xl text-center mb-6">
          Manfaat Onka Crackers Sandwich
        </h1>

        {/* content 1 */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 mb-6">
          <div className="lg:w-2/5">
            <Image
              src="/manfaat_1.png"
              alt="Manfaat 1"
              width="2400"
              height="1600"
              className="rounded-b-4xl w-full h-62 rounded-tr-4xl object-cover"
            />
          </div>
          <div className="lg:w-3/5 p-6 bg-gradient-to-b from-primary to-[#FFDC6E] rounded-tr-4xl rounded-bl-4xl h-62 flex flex-col justify-center gap-6">
            <h1 className="font-extrabold text-3xl">Kesehatan</h1>
            <ul className="list-disc list-inside pl-4 text-xl">
              <li>Membantu mencegah anemia.</li>
              <li>Menjaga sistem imun & metabolisme tubuh.</li>
              <li>Menyehatkan saluran pencernaan.</li>
            </ul>
          </div>
        </div>

        {/* content 2 */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 mb-6">
          <div className="lg:w-3/5 p-6 bg-gradient-to-b from-primary to-[#FFDC6E] rounded-tr-4xl rounded-bl-4xl h-62 flex flex-col justify-center gap-6">
            <h1 className="font-extrabold text-3xl">Sosial</h1>
            <ul className="list-disc list-inside pl-4 text-xl">
              <li>Edukasi pentingnya camilan sehat berbasis pangan lokal.</li>
              <li>Mendukung program nasional cegah anemia remaja.</li>
              <li>Membiasakan gaya hidup sehat sejak dini.</li>
            </ul>
          </div>
          <div className="lg:w-2/5">
            <Image
              src="/manfaat_2.png"
              alt="Manfaat 1"
              width="2400"
              height="1600"
              className="rounded-b-4xl w-full h-62 rounded-tr-4xl object-cover"
            />
          </div>
        </div>

        {/* content 3 */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 mb-6">
          <div className="lg:w-2/5">
            <Image
              src="/manfaat_3.png"
              alt="Manfaat 1"
              width="2400"
              height="1600"
              className="rounded-b-4xl w-full h-62 rounded-tr-4xl object-cover"
            />
          </div>
          <div className="lg:w-3/5 p-6 bg-gradient-to-b from-primary to-[#FFDC6E] rounded-tr-4xl rounded-bl-4xl h-62 flex flex-col justify-center gap-6">
            <h1 className="font-extrabold text-3xl">Ekonomi</h1>
            <ul className="list-disc list-inside pl-4 text-xl">
              <li>Membantu mencegah anemia.</li>
              <li>Menjaga sistem imun & metabolisme tubuh. .</li>
              <li>Menyehatkan saluran pencernaan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="p-10">
        <h1 className="font-extrabold text-4xl text-center mb-6">
          Kenali Lebih Dekat Onka Crackers Sandwich Lewat Galeri Kami
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Image
            src="/oncom_2.JPG"
            alt="Cracker 3"
            width={1000}
            height={1000}
            className="rounded-tr-4xl rounded-bl-4xl shadow-lg h-[25rem] w-full object-cover"
          />
          <Image
            src="/oncom_3.JPG"
            alt="Cracker 3"
            width={1000}
            height={1000}
            className="rounded-tr-4xl rounded-bl-4xl shadow-lg h-[30rem] w-full object-cover shadow-primary"
          />
          <Image
            src="/oncom_1.JPG"
            alt="Cracker 3"
            width={1000}
            height={1000}
            className="rounded-tr-4xl rounded-bl-4xl shadow-lg h-[25rem] w-full object-cover"
          />
        </div>
      </section>

      {/* Apa Kata Mereka */}
      <section className="p-10 relative">
        <h1 className="font-extrabold text-4xl text-center mb-6">
          Apa Kata Mereka
        </h1>
        <div className="shadow-xl rounded-b-4xl rounded-tr-4xl p-10 lg:px-20 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/stars.png"
                  alt="Star"
                  width={1000}
                  height={1000}
                  className="w-10 h-10 lg:w-16 lg:h-16 rounded-full"
                />
              ))}
            </div>
            <Image
              src="/quote.png"
              alt="Quote"
              width={1000}
              height={1000}
              className="w-10 h-10 lg:w-16 lg:h-16"
            />
          </div>
          <p className="font-semibold text-2xl">
            Rasanya enak, gurih manis. Cocok banget buat nyemil. Habis banyak
            sih nih!
          </p>
          <div className="flex items-center mt-10">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="ml-6">
              <h2 className="font-bold text-2xl">Lala</h2>
              <p className="text-lg">19 tahun</p>
            </div>
          </div>
        </div>

        {/* element merah */}
        <div className="hidden lg:absolute bottom-16 w-32 h-80 bg-gradient-to-b from-secondary to-[#5E0606] rounded-tr-4xl rounded-bl-4xl -z-10"></div>
        <div className="hidden lg:absolute right-10 bottom-16 w-32 h-80 bg-gradient-to-b from-secondary to-[#5E0606] rounded-tr-4xl rounded-bl-4xl -z-10"></div>
      </section>

      {/* CTA */}
      <section className="p-10 text-center">
        <div className="bg-primary pt-20 rounded-4xl">
          <h1 className="text-3xl font-extrabold">
            Mari Dukung Generasi Bebas Anemia
          </h1>
          <p className="text-lg lg:text-2xl mt-3">
            Onka Crackers Sandwich bukan sekadar camilan. Ini adalah langkah
            nyata untuk mencetak generasi yang sehat, cerdas, dan produktif.
          </p>
          <Image
            src="/wave.png"
            alt="Wave"
            width={1000}
            height={1000}
            className="rounded-tr-4xl rounded-bl-4xl w-3/4 mx-auto object-cover mt-6"
          />
        </div>
      </section>

      {/* Footer */}
      <section className="bg-primary p-20">
        <h1 className="font-extrabold text-4xl text-center">Hubungi Kami</h1>
        <div className="flex items-center justify-center gap-10 mt-6">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/instagram_icon.png"
              alt="Wave"
              width={1000}
              height={1000}
              className="size-6"
            />
            <p className="text-white">Onka.id</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/email_icon.png"
              alt="Wave"
              width={1000}
              height={1000}
              className="size-6"
            />
            <p className="text-white">onkacrackers@gmail.com</p>
          </div>
        </div>
        <p className="text-center mt-6 text-3xl">
          Bersama Lawan Anemia melalui Camilan Sehat!
        </p>
      </section>
    </main>
  );
}
