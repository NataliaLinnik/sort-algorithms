const AlgorithmView = ({ title, numbers, sortedNumbers }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <span>UNSORTED: </span>
        {numbers.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
      <div>
        <span>SORTED: </span>
        {sortedNumbers().map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmView;
