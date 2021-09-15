import * as S from "./styles";
import { CollectionCard } from "./../../lib/interfaces/collection";

export default function CollectionColumnCard({
  title,
  description,
  coverImg,
  id,
}: CollectionCard) {
  return (
    <S.ColumnCard>
      <img src={coverImg} className="cover-img" />
      <h1 className="collection-title">{title}</h1>
      <p className="collection-description">
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
    </S.ColumnCard>
  );
}