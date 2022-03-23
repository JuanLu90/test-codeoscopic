// STYLES
import "./Form.less";

// FUNCTION
const Form = (props) => {
  const { colors, handleChange, addItem } = props;

  return (
    <div className="Form">
      <input
        type="text"
        name="textItem"
        id="textItem"
        placeholder="some text"
        onChange={handleChange}
      />
      <select name="colorSelected" id="colorSelected" onChange={handleChange}>
        {colors?.map((x) => {
          return (
            <option value={x.hex} id={x.id} key={x.id}>
              {x?.tags[0]?.name}
            </option>
          );
        })}
      </select>
      <button onClick={addItem}> Add item </button>
    </div>
  );
};

export default Form;
