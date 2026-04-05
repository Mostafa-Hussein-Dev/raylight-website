import Image from "next/image";

interface ModernCardProps {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  onClick: () => void;
}

export default function ModernCard({ id, name, slug, subtitle, image, onClick }: ModernCardProps) {
  return (
    <article className="modern__card" onClick={onClick}>
      <div className="modern__card-image">
        <Image
          src={image}
          alt={name}
          width={120}
          height={180}
          priority={true}
          className="modern__card-img"
        />
      </div>

      <div className="modern__card-content">
        <h2 className="modern__card-title">{name}</h2>
        <p className="modern__card-subtitle">{subtitle}</p>
      </div>

      <button className="modern__card-action">
        <i className="ri-arrow-right-line modern__card-icon"></i>
      </button>
    </article>
  );
}
