import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";
import styles from "./profile-form.module.css";

export function ProfileForm({ firstName, lastName, phone, email }) {
  const [form, setForm] = useState({ firstName, lastName, phone, email });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (  
    <div className={styles.profileForm}>
      <h1 className={styles.title}>Изменение профиля</h1>

      <Input
        placeholder="Введите имя ..."
        fullWidth
        inputProps={{
          "data-name": "firstName",
        }}
        onChange={handleChangeForm}
        value={form.firstName}
      />
      <Input
        placeholder="Введите фамилию ..."
        fullWidth
        inputProps={{
          "data-name": "lastName",
        }}
        onChange={handleChangeForm}
        value={form.lastName}
      />
      <Input
        placeholder="Введите номер телефона ..."
        fullWidth
        inputProps={{
          "data-name": "phone",
        }}
        onChange={handleChangeForm}
        value={form.phone}
      />
      <Input
        placeholder="Введите email ..."
        fullWidth
        inputProps={{
          "data-name": "email",
        }}
        onChange={handleChangeForm}
        value={form.email}
      />
      <br/><br/>

      <Button
        onClick={() => {
          dispatch(updateProfile(form));
        }}
      >
        сохранить
      </Button>
    </div>
  );

}
