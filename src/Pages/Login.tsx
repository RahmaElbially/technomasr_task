import React, { useState } from 'react';
import axios from 'axios';
import '../Style/LoginStyle.css';
import { Link, useNavigate } from 'react-router-dom';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({ username: '', password: '' });
  const [errors, setErrors] = useState<FormValues>({ username: '', password: '' });
  const [apiError, setApiError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors: FormValues = { username: '', password: '' };
    let isValid = true;

    if (!values.username) {
      formErrors.username = 'يجب إدخال إسم المستخدم';
      isValid = false;
    }

    if (!values.password) {
      formErrors.password = 'يجب إدخال كلمة المرور';
      isValid = false;
    } else if (values.password.length < 6) {
      formErrors.password = 'يجب أن تحتوي كلمة المرور 6 أحرف علي الأقل';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('https://api.faceapi.com/auth/login', {
          username: values.username,
          password: values.password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token);  

        console.log('Login successful', response.data);
        navigate('/');  
      } catch (error) {
        console.error('Login error', error);
        setApiError('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className='my-16'>
        <h2 className='text-4xl font-bold text-center mb-10'>مرحبا بك</h2>  
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">اسم المستخدم :</label>
                <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
                <label htmlFor="password">كلمة المرور :</label>
                <input
                className='password'
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            {apiError && <span className="error">{apiError}</span>}
            <button type="submit" className='mt-5'>تسجيل الدخول</button>
            <Link to={'/register'} className='mt-5'>ليس لديك حساب ؟ إنشاء حساب</Link>
        </form>
    </div>
  );
};

export default LoginForm