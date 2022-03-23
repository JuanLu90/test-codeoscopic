// COMPONENTS
import Form from "../Form/Form";
import List from "../List/List";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getList } from "../../redux/slices/list";

// STYLES
import "./Main.less";

// FUNCTION
const Main = () => {
  const [state, setState] = useState({
    textItem: "",
    colorSelected: "f9bf8d",
    idItem: "",
    currentList: [],
  });

  const dispatch = useDispatch();
  const { colorsList } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addItem = () => {
    if (!state.textItem) return;

    setState((prevState) => ({
      ...prevState,
      currentList: [
        ...prevState.currentList,
        {
          text: prevState.textItem,
          color: prevState.colorSelected,
          id: new Date().getTime(),
        },
      ],
    }));
  };

  const deleteItem = (id) => {
    let newList = state.currentList.filter((x) => x.id !== id);

    setState((prevState) => ({
      ...prevState,
      currentList: [...newList],
    }));
  };

  return (
    <div className="Main">
      <h2> Simple TODO list app </h2>
      <Form colors={colorsList} handleChange={handleChange} addItem={addItem} />
      <List items={state.currentList} deleteItem={deleteItem} />
    </div>
  );
};

export default Main;
