type TypeTourPageProp = {
  params: {
    tourId: string;
  };
};

// console.log(beverage);

export default function TourPage({ params }: TypeTourPageProp) {
  return (
    <>
      <h1 className="text-4xl">ID : {params.tourId}</h1>
    </>
  );
}
