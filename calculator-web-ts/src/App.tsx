import Calculator from './components/calculator';

const App: React.FC = () => {
  return (
    <div>
      <h1>Mi Calculadora</h1>
      <Calculator initialValue={0} />
    </div>
  );
};

export default App;