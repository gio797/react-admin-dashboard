import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useQueryClient, useMutation } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add({ slug, columns, setOpen }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${slug}s`] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new user
    // axios.post(`/api/${slug}s`, {})
    mutation.mutate();
    setOpen(false);
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
