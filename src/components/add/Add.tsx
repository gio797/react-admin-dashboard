import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add({ slug, columns, setOpen }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new user
    // axios.post(`/api/${slug}s`, {})
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          x
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((column) => column.field !== "id" && column.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label htmlFor={column.field}>{column.field}</label>
                <input
                  type="text"
                  placeholder={column.field}
                  id={column.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
