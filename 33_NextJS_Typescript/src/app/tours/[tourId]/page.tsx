type TypeTourPageProp = {
  params: {
    tourId: string;
  };
};

export default function TourPage({ params }: TypeTourPageProp) {
  return (
    <>
      <h1 className="text-4xl">ID : {params.tourId}</h1>
    </>
  );
}
