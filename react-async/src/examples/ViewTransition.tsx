import { Suspense, use, useTransition, useState, ViewTransition } from "react";

type ImageData = {
  id: number;
  url: string;
  title: string;
};

async function fetchImage(id: number): Promise<ImageData> {
  await new Promise((r: any) => setTimeout(r, 800));
  return { id, url: `/images/${id}.jpg`, title: `Image ${id}` };
}

function ViewTransitionExample() {
  const [imageId, setImageId] = useState(1);
  const [imageDataPromise, setImageDataPromise] = useState<Promise<ImageData>>(
    () => fetchImage(imageId)
  );

  return (
    <div className="flex flex-col justify-center items-center p-4 h-screen">
      <Button
        action={() => {
          setImageId(imageId + 1);
          setImageDataPromise(fetchImage(imageId + 1));
        }}
      >
        Next Image
      </Button>
      <Suspense fallback={<ImageSkeleton imageId={imageId} />}>
        <Image imageDataPromise={imageDataPromise} imageId={imageId} />
      </Suspense>
    </div>
  );
}

function Image({
  imageDataPromise,
  imageId,
}: {
  imageDataPromise: Promise<ImageData>;
  imageId: number;
}) {
  const image = use(imageDataPromise);

  return (
    <div className="mt-5">
      <ViewTransition enter="fade-in" exit="fade-out">
        <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter="slide-up" exit="fade-out">
        <img
          src={image.url}
          alt={image.title}
          className="h-96 object-contain aspect-[5/4]"
        />
      </ViewTransition>
    </div>
  );
}

function ImageSkeleton({ imageId }: { imageId: number }) {
  return (
    <div className="mt-5">
      <ViewTransition key={imageId} enter="fade-in" exit="fade-out">
        <h2 className="text-2xl font-bold mb-4">Loading...</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter="slide-up" exit="fade-out">
        <div className="h-96 aspect-[5/4] bg-gray-300 animate-pulse rounded-md"></div>
      </ViewTransition>
    </div>
  );
}

function Button({
  action,
  children,
}: {
  action: () => void;
  children: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <ViewTransition update="button-pulse">
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await action();
          });
        }}
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-bold text-2xl disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    </ViewTransition>
  );
}

export default ViewTransitionExample;