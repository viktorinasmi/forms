import './index.css'
import {useState} from "react";

const Index = () => {
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [phone, setPhone] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым')
    const [nameError, setNameError] = useState('Имя не может быть пустым')


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailValidate = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (!emailValidate.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорретный email')
        } else {
            setEmailError('')
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        let phoneValidate = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!phoneValidate.test(phone)) {
            setPhoneError('Некорретный телефон')
        } else {
            setPhoneError('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
         case 'email':
            setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
        }
    }



    return(
        <div className="form">
            <form action="">
                <p className="form_title">Заполните форму</p>
                <div className="form__input__box">
                    <input
                        value={name}
                        onBlur={e => blurHandler(e)}
                        className="form__input"
                        placeholder='Введите имя'
                        name="name"
                        type="text"/>
                    {(nameDirty && nameError) && <div style={{color: 'red' , fontSize: "12px"}}>{nameError}</div>}
                </div>
                <div className="form__input__box">
                    <input
                        onChange={e => emailHandler(e)}
                        value={email}
                        onBlur={e => blurHandler(e)} className="form__input"
                        placeholder='Введите почту'
                        name="email"
                        type="text"/>
                    {(emailDirty && emailError) && <div style={{color: 'red', fontSize: "12px"}}>{emailError}</div>}
                </div>
                <div className="form__input__box">
                    <input
                        onChange={e => phoneHandler(e)}
                        value={phone}
                        maxLength={10}
                        onBlur={e => blurHandler(e)} className="form__input"
                        placeholder='Введите телефон'
                        name="phone"
                        type="text"/>
                    {(phoneDirty && phoneError) && <div style={{color: 'red', fontSize: "12px"}}>{phoneError}</div>}
                </div>
                <div className="form__checkbox">
                    <input name={"rules"} type="checkbox"/>
                    Согласен с условиями
                </div>
                <button className="form_button">Оставить заявку</button>
            </form>
        </div>
    )
}

export default Index;