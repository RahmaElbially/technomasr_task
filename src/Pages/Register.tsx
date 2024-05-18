import React, { useState } from 'react';
import '../Style/RegisterStyle.css';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let validationErrors: Partial<FormData> = {};
    if (!formData.firstName) validationErrors.firstName = 'يجب إدخال الإسم الأول';
    if (!formData.lastName) validationErrors.lastName = 'يجب إدخال الإسم الثاني';
    if (!formData.username) validationErrors.username = 'يجب إدخال اسم المستخدم';
    if (!formData.password) {
      validationErrors.password = 'يجب إدخال كلمة المرور';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'يجب أن تحتوي كلمة المرور 6 أحرف علي الأقل';
    }
    
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted', formData);
      // Navigate to the login page
      navigate('/user');
    }
  };

  return (
    <div className='my-16'>
      <h2 className='text-4xl font-bold text-center mb-10'>أهلا بك</h2>  
      <form onSubmit={handleSubmit}>
        <div>
          <label>الإسم الأول :</label>
          <input
            className='dif-margin'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className='error'>{errors.firstName}</span>}
        </div>
        <div>
          <label>الإسم الثاني :</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className='error'>{errors.lastName}</span>}
        </div>
        <div>
          <label>اسم المستخدم :</label>
          <input
            className='user-name'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className='error'>{errors.username}</span>}
        </div>
        <div>
          <label>كلمة المرور :</label>
          <input
            className='dif-margin'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <button type="submit" className='mt-5'>إنشاء حساب</button>
        <Link to={'/user'} className='mt-5'>لديك حساب ؟ تسجيل الدخول</Link>
      </form>
    </div>
  );
};

export default RegisterForm;