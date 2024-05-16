import './card.css';

const Card: React.FC<{ card: API.CardInfo; index: number }> = ({
  card,
  index,
}) => {
  return (
    <>
      <div className="card" key={index}>
        <div
          className={`line line-el-${index+1}`}
        ></div>
        <div className="card-title-container">
          <p className="card-title">{card.title}</p>
          <p className="card-number">{card.number}</p>
        </div>
        <p className="card-description">{card.description}</p>
      </div>
    </>
  );
};

export default Card;
