export default function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(event.target.elements.number.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <div className="control">
          <label htmlFor="number">Number</label>
          <input
            id="number"
            name="number"
            type="number"
            min="0"
            required
            defaultValue={props.initialValue}
          />
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
