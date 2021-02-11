import React, { useState, useEffect } from 'react'
import '../style/style.css';

function FormContact (props) {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState('')
  const [formValid, setFormValid] = useState(false)

  const [nameEmpty, setNameEmpty] = useState(false)
  const [lastnameEmpty, setLastnameEmpty] = useState (false)
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [categoryEmpty, setCategoryEmpty] = useState(false)
  const [messageEmpty, setMessageEmpty] = useState(false)

  const [nameError, setNameError] = useState ('Поле имя не может быть пустым')
  const [lastnameError, setLastnameError] = useState ('Поле фамилия не может быть пустым')
  const [emailError, setEmailError] = useState ('Поле почта не может быть пустым')
  const [categoryError, setCategoryError] = useState ('Поле категории не может быть пустым')
  const [messageError, setMessageError] = useState ('Поле сообщения не может быть пустым')
  const [fileError, setFileError] = useState ('')

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value) {
      setNameError('')
      setLastnameError('')
    } else {
      setNameError('Поле имя не может быть пустым')
      setLastnameError('Поле фамилия не может быть пустым')
    }
  }

  const lastnameHandler = (e) => {
    setLastname(e.target.value)
    if (e.target.value) {
      setNameError('')
      setLastnameError('')
    } else {
      setNameError('Поле имя не может быть пустым')
      setLastnameError('Поле фамилия не может быть пустым')
    }
  }

  const categoryHandler = (e) => {
    setCategory(e.target.value)
    if (e.target.value) {
      setCategoryError('')
    } else {
      setCategoryError('Поле категории не может быть пустым')
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!emailReg.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email")
    } else {
      setEmailError('')
    }
  }

  const messageHandler = (e) => {
    setMessage(e.target.value)
    if (e.target.value.length > 10) {
      setMessageError('')
    } else {
      setMessageError('Минимум 10 символов')
    }
  }

  const fileHandler = (e) => {
    setFile(e.target.value)
    if (e.target.files[0].size < (2 * 1024 * 1024)) {
      setFileError('')
    } else {
      setFileError('Не более 2Мб')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameEmpty(true)
        break;
      case 'lastname':
        setLastnameEmpty(true)
        break;
      case 'email':
        setEmailEmpty(true)
        break;
      case 'category':
        setCategoryEmpty(true)
        break;        
      case 'message':
        setMessageEmpty(true)
        break;
    }
  }

  useEffect(() => {
    if (nameError || lastnameError || emailError || categoryError || messageError || fileError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }    
  }, [nameError, lastnameError, emailError, categoryError, messageError, fileError]);

  return (
    <div className="form">
      <h1>Форма обратной связи</h1>
      <form method='POST'>
          <div className='form__name'>
            <p>Имя</p>
            <input value={name} onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} name="name" type="text"/>
            {(nameEmpty && nameError) && <span className='form__error'>{nameError}</span>}
          </div>
          <div className='form__lastname'>
            <p>Фамилия*</p>
            <input value={lastname} onChange={e => lastnameHandler(e)} onBlur={e => blurHandler(e)} name="lastname" type="text"/>
            {(lastnameEmpty && lastnameError) && <span className='form__error'>{lastnameError}</span>}
          </div>
          <div className='form__email'>
            <p>Email</p>
            <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name="email" type="text"/>
            {(emailEmpty && emailError) && <span className='form__error'>{emailError}</span>}
          </div>
          <div className='form__selector'>
            <p>Категория сообщения</p>
            <select value={category} onChange={e => categoryHandler(e)} onBlur={e => blurHandler(e)} required name='category' >
              <option select='true' disabled></option>
              <option>Проблема с работой сервиса</option>
              <option>Предложение об улучшении</option>
              <option>Гневное сообщение просто так</option>
            </select>
            {(categoryEmpty && categoryError) && <span className='form__error'>{categoryError}</span>}
          </div>
          <div className='form__message'>
            <p>Сообщение</p>
            <textarea value={message} onChange={e => messageHandler(e)} onBlur={e => blurHandler(e)} name="message" id="" cols="30" rows="10"></textarea>
            {(messageEmpty && messageError) && <span className='form__error'>{messageError}</span>}
          </div>
          <div className='form__file'>
            <p>Картинка (не блоее 2Мб)*</p>
            <input value={file} onChange={e => fileHandler(e)} type="file" name="image" accept="image/png,image/jpeg"/>
            {(fileError) && <span className='form__error'>{fileError}</span>}
          </div>
          <div>
              <button disabled={!formValid}>Отправить</button>
          </div>
      </form>
    </div>
    );
}

export default FormContact;