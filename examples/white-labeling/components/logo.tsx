import Image from "next/image";

export function Logo({ src }: { src: string }) {
  return (
    <div className={"flex justify-center"}>
      <Image
        className={"bg-black/20 p-4 rounded-lg aspect-square object-contain"}
        width={200}
        height={200}
        src={src}
        alt={"brand logo"}
      />
    </div>
  );
}
