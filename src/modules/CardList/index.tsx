import './cardList.css';
import { cards } from '../../constants';
import Card from '../../components/Card';

const CardList: React.FC = () => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        return <Card card={card} index={index}/>;
      })}
    </div>
  );
};

export default CardList;
