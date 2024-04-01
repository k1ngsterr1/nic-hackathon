"use client"
import { useAppDispatch } from "@/shared/lib/_react-hooks";
import { useState } from "react";
import { createUser } from "../model/singup";
import { Input, MButton } from "@/shared/ui";

const SingupForm = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    phone: 0,
    name: '',
    lastname: '',
    card_number: 0
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    const isNotEmpty = Object.values(values).every((val) => val);
  
    if (!isNotEmpty) return;
    dispatch(createUser(values)).then((response: any) => {
      console.log(response); // Логируем ответ после успешной отправки данных
    }).catch((error: any) => {
      console.error('Error:', error); // Логируем ошибку, если что-то пошло не так
    });
  }

  return (
    <div className="container">

    <form action="" onChange={handleChange}>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name='username'
          value={values.username}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name="password"
          type="password"
          value={values.password}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name="email"
          type="email"
          value={values.email}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name="phone"
          type="tel"
          value={values.phone}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name="name"
          type="text"
          value={values.name}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          name="lastname"
          value={values.lastname}
        />
      </div>
      <div className="border-[2px] border-white border-solid">
        <Input 
          type=""
          name="card_number"
          value={values.card_number}
        />
      </div>

      <MButton 
        onClick={handleSubmit}
        label="Зарегисрироваться"
      />
    </form>
    </div>
  )
}

export default SingupForm;