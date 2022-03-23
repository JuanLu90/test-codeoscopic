// STYLES
import "./List.less";

// INTERFACES
interface IItems {
  color: string;
  text: string;
  id: number;
}
interface IProps {
  items: [IItems];
  deleteItem: (id: number) => void;
}

// FUNCTION
const List: React.FC<IProps> = (props) => {
  const { items, deleteItem } = props;

  return (
    <div className="List">
      <span className="List_title">List</span>
      {items?.map((x, i: number) => {
        return (
          <div
            style={{ backgroundColor: `#${x.color}` }}
            className="List_item"
            key={i}
          >
            {x.text}
            <button onClick={() => deleteItem(x.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
