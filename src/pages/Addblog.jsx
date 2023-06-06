import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.error(errors);

  return (
    <div>
      <Container className="text-center mt-5 pt-5">
        <h1 className="text-center mb-5">FORM</h1>

        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <label htmlFor="">Blog Name</label>
          <input
            className="ms-4"
            type="text"
            name="BlogName"
            {...register("BlogName", { required: "BlogName is required" })}
            id=""
          />
          <br></br>
          <br></br>
          <label htmlFor="">Description</label>
          <input
            className="ms-4"
            type="text"
            name="Description"
            {...register("Description", {
              required: "Description is required",
            })}
            id=""
          />
          <br></br>
          <br></br>
          <label htmlFor="">Author Name</label>
          <input
            className="ms-2"
            type="text"
            name="AuthorName"
            {...register("AuthorName", { required: "AuthorName is required" })}
            id=""
          />
          <br></br>
          <br></br>

          <Button variant="dark">Submit</Button>
        </form>
      </Container>
    </div>
  );
}
