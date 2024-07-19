import './styles.css';
import Counter from '../../components/counter';

function Main() {
  return (
    <div className="container-main">
      <Counter title="Counter 1" />
      <Counter title="Counter 2" initialValue={10} />
    </div>
  );
}

export default Main;
