import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { HomeWork11Component, DodImg } from "./styles";
import { error } from "console";

function Homework11() {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("Good");
  const [dogImageUlrl, setDogImageUlrl] = useState<string>('');

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getDogPhoto = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      console.log(response);
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        //Логика ошибки
        throw Object.assign(new Error("API ERROR"), { errorObj: result });
      } else {
        //логига успешного завершения запроса
        setDogImageUlrl(result.message)
      }
    } catch (error) {
      console.log(error);
    }finally{
        console.log("Spinner stop");
        
      }
  };

  useEffect(() => {
    getDogPhoto();
  }, [title]);

  return (
    <HomeWork11Component>
      <Input
        name="title"
        placeholder="Enter title"
        value={title}
        onChange={onTitleChange}
      />
      <Input
        name="note"
        placeholder="Enter note"
        value={note}
        onChange={onNoteChange}
      />
      <DodImg src = {dogImageUlrl} alt ='random dog' />
    </HomeWork11Component>
  );
}

export default Homework11;
