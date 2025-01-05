import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>

    <div className="px-6 lg:px-20 py-10 font-sans text-[#151875]">
    {/* Header Section */}
    <header className="bg-blue-50 py-16 mb-4 mt-0 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
          <p className="text-gray-500 mt-2">
            <span>Home</span>
            <span className="mx-2">.</span>
            <span>Pages</span>
            <span className="mx-2">.</span>
            <span className="text-pink-500">About Us</span>
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
      <div>
          <Image
            src="/about.png"
            alt="Ecommerce Meeting"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            ligula et libero sodales suscipit. Morbi arcu eros, tincidunt non
            turpis non, bibendum porttitor nisi.
          </p>
          <Link href="/contact">
            <button className="px-6 py-2 my-8 bg-pink-500 text-white font-semibold rounded-sm shadow-md hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
        
      </section>

      {/* Features Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/icon1.png", title: "Free Delivery" },
            { icon: "/icon2.png", title: "100% Cash Back" },
            { icon: "/icon3.png", title: "Quality Product" },
            { icon: "/icon4.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-[#fbfbff] w-full h-auto lg:h-[400px] 2xl:h-[503px] flex items-center justify-center mx-auto my-10 md:my-20  border-b-[1px] border-b-yellow-600">
        <div className="">
          <h1 className="text-center text-black font-bold text-2xl lg:text-[42px] lg:leading-[25.6px]">
            Our Client Say!
          </h1>

          <div className="my-5 flex gap-3 justify-center ">
            <Image
              src={"/client1.jpeg"}
              alt="client1"
              height={55}
              width={55}
              className="object-cover h-[55px] w-[55px]"
            />
            <Image
              src={"/client-2.jpg"}
              alt="client2"
              height={59}
              width={55}
              className="object-cover h-[59px] w-[55px]"
            />
            <Image
              src={"/client-3.jpeg"}
              alt="client3"
              height={55}
              width={55}
              className="object-cover h-[55px] w-[55px]"
            />
          </div>

          <div className="">
            <h3 className="text-[18px] leading-[25.6px] text-gray-900 text-center font-semibold">
              Selina Gomez
            </h3>
            <p className="my-1 text-[#8a8fb9] text-center">
              Ceo At Webecy Digital{" "}
            </p>

            <p className="my-4 text-[#8a8fb9] mx-auto flex justify-center font-semibold text-[16px] leading-[25.4px] text-center lg:max-w-[689px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
              enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
              aliquam lacus volutpat praesent.
            </p>
            <div className="flex justify-center items-center py-3">
            <Image
              src={"/slide.png"}
              alt="client3"
              height={3}
              width={73}
              />
              </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default AboutPage;