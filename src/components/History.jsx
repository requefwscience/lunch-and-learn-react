export default function History(props) {
  return (
    <div className="history">
      {props.history.map((item) => (
        <span key={item.number} className="item">
          <button key={item.number} onClick={() => props.onItemSelect(item)}>
            {item.number}
          </button>
          <button onClick={() => props.onItemRemove(item)}>&times;</button>
        </span>
      ))}
    </div>
  );
}
