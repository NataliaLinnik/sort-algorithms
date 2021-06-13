import './App.css';
import AlgorithmView from './AlgorithmView';

const numbers = [10, 25, 3, 7, 34, 2, 1, 47, 9, 6, 7];

const App = () => {
  const insertionSort = () => {
    const sortNumbers = [...numbers];
    let currentIndex;
    for (currentIndex = 1; currentIndex < sortNumbers.length; currentIndex++) {
      const currentValue = sortNumbers[currentIndex];
      let indexToCheck = currentIndex - 1;
      while (indexToCheck >= 0 && sortNumbers[indexToCheck] > currentValue) {
        sortNumbers[indexToCheck + 1] = sortNumbers[indexToCheck];
        indexToCheck--;
      }
      sortNumbers[indexToCheck + 1] = currentValue;
    }

    return sortNumbers;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <AlgorithmView
          title={'INSERTION SORT'}
          numbers={numbers}
          sortedNumbers={() => insertionSort()}
        />
      </header>
    </div>
  );
};

export default App;
