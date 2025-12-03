
import { useEffect, useState } from "react";

type ImageData = {
  id: number;
  url: string;
  title: string;
};

async function fetchImage(id: number): Promise<ImageData> {
  await new Promise((r: any) => setTimeout(r, 800));
  return { id, url: `/images/${id}.jpg`, title: `Image ${id}` };
}

function StatePlusEffect() {
  const [imageId, setImageId] = useState(1);
  const [imageData, setImageData] = useState<ImageData>();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetchImage(imageId).then((data) => {
      setImageData(data);
      setIsPending(false);
    });
  }, [imageId]);

  return (
    <div className="flex flex-col justify-center items-center p-4 h-screen">
      <Button onClick={() => setImageId(imageId + 1)}>Next Image</Button>
      {imageData && !isPending && <Image image={imageData!} />}
      {isPending && <ImageSkeleton />}
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold text-2xl disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

function Image({ image }: { image: ImageData }) {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
      <img
        src={image.url}
        alt={image.title}
        className="h-96 object-contain aspect-[5/4]"
      />
    </div>
  );
}

function ImageSkeleton() {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-4">Loading...</h2>
      <div className="h-96 aspect-[5/4] bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
}

export default StatePlusEffect;
