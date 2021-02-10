import React from 'react'
import '../style/style.css';

function FormContact (props) {
  return (
    <div className="form">
      <h1>Форма обратной связи</h1>
      <form method='POST'>
          <div className='form__name'>
            <p>Имя</p>
            <input type="text"/>
          </div>
          <div className='form__lastname'>
            <p>Фамилия*</p>
            <input type="text"/>
          </div>
          <div className='form__email'>
            <p>Email</p>
            <input type="text"/>
          </div>
          <div className='form__selector'>
            <p>Категория сообщения</p>
            <select required name='category' >
              <option selected disabled>Выбери...</option>
              <option>Проблема с работой сервиса</option>
              <option>Предложение об улучшении</option>
              <option>Гневное сообщение просто так</option>
            </select>
          </div>
          <div>
            <p>Сообщение</p>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <p>Картинка*</p>
            <input type="file" name="image" accept="image/png,image/jpeg" className='form__file'/>
          </div>
          <div>
              <button>Отправить</button>
          </div>
      </form>
    </div>
    );
}

export default FormContact;