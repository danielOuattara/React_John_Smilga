import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
import beverage from "@/image/pexels-beverage.jpg";

export default function page() {
  return (
    <section className="flex gap-x-4 mt-4">
      {/* local image */}
      <div>
        <h2>local image</h2>
        <Image src={beverage} alt={"beverage"} width={300} height={500} />
      </div>

      {/* remote image */}
      <div>
        <h2>remote image</h2>
        <Image src={url} alt="tour" width={300} height={500} priority />
      </div>
    </section>
  );
}
