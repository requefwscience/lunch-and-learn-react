export default function Info({ data }) {
  if (data === null) {
    return (
      <div className="info">
        <div className="question">
          <span>Is even?</span>
        </div>
      </div>
    );
  }

  return (
    <div className="info">
      <div className="question">
        <span>Is even?</span>
        <span className={`type ${data.iseven ? 'even' : 'odd'}`}>
          {data.iseven ? 'Yes' : 'No'}
        </span>
      </div>
      <div className="number">{data.number}</div>
      <div className="ad">{data.ad}</div>
    </div>
  );
}
